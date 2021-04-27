<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_message"><span class="merged" id="all.2DNrc3"  title="原文:: Message">メッセージ</span></h2>
<div class="section">
<p><span class="merged" id="all.1Hv3Mr.spl1" title="原文 : The Reactive Messaging Message class can be used to wrap or unwrap data items between methods and connectors.">リアクティブ・メッセージング<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_message" id="" target="_blank" >Message</a>クラスを使用して、メソッドとコネクタ間のデータ・アイテムをラップまたはアン・ラップできます。</span> <span class="merged" id="all.1Hv3Mr.spl2" title="原文 : The message wrapping and unwrapping can be performed explicitly by using org.eclipse.microprofile.reactive.messaging.Message#of(T) or implicitly through the messaging core.">メッセージのラップおよびアン・ラップは、<code>org.eclipse.microprofile.reactive.messaging.Message#of(T)</code>を使用して明示的に実行することも、メッセージング・コアを介して暗黙的に実行することもできます。</span> </p>

<markup
lang="java"
title="明示的および暗黙的なラップおよびアン・ラップの例"
>@Outgoing("publisher-payload")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
}

@Incoming("publisher-payload")
@Outgoing("wrapped-message")
public Message&lt;String&gt; rewrapMessageManually(Message&lt;Integer&gt; message) {
    return Message.of(Integer.toString(message.getPayload()));
}

@Incoming("wrapped-message")
public void consumeImplicitlyUnwrappedMessage(String value) {
    System.out.println("Consuming message: " + value);
}</markup>


<h3 id="_acknowledgement"><span class="merged" id="all.2o4NbP"  title="原文:: Acknowledgement">通知</span></h3>
<div class="section">
<p><span class="merged" id="all.15iQm1.spl1" title="原文 : Message carries a callback for reception acknowledgement, acknowledgement in messaging methods is possible manually by org.eclipse.microprofile.reactive.messaging.Message#ack or automatically according explicit or implicit acknowledgement strategy by messaging core.">メッセージには受信確認のためのコールバックが含まれており、メッセージング・メソッドでの確認は、<code>org.eclipse.microprofile.reactive.messaging.Message#ack</code>によって手動で行うことも、メッセージング・コアによる明示的または暗黙的な確認戦略に従って自動的に行うこともできます。</span> <span class="merged" id="all.15iQm1.spl2" title="原文 : Explicit strategy configuration is possible with @Acknowledgment annotation which has one required attribute value that expects the strategy type from enum org.eclipse.microprofile.reactive.messaging.Acknowledgment.Strategy.">明示的な戦略構成は、列挙<code>org.eclipse.microprofile.reactive.messaging.Acknowledgment.Strategy</code>からの戦略タイプを必要とする必須属性<code>value</code>を持つ<code>@Acknowledgment</code>注釈を使用して可能です。</span> <span class="merged" id="all.15iQm1.spl3" title="原文 : More information about supported signatures and implicit automatic acknowledgement can be found in specification Message acknowledgement.">サポートされているシグネチャおよび暗黙的な自動確認の詳細は、仕様<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_message_acknowledgement" id="" target="_blank" >「メッセージ確認」</a>を参照してください。</span> </p>

<div class="block-title"><span class="merged" id="all.1Wcw9I" title="原文 : Acknowledgement strategies"><span>確認戦略</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.47veVG"  title="原文: @Acknowledgment(Acknowledgment.Strategy.NONE)"><code>@Acknowledgment(Acknowledgment.Strategy.NONE)</code></span></td>
<td class=""><span class="merged" id="all.1xCRa0" title="原文 : No acknowledgment">確認なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ohnn6"  title="原文: @Acknowledgment(Acknowledgment.Strategy.MANUAL)"><code>@Acknowledgment(Acknowledgment.Strategy.MANUAL)</code></span></td>
<td class=""><span class="merged" id="all.1nzmW" title="原文 : No automatic acknowledgment">自動確認なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xD2qo"  title="原文: @Acknowledgment(Acknowledgment.Strategy.PRE_PROCESSING)"><code>@Acknowledgment(Acknowledgment.Strategy.PRE_PROCESSING)</code></span></td>
<td class=""><span class="merged" id="all.4TWqSV" title="原文 : Ack automatically before method invocation or processing">メソッドの起動または処理の前に自動的に確認</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.z6BlM"  title="原文: @Acknowledgment(Acknowledgment.Strategy.POST_PROCESSING)"><code>@Acknowledgment(Acknowledgment.Strategy.POST_PROCESSING)</code></span></td>
<td class=""><span class="merged" id="all.XwTmc" title="原文 : Ack automatically after method invocation or processing">メソッドの起動または処理後に自動的に確認</span></td>
</tr>
</tbody>
</table>
</div>
<markup
lang="java"
title="手動確認の例"
>@Outgoing("consume-and-ack")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(Message.of("This is Payload", () -&gt; {
            System.out.println("This particular message was acked!");
            return CompletableFuture.completedFuture(null);
        })).buildRs();
}

@Incoming("consume-and-ack")
@Acknowledgment(Acknowledgment.Strategy.MANUAL)
public void receiveAndAckMessage(Message&lt;String&gt; msg) {
    msg.ack();<span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1kfCJO" title="原文 : Calling ack() will print &quot;This particular message was acked!&quot; to System.out">ack()をコールすると、"This particular message was acked!"がSystem.outに出力されます</span></li>
</ul>
<markup
lang="java"
title="手動確認の例"
>@Outgoing("consume-and-ack")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(Message.of("This is Payload", () -&gt; {
            System.out.println("This particular message was acked!");
            return CompletableFuture.completedFuture(null);
        })).buildRs();
}

@Incoming("consume-and-ack")
@Acknowledgment(Acknowledgment.Strategy.MANUAL)
public void receiveAndAckMessage(Message&lt;String&gt; msg) {
    msg.ack();<span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1kfCJO.1" title="原文 : Calling ack() will print &quot;This particular message was acked!&quot; to System.out">ack()をコールすると、"This particular message was acked!"がSystem.outに出力されます</span></li>
</ul>
<markup
lang="java"
title="明示的な前処理確認の例"
>@Outgoing("consume-and-ack")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(Message.of("This is Payload", () -&gt; {
            System.out.println("This particular message was acked!");
            return CompletableFuture.completedFuture(null);
        })).buildRs();
}

/**
* Prints to the console:
* &gt; This particular message was acked!
* &gt; Method invocation!
*/
@Incoming("consume-and-ack")
@Acknowledgment(Acknowledgment.Strategy.PRE_PROCESSING)
public void receiveAndAckMessage(Message&lt;String&gt; msg) {
    System.out.println("Method invocation!");
}</markup>

<markup
lang="java"
title="明示的な後処理確認の例"
>@Outgoing("consume-and-ack")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(Message.of("This is Payload", () -&gt; {
            System.out.println("This particular message was acked!");
            return CompletableFuture.completedFuture(null);
        })).buildRs();
}

/**
* Prints to the console:
* &gt; Method invocation!
* &gt; This particular message was acked!
*/
@Incoming("consume-and-ack")
@Acknowledgment(Acknowledgment.Strategy.POST_PROCESSING)
public void receiveAndAckMessage(Message&lt;String&gt; msg) {
    System.out.println("Method invocation!");
}</markup>

</div>
</div>
</doc-view>
