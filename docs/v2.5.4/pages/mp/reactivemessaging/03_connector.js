<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_messaging_connector_bean"><span class="merged" id="all.1aEHqU" title="原文 : Messaging Connector Bean">メッセージング・コネクタBean</span></h2>
<div class="section">
<p><span class="merged" id="all.4auohh" title="原文 : Messaging connector is just an application scoped bean which implements IncomingConnectorFactory, OutgoingConnectorFactory or both.">メッセージング・コネクタは、<code>IncomingConnectorFactory</code>、<code>OutgoingConnectorFactory</code>またはその両方を実装するアプリケーション・スコープのBeanです。</span></p>

<markup
lang="java"
title="Example connector <code>example-connector</code>:"
>@ApplicationScoped
@Connector("example-connector")
public class ExampleConnector implements IncomingConnectorFactory, OutgoingConnectorFactory {

   @Override
   public PublisherBuilder&lt;? extends Message&lt;?&gt;&gt; getPublisherBuilder(Config config) {
       return ReactiveStreams.of("foo", "bar")
               .map(Message::of);
   }

   @Override
   public SubscriberBuilder&lt;? extends Message&lt;?&gt;, Void&gt; getSubscriberBuilder(Config config) {
       return ReactiveStreams.&lt;Message&lt;?&gt;&gt;builder()
               .map(Message::getPayload)
               .forEach(o -&gt; System.out.println("Connector says: " + o));
   }
}</markup>

<markup
lang="yaml"
title="Example of channel to connector mapping config:"
>mp.messaging.outgoing.to-connector-channel.connector: example-connector
mp.messaging.incoming.from-connector-channel.connector: example-connector</markup>

<markup
lang="java"
title="Example producing to connector:"
>@Outgoing("to-connector-channel")
public Publisher&lt;String&gt; produce() {
   return Flowable.just("fee", "fie");
}

&gt; Connector says: fee
&gt; Connector says: fie</markup>

<markup
lang="java"
title="Example consuming from connector:"
>@Incoming("from-connector-channel")
public void consume(String value) {
   System.out.println("Consuming: " + value);
}

&gt; Consuming: foo
&gt; Consuming: bar</markup>


<h3 id="_configuration"><span class="merged" id="all.Pfqvy.3"  title="原文:: Configuration">構成</span></h3>
<div class="section">
<markup
lang="java"
title="Example connector accessing configuration:"
>@ApplicationScoped
@Connector("example-connector")
public class ExampleConnector implements IncomingConnectorFactory {

    @Override
    public PublisherBuilder&lt;? extends Message&lt;?&gt;&gt; getPublisherBuilder(final Config config) {

        String firstPropValue = config.getValue("first-test-prop", String.class);<span class="conum" data-value="1" />
        String secondPropValue = config.getValue("second-test-prop", String.class);

        return ReactiveStreams.of(firstPropValue, secondPropValue)
                .map(Message::of);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.CfCS5" title="原文 : Config context is merged from channel and connector contexts">構成コンテキストはチャネルおよびコネクタ・コンテキストからマージされます</span></li>
</ul>
<markup
lang="yaml"
title="Example of channel to connector mapping config with custom properties:"
>mp.messaging.incoming.from-connector-channel.connector: example-connector<span class="conum" data-value="1" />
mp.messaging.incoming.from-connector-channel.first-test-prop: foo<span class="conum" data-value="2" />
mp.messaging.connector.example-connector.second-test-prop: bar<span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tidli" title="原文 : Channel → Connector mapping">チャネル→コネクタ・マッピング</span></li>
<li data-value="2"><span class="merged" id="all.4SOFYq" title="原文 : Channel configuration properties">チャネル構成プロパティ</span></li>
<li data-value="3"><span class="merged" id="all.418ira" title="原文 : Connector configuration properties">コネクタ構成プロパティ</span></li>
</ul>
<markup
lang="java"
title="Example consuming from connector:"
>@Incoming("from-connector-channel")
public void consume(String value) {
   System.out.println("Consuming: " + value);
}

&gt; Consuming: foo
&gt; Consuming: bar</markup>

</div>
</div>
</doc-view>
