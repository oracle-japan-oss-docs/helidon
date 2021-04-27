<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.faGbn.1" title="原文 : Mutability Support">可変性のサポート</span></dt>
<dd slot="desc"><p><span class="merged" id="all.iY5W4.spl1" title="原文 : An in-memory config tree, once loaded, is immutable, even though the data in the underlying config sources can change over time.">インメモリー構成ツリーは、一度ロードされると、基礎となる構成ソースのデータが時間の経過とともに変化する<em>可能性があっても</em>不変です。</span> <span class="merged" id="all.iY5W4.spl2" title="原文 : Your application can find out metadata about a loaded in-memory config and can track changes in config sources.">アプリケーションでは、ロードされたインメモリー構成に関するメタデータを検索し、構成ソースの変更を追跡できます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_overview"><span class="merged" id="all.YrpRV.6"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.40Lkef.spl1" title="原文 : Even though in-memory config trees are immutable, the config system internally records which config sources it used to load each config tree and some metadata about the configuration.">インメモリー構成ツリーは不変ですが、構成システムは、各構成ツリーのロードに使用した構成ソースおよび構成に関する一部のメタデータを内部的に記録します。</span> <span class="merged" id="all.40Lkef.spl2" title="原文 : Your application can be aware of updates to the underlying config sources by:">アプリケーションは、次の方法で基礎となる構成ソースの更新を認識できます:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4FGjBr" title="原文 : using the metadata the config system maintains,">構成システムが保持するメタデータを使用</span>

</li>
<li>
<span class="merged" id="all.2Rp5YD" title="原文 : responding to changes when the config sources are updated, or">構成ソースの更新時の変更への対応</span>

</li>
<li>
<span class="merged" id="all.1es65b" title="原文 : using Suppliers of particular config values to obtain the always-current value for a key.">特定の構成値の<code>Supplier</code>を使用して、キーのalways-current値を取得します。</span>

</li>
</ol>
</div>

<h2 id="_using_config_metadata"><span class="merged" id="all.1tZnZg" title="原文 : Using Config Metadata">構成メタデータの使用</span></h2>
<div class="section">

<h3 id="_loading_time"><span class="merged" id="all.2s01lf"  title="原文:: Loading Time">ロード時間</span></h3>
<div class="section">
<p><span class="merged" id="all.1SoFCu.spl1" title="原文 : The config system records when it loads each configuration into memory.">config systemは、各構成をメモリーにロードするタイミングを記録します。</span> <span class="merged" id="all.1SoFCu.spl2" title="原文 : Your application can retrieve it by invoking the timestamp method:">アプリケーションでは、<a href="./apidocs/io.helidon.config/io/helidon/config/Config.html#timestamp--" id="" target="_blank" >timestampメソッド</a>を起動して取得できます:</span> </p>

<markup
lang="java"

>java.time.Instance loadTime = myConfig.timestamp();</markup>

<p><span class="merged" id="all.3yTyvA" title="原文 : on any config node.">任意の構成ノード。</span></p>

</div>

<h3 id="_config_context"><span class="merged" id="all.47MWoQ" title="原文 : Config Context">構成コンテキスト</span></h3>
<div class="section">
<p><span class="merged" id="all.2lLVsE.spl1" title="原文 : The config system maintains a Config.Context for each Config node.">構成システムでは、<code>Config</code>ノードごとに<a href="./apidocs/io.helidon.config/io/helidon/config/Config.Context.html" id="" target="_blank" ><code>Config.Context</code></a>が保持されます。</span> <span class="merged" id="all.2lLVsE.spl2" title="原文 : Your application can retrieve the context by invoking the Config.context() method and then use it for these operations:">アプリケーションでは、<code>Config.context()</code>メソッドを起動してコンテキストを取得し、次の操作に使用できます:</span> </p>

<div class="block-title"><span class="merged" id="all.4chmmZ" title="原文 : Uses of Config.Context"><span><code>Config.Context</code>の使用</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1e8dVO.3"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.JUOSC.4"  title="原文:: Usage">使用方法</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3RPLmU"  title="原文: Instant timestamp()"><code>Instant timestamp()</code></span></td>
<td class=""><span class="merged" id="all.3wthGY" title="原文 : Returns the load time of the last loaded configuration that used the context.">コンテキストを使用した最後にロードされた構成のロード時間を返します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1OCeXP"  title="原文: Config last()"><code>Config last()</code></span></td>
<td class=""><span class="merged" id="all.26gwKh" title="原文 : Returns the most recently loaded configuration that used the context.">コンテキストを使用した直近にロードされた構成を返します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Fd6VN"  title="原文: Config reload()"><code>Config reload()</code></span></td>
<td class=""><span class="merged" id="all.1YXWrP" title="原文 : Reloads the entire config tree from the current contents of the same config sources used to load the tree in which the current node resides.">現在のノードが存在するツリーのロードに使用されたものと同じ構成ソースの現在のコンテンツから構成ツリー全体をリロードします。</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3Za8c2.spl1" title="原文 : Note that the config context describes or replaces a currently-loaded config tree.">configコンテキストは、現在ロードされているconfigツリーを記述または置換します。</span> <span class="merged" id="all.3Za8c2.spl2" title="原文 : It by itself does not help your application decide when reloading the config might be useful.">アプリケーションが<em>「いつ」</em>設定をリロードするかを決定するのに役立つわけではありません。</span> </p>

</div>
</div>

<h2 id="polling"><span class="merged" id="all.3Gi3CN" title="原文 : Responding to Changes in Config Sources">構成ソースの変更への対応</span></h2>
<div class="section">
<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1ZjnXZ" title="原文 : Evolving API">APIの進化</span></p>
<p ><p><span class="merged" id="all.Oj9zV.spl1" title="原文 : This section describes the Config.changes() method.">この項では、<code>Config.changes()</code>のメソッドについて説明します。</span> <span class="merged" id="all.Oj9zV.spl2" title="原文 : It is marked as deprecated because it returns an io.helidon.reactive.Flow.Publisher object."><code>io.helidon.reactive.Flow.Publisher</code>オブジェクトを返すため、非推奨としてマークされています。</span> <span class="merged" id="all.Oj9zV.spl3" title="原文 : In a future Helidon release that requires Java 11 or later this method will be undeprecated and changed - or a similar method will be added - so that the return type is java.util.concurrent.Flow.Publisher instead.">Java 11以降を必要とする将来のHelidonリリースでは、このメソッドは非推奨になり、変更されます。または、同様のメソッドが追加されるため、戻り型はかわりに<code>java.util.concurrent.Flow.Publisher</code>になります。</span> </p>

<p><span class="merged" id="all.ZLnAm" title="原文 : Any code you write using the existing Config.changes() method might need to change at that time.">既存の<code>Config.changes()</code>メソッドを使用して記述するコードは、その時点で変更する必要がある場合があります。</span></p>
</p>
</div>
<p><span class="merged" id="all.3KmUlG" title="原文 : Although in-memory config trees do not change once loaded, applications can respond to changes in the underlying config sources by:">インメモリー構成ツリーは一度ロードされると変更されませんが、アプリケーションは次の方法で基礎となる構成ソースの変更に応答できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.hgYs1" title="原文 : setting up change detection for the config sources used to build a configuration, and">構成のビルドに使用される構成ソースの変更検出の設定</span>

</li>
<li>
<span class="merged" id="all.1WMGSG" title="原文 : registering a response to be run when a source changes.">ソースの変更時に実行されるレスポンスの登録。</span>

</li>
</ol>
<p><span class="merged" id="all.3MXmxQ" title="原文 : Your code&rsquo;s response can react to the changes in whatever way makes sense for your application.">コードのレスポンスは、アプリケーションにとってどのような意味であっても変更に対応できます。</span></p>

<p><span class="merged" id="all.1MwbSG"  title="原文: The following sections describe these steps in detail.">これらのステップについて以下の節で詳細に説明します。</span></p>


<h3 id="_setting_up_config_source_change_detection"><span class="merged" id="all.1y4a9W" title="原文 : Setting up Config Source Change Detection">構成ソース変更検出の設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3MVGLh.spl1" title="原文 : When the application creates a config source, it can set up change detection for that source.">アプリケーションは、構成ソースを作成するときに、そのソースの変更検出を設定できます。</span> <span class="merged" id="all.3MVGLh.spl2" title="原文 : This is called polling in the Helidon API but specific change detection algorithms might not use actual polling.">これはHelidon APIでは<em>「ポーリング」</em>と呼ばれますが、特定の変更検出アルゴリズムでは実際のポーリングが使用されない場合があります。</span> <span class="merged" id="all.3MVGLh.spl3" title="原文 : You choose a specific PollingStrategy for each config source you want to monitor.">モニターする構成ソースごとに特定の<a href="./apidocs/io.helidon.config/io/helidon/config/spi/PollingStrategy.html" id="" target="_blank" ><code>PollingStrategy</code></a>を選択します。</span> <span class="merged" id="all.3MVGLh.spl4" title="原文 : See the section on polling strategies in the config extensions doc page for more information.">詳細は、構成拡張ドキュメント・ページの<router-link @click.native="this.scrollFix('#Config-SPI-PollingStrategy')" to="#Config-SPI-PollingStrategy">「ポーリング計画」</router-link>に関する項を参照してください。</span> </p>

<p><span class="merged" id="all.4GYC29" title="原文 : The config system provides some built-in polling strategies, exposed as these methods on the PollingStrategies class:">構成システムには、<a href="./apidocs/io.helidon.config/io/helidon/config/PollingStrategies.html" id="" target="_blank" ><code>PollingStrategies</code></a>クラスで次のメソッドとして公開されている組込みポーリング戦略がいくつか用意されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.lpVCK" title="原文 : regular(Duration interval) - a general-purpose scheduled polling strategy with a specified, constant polling interval."><code>regular(Duration interval)</code> - 指定された一定のポーリング間隔を持つ汎用のスケジュールされたポーリング戦略。</span></p>

</li>
<li>
<p><span class="merged" id="all.3BtYPe.spl1" title="原文 : watch(Path watchedPath) - a filesystem-specific strategy to watch specified path."><code>watch(Path watchedPath)</code> - 指定されたパスを監視するためのファイルシステム固有の方法。</span> <span class="merged" id="all.3BtYPe.spl2" title="原文 : You can use this strategy with the file and classpath built-in config sources.">この戦略は、<code>file</code>および<code>classpath</code>の組込み構成ソースで使用できます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.8RzA7" title="原文 : nop() - a no-op strategy"><code>nop()</code> - no-op戦略</span></p>

</li>
</ul>
<p><span class="merged" id="all.GXNpm" title="原文 : This example builds a Config object from three sources, each set up with a different polling strategy:">この例では、それぞれ異なるポーリング戦略を使用して設定された3つのソースから<code>Config</code>オブジェクトをビルドします:</span></p>

<markup
lang="java"
title="構成ソースごとに異なる<code>PollingStrategy</code>を使用した<code>Config</code>のビルド"
>Config config = Config.create(
        ConfigSources.file("conf/dev.properties")
                .pollingStrategy(PollingStrategies.regular(Duration.ofSeconds(2))) <span class="conum" data-value="1" />
                .optional(),
        ConfigSources.file("conf/config.properties")
                .pollingStrategy(PollingStrategies::watch)                         <span class="conum" data-value="2" />
                .optional(),
        ConfigSources.classpath("application.properties")
                .pollingStrategy(PollingStrategies::nop));                         <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.18FXTm" title="原文 : Optional file source conf/dev.properties will be checked for changes every 2 seconds.">オプションの<code>file</code>ソース<code>conf/dev.properties</code>は、<code>2</code>秒ごとに変更がないかチェックされます。</span></li>
<li data-value="2"><span class="merged" id="all.pJUCu" title="原文 : Optional file source conf/config.properties will be watched by the Java WatchService for changes on filesystem.">オプションの<code>file</code>ソース<code>conf/config.properties</code>は、Java <code>WatchService</code>によってファイルシステムの変更が監視されます。</span></li>
<li data-value="3"><span class="merged" id="all.hdypc.spl1" title="原文 : The classpath resource application.properties will not be checked for changes."><code>classpath</code>リソース<code>application.properties</code>の変更はチェックされません。</span> <span class="merged" id="all.hdypc.spl2" title="原文 : PollingStrategies.nop() polling strategy is default."><code>PollingStrategies.nop()</code>ポーリング戦略がデフォルトです。</span> </li>
</ul>
<p><span class="merged" id="all.brPFa" title="原文 : The polling strategies internally inform the config system when they detect changes in the monitored config sources (except that the nop strategy does nothing).">ポーリング戦略は、監視対象の構成ソースで変更を検出したときに、構成システムに内部的に通知します(<code>nop</code>戦略では何も行われません)。</span></p>

</div>

<h3 id="_registering_a_config_change_response"><span class="merged" id="all.10Hl1i" title="原文 : Registering a Config Change Response">構成変更レスポンスの登録</span></h3>
<div class="section">
<p><span class="merged" id="all.lWRxF.spl1" title="原文 : To know when config sources have changed, your application must register its interest on the Config node of interest.">構成ソースが変更されたことを確認するには、目的の<code>Config</code>ノードに目的のソースを登録する必要があります。</span> <span class="merged" id="all.lWRxF.spl2" title="原文 : The config system will then notify your application of any change within the subtree rooted at that node.">構成システムは、そのノードをルートとするサブツリー内の変更をアプリケーションに通知します。</span> <span class="merged" id="all.lWRxF.spl3" title="原文 : In particular, if you register on the root node, then the config system notifies your code of changes anywhere in the config tree.">特に、ルート・ノードに登録した場合、構成システムは構成ツリー内の任意の場所で変更をコードに通知します。</span> </p>

<p><span class="merged" id="all.W80zs" title="原文 : You can register in either of two ways:">次のいずれかの方法で登録できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3VFMFc" title="原文 : register an action to be run upon each change, or">変更のたびに実行されるアクションを登録</span>

</li>
<li>
<span class="merged" id="all.ceTH5" title="原文 : subscribe to a Flow.Publisher that notifies of changes.">変更を通知する<code>Flow.Publisher</code>をサブスクライブします。</span>

</li>
</ol>

<h4 id="_registering_actions"><span class="merged" id="all.AvWq2" title="原文 : Registering Actions">アクションの登録</span></h4>
<div class="section">
<p><span class="merged" id="all.2ZFNk6" title="原文 : A simple approach is for your application to register a function that should run when any change occurs.">単純なアプローチは、変更が発生したときに実行される関数をアプリケーションで登録することです。</span></p>

<markup
lang="java"
title="<code>onChange</code>メソッドを介した<code>greeting</code>プロパティ変更のサブスクライブ"
>config.get("greeting")                                                         <span class="conum" data-value="1" />
        .onChange((changedNode) -&gt; {                                           <span class="conum" data-value="2" />
            System.out.println("Node " + changedNode.key() + " has changed!");
            return true;                                                       <span class="conum" data-value="3" />
        });</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.J5wkT" title="原文 : Navigate to the Config node on which you want to register.">登録する<code>Config</code>ノードに移動します。</span></li>
<li data-value="2"><span class="merged" id="all.3PuUBi.spl1" title="原文 : Invoke the onChange method, passing a function (Function&lt;Config, Boolean&gt;).">ファンクション(<code>Function&lt;Config, Boolean></code>)を渡して、<code>onChange</code>メソッドを起動します。</span> <span class="merged" id="all.3PuUBi.spl2" title="原文 : The config system invokes that function each time the subtree rooted at the greeting node changes.">configシステムは、<code>greeting</code>ノードをルートとするサブツリーが変更されるたびにその関数を呼び出します。</span> <span class="merged" id="all.3PuUBi.spl3" title="原文 : The changedNode is a new instance of Config representing the updated subtree rooted at greeting."><code>changedNode</code>は、<code>greeting</code>をルートとする更新されたサブツリーを表す<code>Config</code>の新しいインスタンスです。</span> </li>
<li data-value="3"><span class="merged" id="all.4IrqB0" title="原文 : The function should return true to continue being run on subsequent changes, false to stop.">ファンクションは、後続の変更で実行を継続する場合は<code>true</code>を戻し、停止する場合は<code>false</code>を戻す必要があります。</span></li>
</ul>
</div>

<h4 id="_subscribing_to_events"><span class="merged" id="all.2ZfZSF"  title="原文:: Subscribing to Events">イベントのサブスクライブ</span></h4>
<div class="section">
<p><span class="merged" id="all.4XxMW" title="原文 : The config system also supports the flow publisher/subscriber model for applications that need more control over the pace at which the config system delivers config change events.">構成システムは、構成システムが構成変更イベントを配信する領域をより詳細に制御する必要があるアプリケーションのフロー・パブリッシャ/サブスクライバ・モデルもサポートしています。</span></p>

<p><span class="merged" id="all.4G2fXf.spl1" title="原文 : Each Config instance exposes the Config.changes() method which returns a Flow.Publisher&lt;Config&gt;.">各<code>Config</code>インスタンスは、<code>Flow.Publisher&lt;Config></code>を返す<a href="./apidocs/io.helidon.config/io/helidon/config/Config.html#changes--" id="" target="_blank" ><code>Config.changes()</code></a>メソッドを公開します。</span> <span class="merged" id="all.4G2fXf.spl2" title="原文 : Your application can invoke this method, then invoke subscribe on the returned Flow.Publisher, passing your own Flow.Subscriber implementation.">アプリケーションでこのメソッドを呼び出してから、返された<code>Flow.Publisher</code>で<code>subscribe</code>を呼び出し、独自の<code>Flow.Subscriber</code>実装を渡すことができます。</span> <span class="merged" id="all.4G2fXf.spl3" title="原文 : The config system will invoke your subscriber&rsquo;s methods as appropriate, most notably calling onNext whenever it detects a change in one of the underlying config sources for the config node of interest.">構成システムは、目的の構成ノードの基礎となる構成ソースのいずれかで変更が検出されるたびに、必要に応じてサブスクライバのメソッド(特に<code>onNext</code>をコールする)を起動します。</span> </p>

<p><span class="merged" id="all.34sq4Q" title="原文 : Mote that your subscriber will be notified when a change occurs anywhere in the subtree represented by the Config node."><code>Config</code>ノードで表されるサブツリー内の任意の場所で変更が発生したときにサブスクライバに通知されるというモット。</span></p>

<markup
lang="java"
title="<code>greeting</code>プロパティの変更のサブスクライブ"
>config.get("greeting")                                                             <span class="conum" data-value="1" />
        .changes()                                                                 <span class="conum" data-value="2" />
        .subscribe(new Flow.Subscriber&lt;&gt;() {                                       <span class="conum" data-value="3" />
            Flow.Subscription subscription;

            @Override
            public void onSubscribe(Flow.Subscription subscription) {              <span class="conum" data-value="4" />
                this.subscription = subscription;
                subscription.request(1);
            }

            @Override
            public void onNext(Config changedNode) {                               <span class="conum" data-value="5" />
                System.out.println("Node " + changedNode.key() + " has changed!");
                subscription.request(1);
            }

            @Override
            public void onError(Throwable throwable) {                             <span class="conum" data-value="6" />
            }

            @Override
            public void onComplete() {                                             <span class="conum" data-value="7" />
            }
        });</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.J5wkT.1" title="原文 : Navigate to the Config node on which you want to register.">登録する<code>Config</code>ノードに移動します。</span></li>
<li data-value="2"><span class="merged" id="all.286hSf" title="原文 : Invoke changes to get the Flow.Publisher of changes to the subtree rooted at the Config node."><code>changes</code>を起動して、<code>Config</code>ノードをルートとするサブツリーに対する変更の<code>Flow.Publisher</code>を取得します。</span></li>
<li data-value="3"><span class="merged" id="all.122b0e" title="原文 : Subscribe to the publisher passing a custom Flow.Subscriber&lt;Config&gt; implementation.">カスタム<code>Flow.Subscriber&lt;Config></code>実装を渡すパブリッシャをサブスクライブします。</span></li>
<li data-value="4"><span class="merged" id="all.YMEOW" title="原文 : Request the first event delivery in onSubscribe method."><code>onSubscribe</code>メソッドで最初のイベント配信をリクエストします。</span></li>
<li data-value="5"><span class="merged" id="all.4EBFuN.spl1" title="原文 : The config system invokes onNext each time the subtree rooted at the greeting node changes.">configシステムは、<code>greeting</code>ノードをルートとするサブツリーが変更されるたびに<code>onNext</code>を呼び出します。</span> <span class="merged" id="all.4EBFuN.spl2" title="原文 : The changedNode is a new instance of Config representing the updated subtree rooted at greeting, regardless of where in the subtree the change actually occurred."><code>changedNode</code>は、サブツリー内で実際に変更が発生した場所に関係なく、<code>greeting</code>をルートとする更新されたサブツリーを表す<code>Config</code>の新しいインスタンスです。</span> <span class="merged" id="all.4EBFuN.spl3" title="原文 : Remember to request the next event delivery in onNext."><code>onNext</code>で次のイベント配信をリクエストしてください。</span> </li>
<li data-value="6"><span class="merged" id="all.1hDYIm" title="原文 : The config system does not currently invoke onError.">構成システムは現在、<code>onError</code>を呼び出しません。</span></li>
<li data-value="7"><span class="merged" id="all.24WmZT" title="原文 : The config system invokes onComplete if all config sources indicate there will be no other change event.">すべての構成ソースが<em>「他の変更イベントはありません」</em>を示している場合、構成システムは<code>onComplete</code>を呼び出します。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.1"  title="原文:: Note">ノート</span></p>
<p ><span class="merged" id="all.1JhAZm.spl1" title="原文 : Your application does not need to subscribe to the new Config instance passed to your onNext method.">アプリケーションは、<code>onNext</code>メソッドに渡された新しい<code>Config</code>インスタンスをサブスクライブする必要が<em>ありません</em>。</span> <span class="merged" id="all.1JhAZm.spl2" title="原文 : The original subscription remains in force for changes to the &quot;new&quot; instance.">元のサブスクリプションは、新しいインスタンスへの変更に対して有効なままです。</span> </p>
</div>
</div>
</div>
</div>

<h2 id="_accessing_always_current_values"><span class="merged" id="all.2B5uz7" title="原文 : Accessing Always-current Values">Always-current値へのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.dEWw7.spl1" title="原文 : Some applications do not need to respond to changes as they happen.">一部のアプリケーションでは、変更の発生時に応答する必要はありません。</span> <span class="merged" id="all.dEWw7.spl2" title="原文 : Instead it&rsquo;s sufficient that they simply have access to the current value for a particular key in the configuration.">かわりに、構成内の特定のキーの現在の値にアクセスするだけで十分です。</span> </p>

<p><span class="merged" id="all.3yv5sN.spl1" title="原文 : Each asXXX method on the Config class has a companion asXXXSupplier method."><code>Config</code>クラスの各<code>asXXX</code>メソッドには、コンパニオン<code>asXXXSupplier</code>メソッドがあります。</span> <span class="merged" id="all.3yv5sN.spl2" title="原文 : These supplier methods return Supplier&lt;XXX&gt;, and when your application invokes the supplier&rsquo;s get method the config system returns the then-current value as stored in the config source.">これらのサプライヤ・メソッドは<code>Supplier&lt;XXX></code>を返し、アプリケーションがサプライヤの<code>get</code>メソッドを呼び出すと、構成システムは構成ソースに格納されている<em>「現在の値」</em>を返します。</span> </p>

<markup
lang="java"
title="<code>greeting</code>プロパティに<code>Supplier&lt;String&gt;</code>としてアクセス"
>// Construct a Config with the appropriate PollingStrategy on each config source.

Supplier&lt;String&gt; greetingSupplier = config.get("greeting")                     <span class="conum" data-value="1" />
        .asString().supplier();                                                   <span class="conum" data-value="2" />

System.out.println("Always actual greeting value: " + greetingSupplier.get()); <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1gG3rx" title="原文 : Navigate to the Config node for which you want access to the always-current value.">always-current値にアクセスする<code>Config</code>ノードに移動します。</span></li>
<li data-value="2"><span class="merged" id="all.1jVlu0" title="原文 : Retrieve and store the returned supplier for later use.">後で使用するために、返品されたサプライヤを取得して格納します。</span></li>
<li data-value="3"><span class="merged" id="all.K0HPo" title="原文 : Invoke the supplier&rsquo;s get() method to retrieve the current value of the node.">サプライヤの<code>get()</code>メソッドを呼び出して、ノードの現在の値を取得します。</span></li>
</ul>
<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.2wtKOc" title="原文 : Supplier support requires that you create the Config object from config sources that have proper polling strategies set up.">サプライヤ・サポートでは、適切なポーリング戦略が設定された構成ソースから<code>Config</code>オブジェクトを作成する必要があります。</span></p>
</p>
</div>
</div>
</doc-view>
