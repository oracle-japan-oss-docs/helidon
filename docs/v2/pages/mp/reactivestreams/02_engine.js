<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_helidon_reactive_engine"><span class="merged" id="all.oahf" title="原文 : Helidon Reactive Engine">Helidonリアクティブ・エンジン</span></h2>
<div class="section">

</div>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.24" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.35e2sP" title="原文 : To enable Reactive Engine add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">リアクティブ・エンジンを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.common&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-common-reactive&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_reactive_engine"><span class="merged" id="all.2s64zc" title="原文 : Reactive Engine">リアクティブ・エンジン</span></h2>
<div class="section">
<p><span class="merged" id="all.1282rN.spl1" title="原文 : Helidon has its own set of reactive operators that have no dependencies outside of the Helidon ecosystem.">Helidonには、Helidonエコシステムの外部に依存関係のない、独自のリアクティブ・オペレータのセットがあります。</span> <span class="merged" id="all.1282rN.spl2" title="原文 : These operators can be used with java.util.concurrent.Flow based reactive streams.">これらのオペレータは、<code>java.util.concurrent.Flow</code>ベースのリアクティブ・ストリームで使用できます。</span> <span class="merged" id="all.1282rN.spl3" title="原文 : Stream processing operator chain can be easily constructed by io.helidon.common.reactive.Multi, or io.helidon.common.reactive.Single for streams with single value.">ストリーム処理オペレータ・チェーンは、単一の値を持つストリームに対して<code>io.helidon.common.reactive.Multi</code>または<code>io.helidon.common.reactive.Single</code>で簡単に構築できます。</span> </p>

<markup
lang="java"
title="複数使用例:"
>AtomicInteger sum = new AtomicInteger();

Multi.just("1", "2", "3", "4", "5")
        .limit(3)
        .map(Integer::parseInt)
        .forEach(sum::addAndGet);

System.out.println("Sum: " + sum.get());

&gt; Sum: 6</markup>

<markup
lang="java"
title="単一使用例:"
>Single.just("1")
        .map(Integer::parseInt)
        .map(i -&gt; i + 5)
        .toStage()
        .whenComplete((i, t) -&gt; System.out.println("Result: " + i));

&gt; Result: 6</markup>

<div class="block-title"><span class="merged" id="all.2wgXq3"  title="原文:: Operators"><span>演算子</span></span></div>
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
<td class=""><span class="merged" id="all.1P5J0j"  title="原文:: defer">defer</span></td>
<td class=""><span class="merged" id="all.2XTBjy" title="原文 : Call the given supplier function for each individual downstream Subscriber to return a Flow.Publisher to subscribe to.">個々のダウンストリーム・サブスクライバに対して特定のサプライヤ機能をコールし、サブスクライブするFlow.Publisherを返します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hftJT"  title="原文:: map">map</span></td>
<td class=""><span class="merged" id="all.3514G8" title="原文 : Map this Multi instance to a new Multi of another type using the given Mapper.">指定された<code>Mapper</code>を使用して、この<code>Multi</code>インスタンスを別のタイプの新しい<code>Multi</code>にマップします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49pHn4"  title="原文: defaultIfEmpty">defaultIfEmpty</span></td>
<td class=""><span class="merged" id="all.2o56V4" title="原文 : Signals the default item if the upstream is empty.">アップストリームが空の場合、デフォルトのアイテムを通知します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2X5CWR"  title="原文: switchIfEmpty">switchIfEmpty</span></td>
<td class=""><span class="merged" id="all.1FWjL7" title="原文 : Switch to the other publisher if the upstream is empty.">アップストリームが空の場合は、ほかのパブリッシャに切り替えます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3dRAL3"  title="原文:: peek">peek</span></td>
<td class=""><span class="merged" id="all.35SLh1" title="原文 : Invoke provided consumer for every item in stream.">ストリーム内のすべてのアイテムに対して指定されたコンシューマを呼び出します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3HuCEO"  title="原文:: distinct">distinct</span></td>
<td class=""><span class="merged" id="all.2DgACE" title="原文 : Filter out all duplicates.">すべての重複をフィルタで除外します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2L4Dzp"  title="原文:: filter">filter</span></td>
<td class=""><span class="merged" id="all.4J0J4H" title="原文 : Filter stream items with provided predicate.">指定された述語でストリーム・アイテムをフィルタします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1CcLpY"  title="原文: takeWhile">takeWhile</span></td>
<td class=""><span class="merged" id="all.1OZVVJ.spl1" title="原文 : Take the longest prefix of elements from this stream that satisfy the given predicate.">このストリームから、指定された述語を満たす要素の最長のプレフィクスを取得します。</span> <span class="merged" id="all.1OZVVJ.spl2" title="原文 : As long as predicate returns true, items from upstream are sent to downstream, when predicate returns false stream is completed.">述語がtrueを返すかぎり、述語がfalseストリームを返すと、アップストリームのアイテムがダウンストリームに送信されます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N1co6"  title="原文: dropWhile">dropWhile</span></td>
<td class=""><span class="merged" id="all.DkXj9.spl1" title="原文 : Drop the longest prefix of elements from this stream that satisfy the given predicate.">指定された述語を満たす要素の最長のプレフィクスをこのストリームから削除します。</span> <span class="merged" id="all.DkXj9.spl2" title="原文 : As long as predicate returns true, items from upstream are NOT sent to downstream but being dropped, predicate is never called again after it returns false for the first time.">述語がtrueを返すかぎり、アップストリームのアイテムはダウンストリームに送信されず、ドロップされます。述語は、最初にfalseを返した後に再度コールされることはありません。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Krit6"  title="原文:: limit">limit</span></td>
<td class=""><span class="merged" id="all.1Wkq2Z" title="原文 : Limit stream to allow only specified number of items to pass.">指定した数のアイテムのみを渡すことができるようにストリームを制限します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Y6cUn"  title="原文:: skip">skip</span></td>
<td class=""><span class="merged" id="all.1zBgpU" title="原文 : Skip first n items, all the others are emitted.">最初のn個のアイテムをスキップし、その他はすべて出力されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Yi4LP"  title="原文: flatMap">flatMap</span></td>
<td class=""><span class="merged" id="all.v8aY0" title="原文 : Transform each upstream item with the supplied function into a Flow.Publisher, subscribe to them and then flatten their items into a single sequence of items emitted to the downstream.">指定された関数を使用して各アップストリーム・アイテムを<code>Flow.Publisher</code>に変換し、それらのアイテムをサブスクライブしてから、ダウンストリームに送信される単一のアイテム・シーケンスにフラット化します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Yi4LP.1"  title="原文: flatMap">flatMap</span></td>
<td class=""><span class="merged" id="all.4d1xIY" title="原文 : Transform each upstream item with the supplied function and flatten the resulting Flow.Publisher to downstream while limiting the maximum number of concurrent inner `Flow.Publisher`s and their in-flight item count, optionally aggregating and delaying all errors until all sources terminate.">指定された関数を使用して各アップストリーム・アイテムを変換し、結果の<code>Flow.Publisher</code>をダウンストリームにフラット化し、同時に発生する内部のFlow.Publisherの最大数とその進行中のアイテム数を制限します(オプションで、すべてのソースが終了するまですべてのエラーを集計および遅延します)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4gQvnh"  title="原文: flatMapIterable">flatMapIterable</span></td>
<td class=""><span class="merged" id="all.2qXnJt" title="原文 : Transform each upstream item with the supplied function and flatten the resulting Iterable to the downstream.">指定された関数を使用して各アップストリーム・アイテムを変換し、結果の<code>Iterable</code>をダウンストリームにフラット化します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.o3RAJ"  title="原文: observeOn">observeOn</span></td>
<td class=""><span class="merged" id="all.4OjMYV" title="原文 : Re-emit the upstream&rsquo;s signals to the downstream on the given executor&rsquo;s thread using a default buffer size of 32 and errors skipping ahead of items.">デフォルトのバッファ・サイズである32を使用して、アップストリームのシグナルを指定されたエグゼキュータのスレッドのダウンストリームに再送信し、アイテムの前にエラーをスキップします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.o3RAJ.1"  title="原文: observeOn">observeOn</span></td>
<td class=""><span class="merged" id="all.48nH4Z" title="原文 : Re-emit the upstream&rsquo;s signals to the downstream on the given executor&rsquo;s thread.">アップストリームのシグナルを、指定されたエグゼキュータのスレッドのダウンストリームに再送信します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4FFyRb"  title="原文: forEach">forEach</span></td>
<td class=""><span class="merged" id="all.4eoqhs" title="原文 : Terminal stage, invokes provided consumer for every item in the stream.">ストリーム内のすべてのアイテムに対して提供されたコンシューマを呼び出すターミナル・ステージ。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bnxXz"  title="原文: collectList">collectList</span></td>
<td class=""><span class="merged" id="all.4SUuGv" title="原文 : Collect the items of this Multi instance into a Single of List.">この<code>Multi</code>インスタンスのアイテムを<code>List</code>の<code>Single</code>に収集します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30EcD6"  title="原文:: collect">collect</span></td>
<td class=""><span class="merged" id="all.4UybNZ" title="原文 : Collect the items of this Multi instance into a Single.">この<code>Multi</code>インスタンスのアイテムを<code>Single</code>に収集します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30EcD6.1"  title="原文:: collect">collect</span></td>
<td class=""><span class="merged" id="all.4ayCSP" title="原文 : Collect the items of this Multi into a collection provided via a Supplier and mutated by a BiConsumer callback.">この<code>Multi</code>のアイテムを、<code>Supplier</code>を介して提供され、<code>BiConsumer</code>コールバックによって変更されるコレクションに収集します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1muKKW"  title="原文: collectStream">collectStream</span></td>
<td class=""><span class="merged" id="all.1vDmnA" title="原文 : Collects up upstream items with the help of the callbacks of a java.util.stream.Collector."><code>java.util.stream.Collector</code>のコールバックを使用してアップストリーム・アイテムを収集します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.wWp6e"  title="原文:: reduce">reduce</span></td>
<td class=""><span class="merged" id="all.O8JV2" title="原文 : Combine subsequent items via a callback function and emit the final value result as a Single.">コールバック関数を介して後続のアイテムを結合し、最終値の結果をSingleとして生成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.wWp6e.1"  title="原文:: reduce">reduce</span></td>
<td class=""><span class="merged" id="all.24Mdue" title="原文 : Combine every upstream item with an accumulator value to produce a new accumulator value and emit the final accumulator value as a Single.">全てのアップストリーム・アイテムを累計値と組み合わせて、新しい累計値を生産し、最終累計値をSingleとして出力します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2gH4MR"  title="原文:: first">first</span></td>
<td class=""><span class="merged" id="all.3ELuw1" title="原文 : Get the first item of this Multi instance as a Single.">この<code>Multi</code>インスタンスの最初のアイテムを<code>Single</code>として取得します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.26BCag" title="原文 : Wrap a CompletionStage into a Multi and signal its outcome non-blockingly.">CompletionStageをMultiにラップし、その結果をブロックせずに通知します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA.1"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.26BCag.1" title="原文 : Wrap a CompletionStage into a Multi and signal its outcome non-blockingly.">CompletionStageをMultiにラップし、その結果をブロックせずに通知します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA.2"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.lnXTS" title="原文 : Create a Multi instance wrapped around the given publisher.">指定されたパブリッシャの周囲にラップされた<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA.3"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.46UJec" title="原文 : Create a Multi instance that publishes the given iterable.">指定された反復可能オブジェクトを公開する<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA.4"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.1v1rNq" title="原文 : Create a Multi instance that publishes the given Stream.">指定された<code>Stream</code>を公開する<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28Ps24"  title="原文:: just">just</span></td>
<td class=""><span class="merged" id="all.4lL8w" title="原文 : Create a Multi instance that publishes the given items to a single subscriber.">指定されたアイテムを単一のサブスクライバに公開する<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28Ps24.1"  title="原文:: just">just</span></td>
<td class=""><span class="merged" id="all.4lL8w.1" title="原文 : Create a Multi instance that publishes the given items to a single subscriber.">指定されたアイテムを単一のサブスクライバに公開する<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1r3evi"  title="原文:: singleton">singleton </span></td>
<td class=""><span class="merged" id="all.3qN0KE" title="原文 : Create a Multi that emits a pre-existing item and then completes.">既存のアイテムを発行する<code>Multi</code>を作成してから完了します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1iZkkD"  title="原文:: error">error</span></td>
<td class=""><span class="merged" id="all.1Hfcjv.spl1" title="原文 : Create a Multi instance that reports the given exception to its subscriber(s).">指定された例外をサブスクライバに報告する<code>Multi</code>インスタンスを作成します。</span> <span class="merged" id="all.1Hfcjv.spl2" title="原文 : The exception is reported by invoking Subscriber#onError(java.lang.Throwable) when Publisher#subscribe(Subscriber) is called.">この例外は、<code>Publisher#subscribe(Subscriber)</code>が呼び出されたときに<code>Subscriber#onError(java.lang.Throwable)</code>を呼び出すことによって報告されます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uxuxI"  title="原文:: empty">empty</span></td>
<td class=""><span class="merged" id="all.w4m2q" title="原文 : Get a Multi instance that completes immediately.">すぐに完了する<code>Multi</code>インスタンスを取得します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Tgd84"  title="原文:: never">never</span></td>
<td class=""><span class="merged" id="all.1DUVVr" title="原文 : Get a Multi instance that never completes.">完了しない<code>Multi</code>インスタンスを取得します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2tYybx"  title="原文:: concat">concat</span></td>
<td class=""><span class="merged" id="all.1P3BVs" title="原文 : Concat streams to one.">連結ストリームを1つにストリームします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.233rLA"  title="原文: onTerminate">onTerminate</span></td>
<td class=""><span class="merged" id="all.4cpYOi" title="原文 : Executes given java.lang.Runnable when any of signals onComplete, onCancel or onError is received.">シグナルonComplete、onCancelまたはonErrorのいずれかを受信したときに、指定された<code>java.lang.Runnable</code>を実行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WdHFp"  title="原文: onComplete">onComplete</span></td>
<td class=""><span class="merged" id="all.2ybpz8" title="原文 : Executes given java.lang.Runnable when onComplete signal is received.">onCompleteシグナルの受信時に、指定された<code>java.lang.Runnable</code>を実行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2UmaIa"  title="原文: onError">onError</span></td>
<td class=""><span class="merged" id="all.4oUB1" title="原文 : Executes the given java.util.function.Consumer when an onError signal is received.">onErrorシグナルの受信時に、指定されたjava.util.function.Consumerを実行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1at4NN"  title="原文: onCancel">onCancel</span></td>
<td class=""><span class="merged" id="all.2MABYq" title="原文 : Executes given java.lang.Runnable when a cancel signal is received.">取消しシグナルを受信したときに、指定された<code>java.lang.Runnable</code>を実行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GCsus"  title="原文: takeUntil">takeUntil</span></td>
<td class=""><span class="merged" id="all.1B50yM" title="原文 : Relay upstream items until the other source signals an item or completes.">他のソースがアイテムを通知するか完了するまで、アップストリーム・アイテムをリレーします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hVM65"  title="原文:: range">range</span></td>
<td class=""><span class="merged" id="all.luEJd" title="原文 : Emits a range of ever increasing integers.">増加する整数の範囲を生成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WAeD"  title="原文: rangeLong">rangeLong</span></td>
<td class=""><span class="merged" id="all.2NI9dY" title="原文 : Emits a range of ever increasing longs.">これまでに長くなったことがある範囲を生成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xHM78"  title="原文:: timer">timer</span></td>
<td class=""><span class="merged" id="all.4UPRGr" title="原文 : Signal 0L and complete the sequence after the given time elapsed.">0Lを通知し、指定された時間が経過した後にシーケンスを完了します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.TGaex"  title="原文:: interval">interval</span></td>
<td class=""><span class="merged" id="all.1s3MyM" title="原文 : Signal 0L, 1L and so on periodically to the downstream.">信号0L、1Lなどをダウンストリームに定期的に送信します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.TGaex.1"  title="原文:: interval">interval</span></td>
<td class=""><span class="merged" id="all.2EmWck" title="原文 : Signal 0L after an initial delay, then 1L, 2L and so on periodically to the downstream.">初期遅延後にシグナル0Lが発生し、その後、1L、2Lなどが定期的にダウンストリームに送信されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Ml17q"  title="原文:: timeout">timeout</span></td>
<td class=""><span class="merged" id="all.3NRik2" title="原文 : Signals a TimeoutException if the upstream doesn&rsquo;t signal the next item, error or completion within the specified time.">アップストリームが指定された時間内に次のアイテム、エラーまたは完了を通知しない場合、<code>TimeoutException</code>にシグナルを送信します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Ml17q.1"  title="原文:: timeout">timeout</span></td>
<td class=""><span class="merged" id="all.3TswBN" title="原文 : Switches to a fallback source if the upstream doesn&rsquo;t signal the next item, error or completion within the specified time.">アップストリームが指定された時間内に次のアイテム、エラーまたは完了を通知しない場合、フォールバック・ソースに切り替えます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3g9dWm"  title="原文: onErrorResume">onErrorResume</span></td>
<td class=""><span class="merged" id="all.1fetnG" title="原文 : java.util.function.Function providing one item to be submitted as onNext in case of onError signal is received.">onErrorシグナルを受信した場合にonNextとして送信されるアイテムを提供する<code>java.util.function.Function</code>。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FRzkq"  title="原文: onErrorResumeWith">onErrorResumeWith</span></td>
<td class=""><span class="merged" id="all.1et77F" title="原文 : Resume stream from supplied publisher if onError signal is intercepted.">onErrorシグナルがインターセプトされた場合、指定されたパブリッシャからストリームを再開します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rDsLD"  title="原文:: retry">retry</span></td>
<td class=""><span class="merged" id="all.WqwYL" title="原文 : Retry a failing upstream at most the given number of times before giving up.">失敗したアップストリームを中止する前に、最大で指定された回数再試行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rDsLD.1"  title="原文:: retry">retry</span></td>
<td class=""><span class="merged" id="all.2NDkvb" title="原文 : Retry a failing upstream if the predicate returns true.">述語がtrueを返す場合、失敗したアップストリームを再試行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.35d9Qe"  title="原文: retryWhen">retryWhen</span></td>
<td class=""><span class="merged" id="all.125tky" title="原文 : Retry a failing upstream when the given function returns a publisher that signals an item.">指定された関数がアイテムを通知するパブリッシャを返すときに、失敗したアップストリームを再試行します。</span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_operator_chains_composition"><span class="merged" id="all.1CeSRX" title="原文 : Operator chains composition">オペレータ・チェーンの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.24f8lE" title="原文 : In the situations when part of the operator chain needs to be prepared in advance, compose and to operators are at hand.">オペレータ・チェーンの一部を事前に準備する必要がある場合は、<code>compose</code>および<code>to</code>のオペレータを使用できます。</span></p>

<markup
lang="java"
title="オペレータ・チェーンの組合せ:"
>        // Assembly of stream, nothing is streamed yet
        Multi&lt;String&gt; publisherStage =
                Multi.just("foo", "bar")
                        .map(String::trim);

        Function&lt;Multi&lt;T&gt;, Multi&lt;T&gt;&gt; processorStage =
                upstream -&gt;
                    upstream.map(String::toUpperCase);

        // Execution of pre-prepared stream
        publisherStage
                .compose(processorStage)
                .map(s -&gt; "Item received: " + s)
                .forEach(System.out::println);

&gt; Item received: FOO
&gt; Item received: BAR</markup>

</div>
</div>
</doc-view>
