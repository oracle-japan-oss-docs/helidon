<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_reactive_streams_operators"><span class="merged" id="all.2mqniA.1" title="原文 : Reactive Streams Operators">リアクティブ・ストリーム・オペレータ</span></h2>
<div class="section">
<p><span class="merged" id="all.1EI1nv.1.spl1" title="原文 : Implementation of MicroProfile Reactive Streams Operators specification."><a href="https://download.eclipse.org/microprofile/microprofile-reactive-streams-operators-1.0.1/microprofile-reactive-streams-operators-spec.html" id="" target="_blank" >「MicroProfileリアクティブ・ストリーム・オペレータ」</a>仕様の実装。</span> <span class="merged" id="all.1EI1nv.1.spl2" title="原文 : A standardised tool for manipulation with Reactive Streams, provides set of operators as so called stages, and the builders to prepare graphs of stages for streams to be build from."><a href="https://www.reactive-streams.org/" id="" target="_blank" >「リアクティブ・ストリーム」</a>で操作するための標準化されたツールで、ステージと呼ばれるオペレータのセットと、ストリームのビルド元となるステージのグラフを準備するためのビルダーが用意されています。</span> </p>

<markup
lang="java"
title="単純な閉じたグラフの使用例:"
>AtomicInteger sum = new AtomicInteger();

ReactiveStreams.of("1", "2", "3", "4", "5")
.limit(3)
.map(Integer::parseInt)
.forEach(sum::addAndGet)
.run()
.whenComplete((r, t) -&gt; System.out.println("Sum: " + sum.get()));

&gt; Sum: 6</markup>

<div class="block-title"><span class="merged" id="all.1pwKGI.1" title="原文 : Operators(Stages)"><span>Operators(Stages)</span></span></div>
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
<td class=""><span class="merged" id="all.1jWdnj.1"  title="原文: fromIterable">fromIterable</span></td>
<td class=""><span class="merged" id="all.2xFoZg.1" title="原文 : Create new PublisherBuilder from supplied Iterable">指定されたIterableから新規PublisherBuilderを作成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8Qul8.1"  title="原文:: of">of</span></td>
<td class=""><span class="merged" id="all.3rSP0j.1" title="原文 : Create new PublisherBuilder emitting supplied elements">指定された要素を発行する新しいPublisherBuilderの作成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.25OD5L.1"  title="原文: ofNullable">ofNullable</span></td>
<td class=""><span class="merged" id="all.1s0lwU.1" title="原文 : Empty stream if supplied item is null">指定されたアイテムがnullの場合、ストリームは空です</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3S4iEp.1"  title="原文:: iterate">iterate</span></td>
<td class=""><span class="merged" id="all.2r9qtx.1" title="原文 : Create infinite stream with every next item created by supplied operator from previous item">指定されたオペレータによって前のアイテムから作成された次のすべてのアイテムで無限ストリームを作成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4b11Wl.1"  title="原文:: generate">generate</span></td>
<td class=""><span class="merged" id="all.3BmYTi.1" title="原文 : Create infinite stream with every item created by invocation of supplier">仕入先の起動によって作成されたすべてのアイテムで無限ストリームを作成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uxuxI.3"  title="原文:: empty">empty</span></td>
<td class=""><span class="merged" id="all.DNFsi.1" title="原文 : Create new PublisherBuilder emitting as a first thing complete signal">最初の完了シグナルとして発行する新しいPublisherBuilderを作成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2u0stD.1"  title="原文:: failed">failed</span></td>
<td class=""><span class="merged" id="all.4ZwiWd.1" title="原文 : Create new PublisherBuilder emitting as a first thing error signal">最初のものとして発行する新しいPublisherBuilderエラー・シグナルを作成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2tYybx.3"  title="原文:: concat">concat</span></td>
<td class=""><span class="merged" id="all.AFyMq.1" title="原文 : Concat two streams">2つのストリームの連結</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2lTM0j.1" title="原文 : coupled">coupled</span></td>
<td class=""><span class="merged" id="all.4WuPuR.1" title="原文 : Two parallel streams sharing cancel, onError and onComplete signals">パラレル・ストリーム共有の取消し(onErrorシグナルとonCompleteシグナル)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Krit6.3"  title="原文:: limit">limit</span></td>
<td class=""><span class="merged" id="all.11FqIe.1" title="原文 : Limit the size of the stream, when limit is reached completes">制限に達した場合のストリームのサイズの制限</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3dRAL3.3"  title="原文:: peek">peek</span></td>
<td class=""><span class="merged" id="all.CIzxG.1" title="原文 : Invoke consumer for every item passing this operator">このオペレータを渡すすべてのアイテムに対してコンシューマを起動</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2L4Dzp.3"  title="原文:: filter">filter</span></td>
<td class=""><span class="merged" id="all.4SttJJ.1" title="原文 : Drop item when expression result to false">式の結果がfalseの場合にアイテムを削除</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hftJT.3"  title="原文:: map">map</span></td>
<td class=""><span class="merged" id="all.3vMWy5.1" title="原文 : Transform items">アイテムの変換</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Yi4LP.5"  title="原文: flatMap">flatMap</span></td>
<td class=""><span class="merged" id="all.3s8Mgh.1" title="原文 : Flatten supplied stream to current stream">指定されたストリームを現在のストリームにフラット化</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4gQvnh.3"  title="原文: flatMapIterable">flatMapIterable</span></td>
<td class=""><span class="merged" id="all.2mG50A.1" title="原文 : Flatten supplied iterable to current stream">指定された反復可能を現在のストリームにフラット化します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rzLy7.1"  title="原文: flatMapCompletionStage">flatMapCompletionStage</span></td>
<td class=""><span class="merged" id="all.20cCcc.1" title="原文 : Map elements to completion stage and wait for each to be completed, keeps the order">要素を完了ステージにマップし、それぞれが完了するまで待機して、順序を保持</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4YWiD8.1"  title="原文: flatMapRSPublisher">flatMapRSPublisher</span></td>
<td class=""><span class="merged" id="all.3kBrdC.1" title="原文 : Map elements to Publishers and flatten this sub streams to original stream">要素をパブリッシャにマップし、このサブ・ストリームを元のストリームにフラット化します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1CcLpY.3"  title="原文: takeWhile">takeWhile</span></td>
<td class=""><span class="merged" id="all.2vq2cG.1" title="原文 : Let items pass until expression is true, first time its false completes">式がtrueになるまでアイテムが渡されるようにします(最初にfalseが完了したとき)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N1co6.3"  title="原文: dropWhile">dropWhile</span></td>
<td class=""><span class="merged" id="all.1lonkn.1" title="原文 : Drop items until expression is true, first time its false let everything pass">expressionがtrueになるまでアイテムをドロップし、最初にfalseにするとすべてが渡されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Y6cUn.3"  title="原文:: skip">skip</span></td>
<td class=""><span class="merged" id="all.Onjvw.1" title="原文 : Drop first n items">最初のnアイテムの削除</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3HuCEO.3"  title="原文:: distinct">distinct</span></td>
<td class=""><span class="merged" id="all.1Jyd7O.1" title="原文 : Let pass only distinct items">個別のアイテムのみを渡す</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.cHSEa.1"  title="原文:: via">via</span></td>
<td class=""><span class="merged" id="all.b3s28.1" title="原文 : Connect supplied processor to current stream return supplied processor">指定されたプロセッサを現在のストリームに接続し、指定されたプロセッサを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2UmaIa.3"  title="原文: onError">onError</span></td>
<td class=""><span class="merged" id="all.4RvKfB.1" title="原文 : Invoke supplied consumer when onError signal received">onErrorシグナルの受信時に、指定されたコンシューマを呼び出します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3g9dWm.3"  title="原文: onErrorResume">onErrorResume</span></td>
<td class=""><span class="merged" id="all.3LBD0e.1" title="原文 : Emit one last supplied item when onError signal received">onErrorシグナルを受信したときに、最後に供給されたアイテムを発行</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FRzkq.3"  title="原文: onErrorResumeWith">onErrorResumeWith</span></td>
<td class=""><span class="merged" id="all.1Ea46V.1" title="原文 : When onError signal received continue emitting from supplied publisher builder">onErrorシグナルを受信した場合、指定されたパブリッシャ・ビルダーからの発行が続行されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ufazT.1"  title="原文: onErrorResumeWithRsPublisher">onErrorResumeWithRsPublisher</span></td>
<td class=""><span class="merged" id="all.rysLO.1" title="原文 : When onError signal received continue emitting from supplied publisher">onErrorシグナルが受信された場合、指定されたパブリッシャからの発行が続行されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WdHFp.3"  title="原文: onComplete">onComplete</span></td>
<td class=""><span class="merged" id="all.Cf8VN.1" title="原文 : Invoke supplied runnable when onComplete signal received">onCompleteシグナルの受信時に、指定された実行可能ファイルを呼び出します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.233rLA.3"  title="原文: onTerminate">onTerminate</span></td>
<td class=""><span class="merged" id="all.2Xxv0l.1" title="原文 : Invoke supplied runnable when onComplete or onError signal received">onCompleteまたはonErrorシグナルの受信時に、指定された実行可能ファイルを呼び出します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wiNV6.1"  title="原文:: to">to</span></td>
<td class=""><span class="merged" id="all.4Yqysb.1" title="原文 : Connect this stream to supplied subscriber">このストリームを指定されたサブスクライバに接続</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4gIZ74.1"  title="原文: toList">toList</span></td>
<td class=""><span class="merged" id="all.gB3tP.1" title="原文 : Collect all intercepted items to List">すべてのインターセプトされたアイテムをリストに収集</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30EcD6.5"  title="原文:: collect">collect</span></td>
<td class=""><span class="merged" id="all.3HQM5D.1" title="原文 : Collect all intercepted items with provided collector">指定されたコレクタを持つすべてのインターセプト済アイテムを収集</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4FFyRb.3"  title="原文: forEach">forEach</span></td>
<td class=""><span class="merged" id="all.3B7LMm.1" title="原文 : Invoke supplied Consumer for each intercepted item">インターセプトされたアイテムごとに、指定されたコンシューマを呼び出します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FMlj0.1"  title="原文:: ignore">ignore</span></td>
<td class=""><span class="merged" id="all.2foSCY.1" title="原文 : Ignore all onNext signals, wait for onComplete">すべてのonNextシグナルを無視し、onCompleteを待機</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.wWp6e.5"  title="原文:: reduce">reduce</span></td>
<td class=""><span class="merged" id="all.1RVxbG.1" title="原文 : Reduction with provided expression">指定された式による削減</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ZkGyA.1"  title="原文:: cancel">cancel</span></td>
<td class=""><span class="merged" id="all.1DMQGZ.1" title="原文 : Cancel stream immediately">ストリームの即時取消</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41PO6E.1"  title="原文: findFirst">findFirst</span></td>
<td class=""><span class="merged" id="all.1xZh2U.1" title="原文 : Return first intercepted element">最初にインターセプトされた要素を返します</span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_graphs"><span class="merged" id="all.2honjz.1"  title="原文:: Graphs">グラフ</span></h3>
<div class="section">
<p><span class="merged" id="all.eAnEz.1" title="原文 : Graphs are pre-prepared stream builders with stages, which can be combined together to closed graph with methods via and to."><a href="https://download.eclipse.org/microprofile/microprofile-reactive-streams-operators-1.0.1/microprofile-reactive-streams-operators-spec.html#_graphs" id="" target="_blank" >「グラフ」</a>は、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-streams-operators-1.0.1/microprofile-reactive-streams-operators-spec.html#_stages" id="" target="_blank" >「ステージ」</a>を使用して事前準備されたストリーム・ビルダーであり、<code>via</code>および<code>to</code>メソッドを使用して閉じたグラフに組み合せることができます。</span></p>

<markup
lang="java"
title="グラフの結合とストリームの実行:"
>        // Assembly of stream, nothing is streamed yet
        PublisherBuilder&lt;String&gt; publisherStage =
                ReactiveStreams.of("foo", "bar")
                        .map(String::trim);

        ProcessorBuilder&lt;String, String&gt; processorStage =
                ReactiveStreams.&lt;String&gt;builder()
                        .map(String::toUpperCase);

        SubscriberBuilder&lt;String, Void&gt; subscriberStage =
                ReactiveStreams.&lt;String&gt;builder()
                        .map(s -&gt; "Item received: " + s)
                        .forEach(System.out::println);

        // Execution of pre-prepared stream
        publisherStage
                .via(processorStage)
                .to(subscriberStage).run();

&gt; Item received: FOO
&gt; Item received: BAR</markup>

</div>

<h3 id="_dependency"><span class="merged" id="all.1l1QyT.6"  title="原文:: Dependency">依存性</span></h3>
<div class="section">
<p><span class="merged" id="all.4JnU1V.14" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存性を宣言します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
   &lt;groupId&gt;io.helidon.microprofile.reactive-streams&lt;/groupId&gt;
   &lt;artifactId&gt;helidon-microprofile-reactive-streams&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>
</div>
</doc-view>
