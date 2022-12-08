<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.59"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.35e2sP.1" title="原文 : To enable Reactive Engine add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">リアクティブ・エンジンを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.common&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-common-reactive&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_reactive_engine"><span class="merged" id="all.2s64zc.1" title="原文 : Reactive Engine">リアクティブ・エンジン</span></h2>
<div class="section">
<p><span class="merged" id="all.1282rN.1.spl1" title="原文 : Helidon has its own set of reactive operators that have no dependencies outside of the Helidon ecosystem.">Helidonには、Helidonエコシステムの外部に依存関係のない、独自のリアクティブ・オペレータのセットがあります。</span> <span class="merged" id="all.1282rN.1.spl2" title="原文 : These operators can be used with java.util.concurrent.Flow based reactive streams.">これらのオペレータは、<code>java.util.concurrent.Flow</code>ベースのリアクティブ・ストリームで使用できます。</span> <span class="merged" id="all.1282rN.1.spl3" title="原文 : Stream processing operator chain can be easily constructed by io.helidon.common.reactive.Multi, or io.helidon.common.reactive.Single for streams with single value.">ストリーム処理オペレータ・チェーンは、単一の値を持つストリームに対して<code>io.helidon.common.reactive.Multi</code>または<code>io.helidon.common.reactive.Single</code>で簡単に構築できます。</span> </p>

<markup
lang="java"
title="Example of Multi usage:"
>AtomicInteger sum = new AtomicInteger();

Multi.just("1", "2", "3", "4", "5")
        .limit(3)
        .map(Integer::parseInt)
        .forEach(sum::addAndGet);

System.out.println("Sum: " + sum.get());

&gt; Sum: 6</markup>

<markup
lang="java"
title="Example of Single usage:"
>Single.just("1")
        .map(Integer::parseInt)
        .map(i -&gt; i + 5)
        .toStage()
        .whenComplete((i, t) -&gt; System.out.println("Result: " + i));

&gt; Result: 6</markup>

<div class="block-title"><span class="merged" id="all.2wgXq3.1"  title="原文:: Operators"><span>演算子</span></span></div>
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
<td class=""><span class="merged" id="all.1P5J0j.1"  title="原文:: defer">defer</span></td>
<td class=""><span class="merged" id="all.2XTBjy.1" title="原文 : Call the given supplier function for each individual downstream Subscriber to return a Flow.Publisher to subscribe to.">個々のダウンストリーム・サブスクライバに対して特定のサプライヤ機能をコールし、サブスクライブするFlow.Publisherを返します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hftJT.2"  title="原文:: map">map</span></td>
<td class=""><span class="merged" id="all.3514G8.1" title="原文 : Map this Multi instance to a new Multi of another type using the given Mapper.">指定された<code>Mapper</code>を使用して、この<code>Multi</code>インスタンスを別のタイプの新しい<code>Multi</code>にマップします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49pHn4.1"  title="原文: defaultIfEmpty">defaultIfEmpty</span></td>
<td class=""><span class="merged" id="all.2o56V4.1" title="原文 : Signals the default item if the upstream is empty.">アップストリームが空の場合、デフォルトのアイテムを通知します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2X5CWR.1"  title="原文: switchIfEmpty">switchIfEmpty</span></td>
<td class=""><span class="merged" id="all.1FWjL7.1" title="原文 : Switch to the other publisher if the upstream is empty.">アップストリームが空の場合は、ほかのパブリッシャに切り替えます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3dRAL3.2"  title="原文:: peek">peek</span></td>
<td class=""><span class="merged" id="all.35SLh1.1" title="原文 : Invoke provided consumer for every item in stream.">ストリーム内のすべてのアイテムに対して指定されたコンシューマを呼び出します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3HuCEO.2"  title="原文:: distinct">distinct</span></td>
<td class=""><span class="merged" id="all.2DgACE.1" title="原文 : Filter out all duplicates.">すべての重複をフィルタで除外します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2L4Dzp.2"  title="原文:: filter">filter</span></td>
<td class=""><span class="merged" id="all.4J0J4H.1" title="原文 : Filter stream items with provided predicate.">指定された述語でストリーム・アイテムをフィルタします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1CcLpY.2"  title="原文: takeWhile">takeWhile</span></td>
<td class=""><span class="merged" id="all.1OZVVJ.1.spl1" title="原文 : Take the longest prefix of elements from this stream that satisfy the given predicate.">このストリームから、指定された述語を満たす要素の最長のプレフィクスを取得します。</span> <span class="merged" id="all.1OZVVJ.1.spl2" title="原文 : As long as predicate returns true, items from upstream are sent to downstream, when predicate returns false stream is completed.">述語がtrueを返すかぎり、述語がfalseストリームを返すと、アップストリームのアイテムがダウンストリームに送信されます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N1co6.2"  title="原文: dropWhile">dropWhile</span></td>
<td class=""><span class="merged" id="all.DkXj9.1.spl1" title="原文 : Drop the longest prefix of elements from this stream that satisfy the given predicate.">指定された述語を満たす要素の最長のプレフィクスをこのストリームから削除します。</span> <span class="merged" id="all.DkXj9.1.spl2" title="原文 : As long as predicate returns true, items from upstream are NOT sent to downstream but being dropped, predicate is never called again after it returns false for the first time.">述語がtrueを返すかぎり、アップストリームのアイテムはダウンストリームに送信されず、ドロップされます。述語は、最初にfalseを返した後に再度コールされることはありません。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Krit6.2"  title="原文:: limit">limit</span></td>
<td class=""><span class="merged" id="all.1Wkq2Z.1" title="原文 : Limit stream to allow only specified number of items to pass.">指定した数のアイテムのみを渡すことができるようにストリームを制限します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Y6cUn.2"  title="原文:: skip">skip</span></td>
<td class=""><span class="merged" id="all.1zBgpU.1" title="原文 : Skip first n items, all the others are emitted.">最初のn個のアイテムをスキップし、その他はすべて出力されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Yi4LP.3"  title="原文: flatMap">flatMap</span></td>
<td class=""><span class="merged" id="all.v8aY0.1" title="原文 : Transform each upstream item with the supplied function into a Flow.Publisher, subscribe to them and then flatten their items into a single sequence of items emitted to the downstream.">指定された関数を使用して各アップストリーム・アイテムを<code>Flow.Publisher</code>に変換し、それらのアイテムをサブスクライブしてから、ダウンストリームに送信される単一のアイテム・シーケンスにフラット化します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Yi4LP.4"  title="原文: flatMap">flatMap</span></td>
<td class=""><span class="merged" id="all.4d1xIY.1" title="原文 : Transform each upstream item with the supplied function and flatten the resulting Flow.Publisher to downstream while limiting the maximum number of concurrent inner `Flow.Publisher`s and their in-flight item count, optionally aggregating and delaying all errors until all sources terminate.">指定された関数を使用して各アップストリーム・アイテムを変換し、結果の<code>Flow.Publisher</code>をダウンストリームにフラット化し、同時に発生する内部のFlow.Publisherの最大数とその進行中のアイテム数を制限します(オプションで、すべてのソースが終了するまですべてのエラーを集計および遅延します)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rzLy7.2"  title="原文: flatMapCompletionStage">flatMapCompletionStage</span></td>
<td class=""><span class="merged" id="all.t48dd.1" title="原文 : Transform each upstream item with the supplied function and flatten the resulting CompletionStage results to downstream.">指定された関数を使用して各アップストリーム・アイテムを変換し、結果の<code>CompletionStage</code>結果をダウンストリームにフラット化します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4gQvnh.2"  title="原文: flatMapIterable">flatMapIterable</span></td>
<td class=""><span class="merged" id="all.2qXnJt.1" title="原文 : Transform each upstream item with the supplied function and flatten the resulting Iterable to the downstream.">指定された関数を使用して各アップストリーム・アイテムを変換し、結果の<code>Iterable</code>をダウンストリームにフラット化します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.11TEte.1"  title="原文: flatMapOptional">flatMapOptional</span></td>
<td class=""><span class="merged" id="all.R5iIk.1" title="原文 : Transform each upstream item with the supplied function and flatten the resulting Optional to the downstream as item if present.">指定された関数を使用して各アップストリーム項目を変換し、結果の<code>Optional</code>をアイテムとしてダウンストリームにフラット化します(存在する場合)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.o3RAJ.2"  title="原文: observeOn">observeOn</span></td>
<td class=""><span class="merged" id="all.4OjMYV.1" title="原文 : Re-emit the upstream&rsquo;s signals to the downstream on the given executor&rsquo;s thread using a default buffer size of 32 and errors skipping ahead of items.">デフォルトのバッファ・サイズである32を使用して、アップストリームのシグナルを指定されたエグゼキュータのスレッドのダウンストリームに再送信し、アイテムの前にエラーをスキップします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.o3RAJ.3"  title="原文: observeOn">observeOn</span></td>
<td class=""><span class="merged" id="all.48nH4Z.1" title="原文 : Re-emit the upstream&rsquo;s signals to the downstream on the given executor&rsquo;s thread.">アップストリームのシグナルを、指定されたエグゼキュータのスレッドのダウンストリームに再送信します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4FFyRb.2"  title="原文: forEach">forEach</span></td>
<td class=""><span class="merged" id="all.4eoqhs.1" title="原文 : Terminal stage, invokes provided consumer for every item in the stream.">ストリーム内のすべてのアイテムに対して提供されたコンシューマを呼び出すターミナル・ステージ。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bnxXz.1"  title="原文: collectList">collectList</span></td>
<td class=""><span class="merged" id="all.4SUuGv.1" title="原文 : Collect the items of this Multi instance into a Single of List.">この<code>Multi</code>インスタンスのアイテムを<code>List</code>の<code>Single</code>に収集します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30EcD6.3"  title="原文:: collect">collect</span></td>
<td class=""><span class="merged" id="all.4UybNZ.1" title="原文 : Collect the items of this Multi instance into a Single.">この<code>Multi</code>インスタンスのアイテムを<code>Single</code>に収集します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30EcD6.4"  title="原文:: collect">collect</span></td>
<td class=""><span class="merged" id="all.4ayCSP.1" title="原文 : Collect the items of this Multi into a collection provided via a Supplier and mutated by a BiConsumer callback.">この<code>Multi</code>のアイテムを、<code>Supplier</code>を介して提供され、<code>BiConsumer</code>コールバックによって変更されるコレクションに収集します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1muKKW.1"  title="原文: collectStream">collectStream</span></td>
<td class=""><span class="merged" id="all.1vDmnA.1" title="原文 : Collects up upstream items with the help of the callbacks of a java.util.stream.Collector."><code>java.util.stream.Collector</code>のコールバックを使用してアップストリーム・アイテムを収集します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.wWp6e.3"  title="原文:: reduce">reduce</span></td>
<td class=""><span class="merged" id="all.O8JV2.1" title="原文 : Combine subsequent items via a callback function and emit the final value result as a Single.">コールバック関数を介して後続のアイテムを結合し、最終値の結果をSingleとして生成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.wWp6e.4"  title="原文:: reduce">reduce</span></td>
<td class=""><span class="merged" id="all.24Mdue.1" title="原文 : Combine every upstream item with an accumulator value to produce a new accumulator value and emit the final accumulator value as a Single.">全てのアップストリーム・アイテムを累計値と組み合わせて、新しい累計値を生産し、最終累計値をSingleとして出力します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2gH4MR.1"  title="原文:: first">first</span></td>
<td class=""><span class="merged" id="all.3ELuw1.1" title="原文 : Get the first item of this Multi instance as a Single.">この<code>Multi</code>インスタンスの最初のアイテムを<code>Single</code>として取得します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA.5"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.26BCag.2" title="原文 : Wrap a CompletionStage into a Multi and signal its outcome non-blockingly.">CompletionStageをMultiにラップし、その結果をブロックせずに通知します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA.6"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.26BCag.3" title="原文 : Wrap a CompletionStage into a Multi and signal its outcome non-blockingly.">CompletionStageをMultiにラップし、その結果をブロックせずに通知します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA.7"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.lnXTS.1" title="原文 : Create a Multi instance wrapped around the given publisher.">指定されたパブリッシャの周囲にラップされた<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA.8"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.46UJec.1" title="原文 : Create a Multi instance that publishes the given iterable.">指定された反復可能オブジェクトを公開する<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OAUHA.9"  title="原文:: from">from</span></td>
<td class=""><span class="merged" id="all.1v1rNq.1" title="原文 : Create a Multi instance that publishes the given Stream.">指定された<code>Stream</code>を公開する<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28Ps24.2"  title="原文:: just">just</span></td>
<td class=""><span class="merged" id="all.4lL8w.2" title="原文 : Create a Multi instance that publishes the given items to a single subscriber.">指定されたアイテムを単一のサブスクライバに公開する<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28Ps24.3"  title="原文:: just">just</span></td>
<td class=""><span class="merged" id="all.4lL8w.3" title="原文 : Create a Multi instance that publishes the given items to a single subscriber.">指定されたアイテムを単一のサブスクライバに公開する<code>Multi</code>インスタンスを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1r3evi.1"  title="原文:: singleton">singleton </span></td>
<td class=""><span class="merged" id="all.3qN0KE.1" title="原文 : Create a Multi that emits a pre-existing item and then completes.">既存のアイテムを発行する<code>Multi</code>を作成してから完了します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1iZkkD.1"  title="原文:: error">error</span></td>
<td class=""><span class="merged" id="all.1Hfcjv.1.spl1" title="原文 : Create a Multi instance that reports the given exception to its subscriber(s).">指定された例外をサブスクライバに報告する<code>Multi</code>インスタンスを作成します。</span> <span class="merged" id="all.1Hfcjv.1.spl2" title="原文 : The exception is reported by invoking Subscriber#onError(java.lang.Throwable) when Publisher#subscribe(Subscriber) is called.">この例外は、<code>Publisher#subscribe(Subscriber)</code>が呼び出されたときに<code>Subscriber#onError(java.lang.Throwable)</code>を呼び出すことによって報告されます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uxuxI.2"  title="原文:: empty">empty</span></td>
<td class=""><span class="merged" id="all.w4m2q.1" title="原文 : Get a Multi instance that completes immediately.">すぐに完了する<code>Multi</code>インスタンスを取得します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Tgd84.1"  title="原文:: never">never</span></td>
<td class=""><span class="merged" id="all.1DUVVr.1" title="原文 : Get a Multi instance that never completes.">完了しない<code>Multi</code>インスタンスを取得します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2tYybx.2"  title="原文:: concat">concat</span></td>
<td class=""><span class="merged" id="all.1P3BVs.1" title="原文 : Concat streams to one.">連結ストリームを1つにストリームします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.233rLA.2"  title="原文: onTerminate">onTerminate</span></td>
<td class=""><span class="merged" id="all.4cpYOi.1" title="原文 : Executes given java.lang.Runnable when any of signals onComplete, onCancel or onError is received.">シグナルonComplete、onCancelまたはonErrorのいずれかを受信したときに、指定された<code>java.lang.Runnable</code>を実行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.vfpqc.2"  title="原文: ifEmpty">ifEmpty</span></td>
<td class=""><span class="merged" id="all.1Okd6E.2" title="原文 : Executes given java.lang.Runnable when stream is finished without value(empty stream).">value(empty stream)なしでストリームが終了したときに、指定された<code>java.lang.Runnable</code>を実行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WdHFp.2"  title="原文: onComplete">onComplete</span></td>
<td class=""><span class="merged" id="all.2ybpz8.1" title="原文 : Executes given java.lang.Runnable when onComplete signal is received.">onCompleteシグナルの受信時に、指定された<code>java.lang.Runnable</code>を実行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2UmaIa.2"  title="原文: onError">onError</span></td>
<td class=""><span class="merged" id="all.4oUB1.1" title="原文 : Executes the given java.util.function.Consumer when an onError signal is received.">onErrorシグナルの受信時に、指定されたjava.util.function.Consumerを実行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1at4NN.1"  title="原文: onCancel">onCancel</span></td>
<td class=""><span class="merged" id="all.2MABYq.1" title="原文 : Executes given java.lang.Runnable when a cancel signal is received.">取消しシグナルを受信したときに、指定された<code>java.lang.Runnable</code>を実行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GCsus.1"  title="原文: takeUntil">takeUntil</span></td>
<td class=""><span class="merged" id="all.1B50yM.1" title="原文 : Relay upstream items until the other source signals an item or completes.">他のソースがアイテムを通知するか完了するまで、アップストリーム・アイテムをリレーします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hVM65.1"  title="原文:: range">range</span></td>
<td class=""><span class="merged" id="all.luEJd.1" title="原文 : Emits a range of ever increasing integers.">増加する整数の範囲を生成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WAeD.1"  title="原文: rangeLong">rangeLong</span></td>
<td class=""><span class="merged" id="all.2NI9dY.1" title="原文 : Emits a range of ever increasing longs.">これまでに長くなったことがある範囲を生成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xHM78.1"  title="原文:: timer">timer</span></td>
<td class=""><span class="merged" id="all.4UPRGr.1" title="原文 : Signal 0L and complete the sequence after the given time elapsed.">0Lを通知し、指定された時間が経過した後にシーケンスを完了します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.TGaex.2"  title="原文:: interval">interval</span></td>
<td class=""><span class="merged" id="all.1s3MyM.1" title="原文 : Signal 0L, 1L and so on periodically to the downstream.">信号0L、1Lなどをダウンストリームに定期的に送信します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.TGaex.3"  title="原文:: interval">interval</span></td>
<td class=""><span class="merged" id="all.2EmWck.1" title="原文 : Signal 0L after an initial delay, then 1L, 2L and so on periodically to the downstream.">初期遅延後にシグナル0Lが発生し、その後、1L、2Lなどが定期的にダウンストリームに送信されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Ml17q.2"  title="原文:: timeout">timeout</span></td>
<td class=""><span class="merged" id="all.3NRik2.1" title="原文 : Signals a TimeoutException if the upstream doesn&rsquo;t signal the next item, error or completion within the specified time.">アップストリームが指定された時間内に次のアイテム、エラーまたは完了を通知しない場合、<code>TimeoutException</code>にシグナルを送信します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Ml17q.3"  title="原文:: timeout">timeout</span></td>
<td class=""><span class="merged" id="all.3TswBN.1" title="原文 : Switches to a fallback source if the upstream doesn&rsquo;t signal the next item, error or completion within the specified time.">アップストリームが指定された時間内に次のアイテム、エラーまたは完了を通知しない場合、フォールバック・ソースに切り替えます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3g9dWm.2"  title="原文: onErrorResume">onErrorResume</span></td>
<td class=""><span class="merged" id="all.1fetnG.1" title="原文 : java.util.function.Function providing one item to be submitted as onNext in case of onError signal is received.">onErrorシグナルを受信した場合にonNextとして送信されるアイテムを提供する<code>java.util.function.Function</code>。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FRzkq.2"  title="原文: onErrorResumeWith">onErrorResumeWith</span></td>
<td class=""><span class="merged" id="all.1et77F.1" title="原文 : Resume stream from supplied publisher if onError signal is intercepted.">onErrorシグナルがインターセプトされた場合、指定されたパブリッシャからストリームを再開します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rDsLD.2"  title="原文:: retry">retry</span></td>
<td class=""><span class="merged" id="all.WqwYL.1" title="原文 : Retry a failing upstream at most the given number of times before giving up.">失敗したアップストリームを中止する前に、最大で指定された回数再試行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rDsLD.3"  title="原文:: retry">retry</span></td>
<td class=""><span class="merged" id="all.2NDkvb.1" title="原文 : Retry a failing upstream if the predicate returns true.">述語がtrueを返す場合、失敗したアップストリームを再試行します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.35d9Qe.1"  title="原文: retryWhen">retryWhen</span></td>
<td class=""><span class="merged" id="all.125tky.1" title="原文 : Retry a failing upstream when the given function returns a publisher that signals an item.">指定された関数がアイテムを通知するパブリッシャを返すときに、失敗したアップストリームを再試行します。</span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_operator_chains_composition"><span class="merged" id="all.1CeSRX.1" title="原文 : Operator chains composition">オペレータ・チェーンの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.24f8lE.1" title="原文 : In the situations when part of the operator chain needs to be prepared in advance, compose and to operators are at hand.">オペレータ・チェーンの一部を事前に準備する必要がある場合は、<code>compose</code>および<code>to</code>のオペレータを使用できます。</span></p>

<markup
lang="java"
title="Combining operator chains:"
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
