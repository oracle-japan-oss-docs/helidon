<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.45"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.44" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.29RfAI" title="原文 : Using Config Metadata"><router-link @click.native="this.scrollFix('#_using_config_metadata')" to="#_using_config_metadata">構成メタデータの使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3xc8uL" title="原文 : Responding to Changes in Config Sources"><router-link @click.native="this.scrollFix('#polling')" to="#polling">構成ソースの変更への対応</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.HYwIY" title="原文 : Accessing Always-current Values"><router-link @click.native="this.scrollFix('#_accessing_always_current_values')" to="#_accessing_always_current_values">Always-current値へのアクセス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.60"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3f4QQi.spl1" title="原文 : An in-memory config tree, once loaded, is immutable, even though the data in the underlying config sources can change over time.">インメモリー構成ツリーは、一度ロードされると、基礎となる構成ソースのデータが時間の経過とともに変化する<em>可能性があっても</em>不変です。</span> <span class="merged" id="all.3f4QQi.spl2" title="原文 : The config system internally records which config sources it used to load each config tree and some metadata about the configuration.">構成システムは、各構成ツリーのロードに使用した構成ソースと、構成に関するいくつかのメタデータを内部的に記録します。</span> <span class="merged" id="all.3f4QQi.spl3" title="原文 : Your application can be aware of updates to the underlying config sources by:">アプリケーションは、次の方法で基礎となる構成ソースの更新を認識できます:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4FGjBr" title="原文 : using the metadata the config system maintains,">構成システムが保持するメタデータを使用</span>

</li>
<li>
<span class="merged" id="all.3f2HE6" title="原文 : responding to change when the config sources are updated, or">構成ソースが更新されたときの変更への応答</span>

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
<p><span class="merged" id="all.95ctg.spl1" title="原文 : The config system records when it loads each configuration into memory.">config systemは、各構成をメモリーにロードするタイミングを記録します。</span> <span class="merged" id="all.95ctg.spl2" title="原文 : Your application can retrieve it by invoking the timestamp method:">アプリケーションでは、<a href="/apidocs/io.helidon.config/io/helidon/config/Config.html#timestamp--" target="_blank">timestampメソッド</a>を起動して取得できます:</span> </p>

<markup
lang="java"

>java.time.Instance loadTime = myConfig.timestamp();</markup>

<p><span class="merged" id="all.3yTyvA" title="原文 : on any config node.">任意の構成ノード。</span></p>

</div>


<h3 id="_config_context"><span class="merged" id="all.47MWoQ" title="原文 : Config Context">構成コンテキスト</span></h3>
<div class="section">
<p><span class="merged" id="all.3fk9VZ.spl1" title="原文 : The config system maintains a Config.Context for each Config node.">構成システムでは、<code>Config</code>ノードごとに<a href="/apidocs/io.helidon.config/io/helidon/config/Config.Context.html" target="_blank"><code>Config.Context</code></a>が保持されます。</span> <span class="merged" id="all.3fk9VZ.spl2" title="原文 : Your application can retrieve the context by invoking the Config.context() method and then use it for these operations:">アプリケーションでは、<code>Config.context()</code>メソッドを起動してコンテキストを取得し、次の操作に使用できます:</span> </p>

<div class="block-title"><span class="merged" id="all.4chmmZ" title="原文 : Uses of Config.Context"><span><code>Config.Context</code>の使用</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1e8dVO.4"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.JUOSC.44"  title="原文:: Usage">使用</span></th>
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
<p><span class="merged" id="all.1LQUo" title="原文 : Although in-memory config trees do not change once loaded, applications can respond to change in the underlying config sources by:">インメモリー構成ツリーはロード後に変更されませんが、アプリケーションは次の方法で、基礎となる構成ソースの変更に対応できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.hgYs1" title="原文 : setting up change detection for the config sources used to build a configuration, and">構成のビルドに使用される構成ソースの変更検出の設定、および</span>

</li>
<li>
<span class="merged" id="all.1WMGSG" title="原文 : registering a response to be run when a source changes.">ソースの変更時に実行されるレスポンスの登録。</span>

</li>
</ol>

<p><span class="merged" id="all.3MXmxQ" title="原文 : Your code’s response can react to the changes in whatever way makes sense for your application.">コードのレスポンスは、アプリケーションにとってどのような意味であっても変更に対応できます。</span></p>

<p><span class="merged" id="all.1MwbSG"  title="原文: The following sections describe these steps in detail.">これらのステップについて以下の節で詳細に説明します。</span></p>


<h3 id="_setting_up_config_source_change_detection"><span class="merged" id="all.1y4a9W" title="原文 : Setting up Config Source Change Detection">構成ソース変更検出の設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3IlDXQ.spl1" title="原文 : When the application creates a config source, it can set up change detection for that source.">アプリケーションは、構成ソースを作成するときに、そのソースの変更検出を設定できます。</span> <span class="merged" id="all.3IlDXQ.spl2" title="原文 : This is called polling in the Helidon API but specific change detection algorithms might not use actual polling.">これはHelidon APIでは<em>「ポーリング」</em>と呼ばれますが、特定の変更検出アルゴリズムでは実際のポーリングが使用されない場合があります。</span> <span class="merged" id="all.3IlDXQ.spl3" title="原文 : You choose a specific PollingStrategy for each config source you want to monitor.">モニターする構成ソースごとに特定の<a href="/apidocs/io.helidon.config/io/helidon/config/spi/PollingStrategy.html" target="_blank"><code>PollingStrategy</code></a>を選択します。</span> <span class="merged" id="all.3IlDXQ.spl4" title="原文 : See the section on polling strategies in the config extensions doc page for more information.">詳細は、構成拡張ドキュメント・ページの<router-link :to="{path: '/se/config/extensions', hash: '#Config-SPI-PollingStrategy'}">「ポーリング計画」</router-link>に関する項を参照してください。</span> </p>

<p><span class="merged" id="all.1hIwfg" title="原文 : The config system provides some built-in polling strategies, exposed as these methods on the PollingStrategies class:">構成システムには、<a href="/apidocs/io.helidon.config/io/helidon/config/PollingStrategies.html" target="_blank"><code>PollingStrategies</code></a>クラスで次のメソッドとして公開されている組込みポーリング戦略がいくつか用意されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.lpVCK" title="原文 : regular(Duration interval) - a general-purpose scheduled polling strategy with a specified, constant polling interval."><code>regular(Duration interval)</code> - 指定された一定のポーリング間隔を持つ汎用のスケジュールされたポーリング戦略。</span></p>

</li>
<li>
<p><span class="merged" id="all.434TCb.spl1" title="原文 : watch(Path watchedPath) - a filesystem-specific strategy to watch specified path."><code>watch(Path watchedPath)</code> - 指定されたパスを監視するためのファイルシステム固有の方法。</span> <span class="merged" id="all.434TCb.spl2" title="原文 : You can use this strategy with the file built-in config sources.">この戦略は、<code>file</code>組込み構成ソースとともに使用できます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.8RzA7" title="原文 : nop() - a no-op strategy"><code>nop()</code> - no-op戦略</span></p>

</li>
</ul>

<p><span class="merged" id="all.GXNpm" title="原文 : This example builds a Config object from three sources, each set up with a different polling strategy:">この例では、それぞれ異なるポーリング戦略を使用して設定された3つのソースから<code>Config</code>オブジェクトをビルドします:</span></p>

<markup
lang="java"
title="Build a <code>Config</code> with a different <code>PollingStrategy</code> for each config source"
>Config config = Config.create(
        ConfigSources.file("conf/dev.properties")
                .pollingStrategy(PollingStrategies.regular(Duration.ofSeconds(2))) <span class="conum" data-value="1" />
                .optional(),
        ConfigSources.file("conf/config.properties")
                .changeWatcher(FileSystemWatcher.create())                         <span class="conum" data-value="2" />
                .optional(),
        ConfigSources.file("my.properties")
                .pollingStrategy(PollingStrategies::nop));                         <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.18FXTm" title="原文 : Optional file source conf/dev.properties will be checked for changes every 2 seconds.">オプションの<code>file</code>ソース<code>conf/dev.properties</code>は、<code>2</code>秒ごとに変更がないかチェックされます。</span></li>
<li data-value="2"><span class="merged" id="all.pJUCu" title="原文 : Optional file source conf/config.properties will be watched by the Java WatchService for changes on filesystem.">オプションの<code>file</code>ソース<code>conf/config.properties</code>は、Java <code>WatchService</code>によってファイルシステムの変更が監視されます。</span></li>
<li data-value="3"><span class="merged" id="all.ZtEVN.spl1" title="原文 : The file resource my.properties will not be checked for changes."><code>file</code>リソース<code>my.properties</code>の変更はチェックされません。</span> <span class="merged" id="all.ZtEVN.spl2" title="原文 : PollingStrategies.nop() polling strategy is default."><code>PollingStrategies.nop()</code>ポーリング戦略がデフォルトです。</span> </li>
</ul>

<p><span class="merged" id="all.brPFa" title="原文 : The polling strategies internally inform the config system when they detect changes in the monitored config sources (except that the nop strategy does nothing).">ポーリング戦略は、監視対象の構成ソースで変更を検出したときに、構成システムに内部的に通知します(<code>nop</code>戦略では何も行われません)。</span></p>

</div>


<h3 id="_registering_a_config_change_response"><span class="merged" id="all.10Hl1i" title="原文 : Registering a Config Change Response">構成変更レスポンスの登録</span></h3>
<div class="section">
<p><span class="merged" id="all.lWRxF.spl1" title="原文 : To know when config sources have changed, your application must register its interest on the Config node of interest.">構成ソースが変更されたことを確認するには、目的の<code>Config</code>ノードに目的のソースを登録する必要があります。</span> <span class="merged" id="all.lWRxF.spl2" title="原文 : The config system will then notify your application of any change within the subtree rooted at that node.">構成システムは、そのノードをルートとするサブツリー内の変更をアプリケーションに通知します。</span> <span class="merged" id="all.lWRxF.spl3" title="原文 : In particular, if you register on the root node, then the config system notifies your code of changes anywhere in the config tree.">特に、ルート・ノードに登録した場合、構成システムは構成ツリー内の任意の場所で変更をコードに通知します。</span> </p>


<h4 id="_registering_actions"><span class="merged" id="all.AvWq2" title="原文 : Registering Actions">アクションの登録</span></h4>
<div class="section">
<p><span class="merged" id="all.3sIfx5" title="原文 : You register a function that runs when when a change occurs by using the Config.onChange() method on the node of interest.">変更が発生したときに実行されるファンクションは、対象のノードで<a href="/apidocs/io.helidon.config/io/helidon/config/Config.html#onChange(java.util.function.Consumer)" target="_blank"><code>Config.onChange()</code></a>メソッドを使用して登録します。</span></p>

<markup
lang="java"
title="Subscribe on <code>greeting</code> property changes via <code>onChange</code> method"
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

</div>

</div>


<h2 id="_accessing_always_current_values"><span class="merged" id="all.2B5uz7" title="原文 : Accessing Always-current Values">Always-current値へのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.17HN5P.spl1" title="原文 : Some applications do not need to respond to change as they happen.">アプリケーションの中には、変更に対応する必要がありません。</span> <span class="merged" id="all.17HN5P.spl2" title="原文 : Instead, it’s sufficient that they simply have access to the current value for a particular key in the configuration.">代わりに、構成内の特定のキーの現在の値にアクセスできるのは十分です。</span> </p>

<p><span class="merged" id="all.3yv5sN.spl1" title="原文 : Each asXXX method on the Config class has a companion asXXXSupplier method."><code>Config</code>クラスの各<code>asXXX</code>メソッドには、コンパニオン<code>asXXXSupplier</code>メソッドがあります。</span> <span class="merged" id="all.3yv5sN.spl2" title="原文 : These supplier methods return Supplier&lt;XXX&gt;, and when your application invokes the supplier’s get method the config system returns the then-current value as stored in the config source.">これらのサプライヤ・メソッドは<code>Supplier&lt;XXX></code>を返し、アプリケーションがサプライヤの<code>get</code>メソッドを呼び出すと、構成システムは構成ソースに格納されている<em>「現在の値」</em>を返します。</span> </p>

<markup
lang="java"
title="Access <code>greeting</code> property as <code>Supplier&lt;String&gt;</code>"
>// Construct a Config with the appropriate PollingStrategy on each config source.

Supplier&lt;String&gt; greetingSupplier = config.get("greeting")                     <span class="conum" data-value="1" />
        .asString().supplier();                                                   <span class="conum" data-value="2" />

System.out.println("Always actual greeting value: " + greetingSupplier.get()); <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1gG3rx" title="原文 : Navigate to the Config node for which you want access to the always-current value.">always-current値にアクセスする<code>Config</code>ノードに移動します。</span></li>
<li data-value="2"><span class="merged" id="all.1jVlu0" title="原文 : Retrieve and store the returned supplier for later use.">後で使用するために、返品されたサプライヤを取得して格納します。</span></li>
<li data-value="3"><span class="merged" id="all.K0HPo" title="原文 : Invoke the supplier’s get() method to retrieve the current value of the node.">サプライヤの<code>get()</code>メソッドを呼び出して、ノードの現在の値を取得します。</span></li>
</ul>

<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.2"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.3vXIrH.spl1" title="原文 : Supplier support requires that you create the Config object from config sources that have proper polling strategies set up.">サプライヤ・サポートでは、適切なポーリング戦略が設定された構成ソースから<code>Config</code>オブジェクトを作成する必要があります。</span> <span class="merged" id="all.3vXIrH.spl2" title="原文 : The supplier returns refreshed values only after changes have been detected by the polling strategy.">サプライヤは、ポーリング戦略によって変更が検出された後にのみリフレッシュされた値を返します。</span> </p>
</p>
</div>

</div>

</doc-view>
