<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.53" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.i5Lq0.1" title="原文 : To enable JMS Connector add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">JMSコネクタを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.jms&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-jms&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_reactive_jms_connector"><span class="merged" id="all.2u6yav.1" title="原文 : Reactive JMS Connector">リアクティブJMSコネクタ</span></h2>
<div class="section">
<p><span class="merged" id="all.S3gdo.1" title="原文 : Connecting streams to JMS with Reactive Messaging couldn&rsquo;t be easier.">リアクティブ・メッセージングを使用したJMSへのストリームの接続はより簡単にはできないでしょう。</span></p>


<h3 id="_explicit_config_with_config_builder"><span class="merged" id="all.1KclVb.1" title="原文 : Explicit config with config builder">構成ビルダーによる明示的な構成</span></h3>
<div class="section">
<markup
lang="java"
title="JMSからの消費例:"
>Channel&lt;String&gt; fromJms = Channel.&lt;String&gt;builder()<span class="conum" data-value="1" /><span class="conum" data-value="2" />
        .name("from-jms")
        .publisherConfig(JmsConnector.configBuilder()
                .jndiInitialFactory(ActiveMQInitialContextFactory.class)
                .jndiProviderUrl("tcp://127.0.0.1:61616")
                .type(JmsConfigBuilder.Type.QUEUE)
                .destination("se-example-queue-1")
                .build()
        )
        .build();

JmsConnector jmsConnector = JmsConnector.create();<span class="conum" data-value="3" />

Messaging messaging = Messaging.builder()
        .connector(jmsConnector)
        .listener(fromJms, payload -&gt; {
            System.out.println("Jms says: " + payload);
        })
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.48L0tw" title="原文 : Prepare a channel for connecting jms connector with specific publisher configuration → listener">jmsコネクタを特定のパブリッシャ構成→リスナーに接続するためのチャネルを準備</span></li>
<li data-value="2"><span class="merged" id="all.3Q4kAI" title="原文 : Channel → connector mapping is automatic when using JmsConnector.configBuilder()">JmsConnector.configBuilder()を使用する場合、チャネル→コネクタ・マッピングは自動的に行われます</span></li>
<li data-value="3"><span class="merged" id="all.2GKdce" title="原文 : Prepare JMS connector, can be used by any channel">JMSコネクタを準備します。任意のチャネルで使用できます</span></li>
</ul>
<markup
lang="java"
title="JMSへの生産の例:"
>Channel&lt;String&gt; toJms = Channel.&lt;String&gt;builder()<span class="conum" data-value="1" /><span class="conum" data-value="2" />
        .subscriberConfig(JmsConnector.configBuilder()
                .jndiInitialFactory(ActiveMQInitialContextFactory.class)
                .jndiProviderUrl("tcp://127.0.0.1:61616")
                .type(JmsConfigBuilder.Type.QUEUE)
                .destination("se-example-queue-1")
                .build()
        ).build();

JmsConnector jmsConnector = JmsConnector.create();<span class="conum" data-value="3" />

messaging = Messaging.builder()
        .publisher(toJms, Multi.just("test1", "test2").map(Message::of))
        .connector(jmsConnector)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.48L0tw.1" title="原文 : Prepare a channel for connecting jms connector with specific publisher configuration → listener">jmsコネクタを特定のパブリッシャ構成→リスナーに接続するためのチャネルを準備</span></li>
<li data-value="2"><span class="merged" id="all.3Q4kAI.1" title="原文 : Channel → connector mapping is automatic when using JmsConnector.configBuilder()">JmsConnector.configBuilder()を使用する場合、チャネル→コネクタ・マッピングは自動的に行われます</span></li>
<li data-value="3"><span class="merged" id="all.2GKdce.1" title="原文 : Prepare JMS connector, can be used by any channel">JMSコネクタを準備します。任意のチャネルで使用できます</span></li>
</ul>
</div>

<h3 id="_implicit_helidon_config"><span class="merged" id="all.4UGZ7k.1" title="原文 : Implicit Helidon Config">暗黙的なHelidon構成</span></h3>
<div class="section">
<markup
lang="yaml"
title="コネクタ構成の例:"
>mp.messaging:

  incoming.from-jms:
    connector: helidon-jms
    destination: se-example-queue-1
    session-group-id: session-group-1
    type: queue

  outgoing.to-jms:
    connector: helidon-jms
      destination: se-example-queue-1
      type: queue

  connector:
    helidon-jms:
      jndi:
        jms-factory: ConnectionFactory
        env-properties:
          java.naming.factory.initial: org.apache.activemq.jndi.ActiveMQInitialContextFactory
          java.naming.provider.url: tcp://127.0.0.1:61616</markup>

<markup
lang="java"
title="JMSからの消費例:"
>Channel&lt;String&gt; fromJms = Channel.create("from-jms");

JmsConnector jmsConnector = JmsConnector.create();<span class="conum" data-value="1" />

Messaging messaging = Messaging.builder()
        .connector(jmsConnector)
        .listener(fromJms, payload -&gt; {
            System.out.println("Jms says: " + payload);
        })
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2GKdce.2" title="原文 : Prepare JMS connector, can be used by any channel">JMSコネクタを準備します。任意のチャネルで使用できます</span></li>
</ul>
<markup
lang="java"
title="JMSへの生産の例:"
>Channel&lt;String&gt; toJms = Channel.create("to-jms");

JmsConnector jmsConnector = JmsConnector.create();<span class="conum" data-value="1" />

messaging = Messaging.builder()
        .publisher(toJms, Multi.just("test1", "test2").map(Message::of))
        .connector(jmsConnector)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2GKdce.3" title="原文 : Prepare JMS connector, can be used by any channel">JMSコネクタを準備します。任意のチャネルで使用できます</span></li>
</ul>
<p><span class="merged" id="all.3dx5ug" title="原文 : Don&rsquo;t forget to check out the examples with pre-configured ActiveMQ docker image, for easy testing:">簡単にテストできるように、ActiveMQ dockerイメージが事前構成されている例を忘れずにチェックアウトしてください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2Fzk8.2" title="原文 : https://github.com/oracle/helidon/tree/master/examples/messaging"><a href="https://github.com/oracle/helidon/tree/master/examples/messaging" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/messaging</a></span></p>

</li>
</ul>
</div>
</div>
</doc-view>
