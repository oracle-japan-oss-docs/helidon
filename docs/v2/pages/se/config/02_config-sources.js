<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.EEQa4" title="原文 : Loading Configuration: Config Sources and Parsers">構成のロード: 構成ソースおよびパーサー</span></dt>
<dd slot="desc"><p><span class="merged" id="all.18X7Lt.spl1" title="原文 : Configuration can be loaded from different types of locations and expressed in different formats.">構成は、様々なタイプのロケーションからロードし、様々な形式で表すことができます。</span> <span class="merged" id="all.18X7Lt.spl2" title="原文 : This section describes how your application can use config sources and config parsers together to load configuration data.">この項では、アプリケーションで<em>「構成ソース」</em>と<em>「構成パーサー」</em>を併用して構成データをロードする方法について説明します。</span> </p>
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
<p><span class="merged" id="all.1a6ndp.spl1" title="原文 : Each config source reads data from a location of a specific type, without regard to the format of the config data there.">各構成ソースは、構成データの形式に関係なく、特定のタイプのロケーションからデータを読み取ります。</span> <span class="merged" id="all.1a6ndp.spl2" title="原文 : Each config parser converts data expressed in a particular format into the in-memory config data structure that the rest of the config system uses, without any concern for where that data resides or how it is physically retrieved.">各構成パーサーは、特定の形式で表されたデータを、残りの構成システムが使用するインメモリー構成データ構造に変換します。その際、そのデータが存在する場所や物理的に取得される方法は考慮されません。</span> <span class="merged" id="all.1a6ndp.spl3" title="原文 : These two work together to prepare data in a given format at a given location for the config system.">これらの2つは連携して、構成システムの特定のロケーションで特定の形式でデータを準備します。</span> <span class="merged" id="all.1a6ndp.spl4" title="原文 : When your application prepares a Config.Builder it sets what ConfigSources and ConfigParsers the builder should use in constructing the resulting Config object.">アプリケーションで<code>Config.Builder</code>を準備する際、ビルダーが結果の<code>Config</code>オブジェクトをビルドする際に使用する<code>ConfigSource</code>および<code>ConfigParser</code>を設定します。</span> </p>

</div>

<h2 id="_config_sources"><span class="merged" id="all.3pCAKA" title="原文 : Config Sources">構成ソース</span></h2>
<div class="section">
<p><span class="merged" id="all.2WLGrw" title="原文 : If your application uses the default configuration, then the config system automatically sets up the config sources for you, as described in the config introduction.">アプリケーションでデフォルト構成が使用されている場合は、<router-link @click.native="this.scrollFix('#config-sources-default-config')" to="#config-sources-default-config">「構成の概要」</router-link>の説明に従って、構成システムによって構成ソースが自動的に設定されます。</span></p>

<p><span class="merged" id="all.1iMsQ5" title="原文 : If instead your application uses a Config.Builder, then it can invoke one of the sources methods on that builder to set which config sources it should use.">かわりにアプリケーションで<a href="./apidocs/io.helidon.config/io/helidon/config/Config.Builder.html" id="" target="_blank" ><code>Config.Builder</code></a>を使用する場合は、そのビルダーで<code>sources</code>メソッドのいずれかを起動して、使用する構成ソースを設定できます。</span></p>

<p><span class="merged" id="all.ot89H" title="原文 : The config system includes support for several types of config sources, for example:">構成システムには、次のような複数のタイプの構成ソースのサポートが含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1z3THT" title="原文 : a resource on the runtime classpath,">ランタイム・クラスパス上のリソース、</span></p>

</li>
<li>
<p><span class="merged" id="all.5yGot"  title="原文:: environment variables,">環境変数、</span></p>

</li>
<li>
<p><span class="merged" id="all.2Zop8S" title="原文 : a file,">ファイル、</span></p>

</li>
<li>
<p><span class="merged" id="all.4VtM2Z" title="原文 : Java system properties,">Javaシステム・プロパティ、</span></p>

</li>
<li>
<p><span class="merged" id="all.1Qw0gW" title="原文 : a URL,">URL、</span></p>

</li>
<li>
<p><span class="merged" id="all.4NYQd5" title="原文 : a variety of in-memory data structures (String, Map, Properties)">様々なインメモリー・データ構造(<code>String</code>, <code>Map</code>, <code>Properties</code>)</span></p>

</li>
</ul>
<p><span class="merged" id="all.mvEm5" title="原文 : See the JavaDoc for the ConfigSources class for a complete list of the built-in config source types and how to use them.">組込み構成ソース・タイプの完全なリストおよびその使用方法は、<a href="./apidocs/io.helidon.config/io/helidon/config/ConfigSources.html" id="" target="_blank" ><code>ConfigSources</code></a>クラスのJavaDocを参照してください。</span></p>

<p><span class="merged" id="all.l4WUc.spl1" title="原文 : You can also extend the config system to handle other types of sources by implementing the ConfigSource interface."><a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigSource.html" id="" target="_blank" ><code>ConfigSource</code></a>インタフェースを実装することで、他のタイプのソースを処理するように構成システムを拡張することもできます。</span> <span class="merged" id="all.l4WUc.spl2" title="原文 : See the extensions documentation for complete information.">詳細は、<router-link @click.native="this.scrollFix('#config/07_extensions.adoc')" to="#config/07_extensions.adoc">「拡張機能」</router-link>のドキュメントを参照してください。</span> </p>

<p><span class="merged" id="all.2CuSMu" title="原文 : See the advanced topics page for further information on some more involved aspects of config sources.">構成ソースのより関連性の高い側面の詳細は、<router-link @click.native="this.scrollFix('#config/06_advanced-configuration.adoc')" to="#config/06_advanced-configuration.adoc">「高度なトピック」</router-link>のページを参照してください。</span></p>

</div>

<h2 id="parsers"><span class="merged" id="all.3oq9tm" title="原文 : Config Parsers">構成パーサー</span></h2>
<div class="section">
<p><span class="merged" id="all.3pj3Qw.spl1" title="原文 : When it reads configuration text from sources, the config system uses config parsers to translate that text into the in-memory data structures representing that configuration.">ソースから構成テキストを読み取る場合、構成システムは構成パーサーを使用して、そのテキストをその構成を表すメモリー内データ構造に変換します。</span> <span class="merged" id="all.3pj3Qw.spl2" title="原文 : The config system includes several built-in parsers, such as for the Java properties, YAML, JSON, and HOCON formats.">構成システムには、Javaプロパティ、YAML、JSON、HOCON形式などの組込みパーサーがいくつか含まれています。</span> <span class="merged" id="all.3pj3Qw.spl3" title="原文 : See this section in the introduction for how to change your pom.xml to make parsers for those formats available to your application."><code>pom.xml</code>を変更して、これらのフォーマットのパーサーをアプリケーションで使用できるようにする方法は、<router-link @click.native="this.scrollFix('#built-in-formats')" to="#built-in-formats">「概要のこの項」</router-link>を参照してください。</span> <span class="merged" id="all.3pj3Qw.spl4" title="原文 : Then your application can invoke the config builder&rsquo;s addParser method so that builder will use the parsers you choose.">その後、選択したパーサーがビルダーで使用されるように、アプリケーションで<a href="./apidocs/io.helidon.config/io/helidon/config/Config.Builder.html#addParser-io.helidon.config.spi.ConfigParser-" id="" target="_blank" >「構成ビルダー<code>addParser</code>」</a>メソッドを起動できます。</span> </p>

<p><span class="merged" id="all.j6exU.spl1" title="原文 : You can extend the system with custom parsers of your own.">独自のカスタム・パーサーを使用してシステムを拡張できます。</span> <span class="merged" id="all.j6exU.spl2" title="原文 : Implement the ConfigParser interface, then construct a Config.Builder using the addParser method, passing an instance of your customer parser."><a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigParser.html" id="" target="_blank" ><code>ConfigParser</code></a>インタフェースを実装し、<code>addParser</code>メソッドを使用して<code>Config.Builder</code>を構築し、カスタマ・パーサーのインスタンスを渡します。</span> <span class="merged" id="all.j6exU.spl3" title="原文 : Invoke one of the sources methods to include a source that uses the custom format and then build the Config object.">いずれかの<code>sources</code>メソッドを呼び出して、カスタム書式を使用するソースを含めてから、<code>Config</code>オブジェクトをビルドします。</span> </p>

</div>

<h2 id="_detecting_and_responding_to_changes_in_config_data"><span class="merged" id="all.4KvPyn" title="原文 : Detecting and Responding to Changes in Config Data">構成データの変更の検出および対応</span></h2>
<div class="section">
<p><span class="merged" id="all.1aqL5Z" title="原文 : Each Config object which the config system returns to your application is immutable; even if the information in one of the underlying config sources changes, an in-memory data structure built from the earlier content remains unchanged.">構成システムがアプリケーションに返す各<code>Config</code>オブジェクトは不変です。基礎となる構成ソースのいずれかの情報が変更されても、以前のコンテンツから構築されたメモリー内データ構造は変更されません。</span></p>

<p><span class="merged" id="all.2V9oJq.spl1" title="原文 : Even so, the config system allows your application to learn when such underlying changes in the data occur and respond accordingly.">そのような基礎となるデータの変更がいつ発生し、それに応じて応答できるかは、構成システムでもわかります。</span> <span class="merged" id="all.2V9oJq.spl2" title="原文 : The mutability section explains this in detail, and the PollingStrategies JavaDoc describes the built-in implementations.">これについては<router-link @click.native="this.scrollFix('#config/05_mutability-support.adoc')" to="#config/05_mutability-support.adoc">「可変性」</router-link>の項で詳しく説明し、組込みの実装については<a href="./apidocs/io.helidon.config/io/helidon/config/PollingStrategies.html" id="" target="_blank" ><code>PollingStrategies</code></a> JavaDocで説明します。</span> <span class="merged" id="all.2V9oJq.spl3" title="原文 : You can, of course, write your own by implementing the PollingStrategy interface.">もちろん、<a href="./apidocs/io.helidon.config/io/helidon/config/spi/PollingStrategy.html" id="" target="_blank" ><code>PollingStrategy</code></a>インタフェースを実装することで独自のものを記述できます。</span> <span class="merged" id="all.2V9oJq.spl4" title="原文 : On a config source builder invoke pollingStrategy with an instance of your custom strategy and then invoke build to create the ConfigSource.">構成ソース・ビルダーで、カスタム戦略のインスタンスを使用して<code>pollingStrategy</code>を起動し、<code>build</code>を起動して<code>ConfigSource</code>を作成します。</span> </p>

</div>

<h2 id="retry"><span class="merged" id="all.1wllZn" title="原文 : Dealing with Loading Errors: Retry Policies">ロード・エラーの処理: ポリシーの再試行</span></h2>
<div class="section">
<p><span class="merged" id="all.lD9RS.spl1" title="原文 : Config sources, especially those that depend on fallible mechanisms such as the network or a shared file system, might fail to load during momentary outages.">構成ソース、特にネットワークや共有ファイル・システムなどの代替メカニズムに依存するソースは、一時的な停止中にロードに失敗する可能性があります。</span> <span class="merged" id="all.lD9RS.spl2" title="原文 : The config system allows you to build resiliency into your application&rsquo;s use of configuration that relies on such technologies.">configシステムを使用すると、このようなテクノロジに依存する構成をアプリケーションで使用する際の耐障害性をビルドできます。</span> </p>

<p><span class="merged" id="all.4eT3RE.spl1" title="原文 : When your application builds a ConfigSource it can specify a retry policy.">アプリケーションで<code>ConfigSource</code>をビルドするときに、<em>「再試行ポリシー」</em>を指定できます。</span> <span class="merged" id="all.4eT3RE.spl2" title="原文 : When the config system needs to load data from that source it delegates the load operation to that retry policy.">構成システムは、そのソースからデータをロードする必要がある場合、ロード操作をその再試行ポリシーに委任します。</span> <span class="merged" id="all.4eT3RE.spl3" title="原文 : That policy is responsible not only for loading the data but also for detecting errors during loading and implementing the algorithm for deciding when and how many times to retry a failed load before reporting a failure back to your application.">このポリシーは、データのロードだけでなく、ロード中のエラーを検出し、失敗したロードをアプリケーションにレポートする前に再試行するタイミングと回数を決定するアルゴリズムを実装します。</span> </p>

<p><span class="merged" id="all.1yTUpV" title="原文 : The config system includes two predefined retry policies:">構成システムには、次の2つの事前定義済の再試行ポリシーがあります:</span></p>

<div class="block-title"><span class="merged" id="all.XP1dt" title="原文 : Predefined Retry Policies"><span>事前定義済の再試行ポリシー</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4XN9k0"  title="原文:: Policy">ポリシー</span></th>
<th><span class="merged" id="all.1nTCR.4"  title="原文:: Summary">サマリー</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2uiGjj" title="原文 : &quot;just call&quot; (default)">"just call" (default)</span></td>
<td class=""><span class="merged" id="all.23ekGP" title="原文 : asks the config source to load the data with no retry">再試行せずにデータをロードするように構成ソースに要求</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.45zW3q" title="原文 : &quot;repeat&quot;">"repeat"</span></td>
<td class=""><span class="merged" id="all.18g3Of" title="原文 : performs a settable number of time-based retries, reporting failure only after all available retries have failed">時間ベースの再試行を設定可能な回数実行し、使用可能なすべての再試行が失敗した後にのみ失敗をレポート</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.r5h6d" title="原文 : See the RetryPolicies JavaDoc for complete details on these built-in retry policies.">これらの組込みの再試行ポリシーの詳細は、<a href="./apidocs/io.helidon.config/io/helidon/config/RetryPolicies.html" id="" target="_blank" ><code>RetryPolicies</code></a> JavaDocを参照してください。</span></p>

<p><span class="merged" id="all.1cPSGJ.spl1" title="原文 : You can devise your own policy.">独自のポリシーを考案できます。</span> <span class="merged" id="all.1cPSGJ.spl2" title="原文 : Implement the RetryPolicy interface."><a href="./apidocs/io.helidon.config/io/helidon/config/spi/RetryPolicy.html" id="" target="_blank" ><code>RetryPolicy</code></a>インタフェースを実装します。</span> <span class="merged" id="all.1cPSGJ.spl3" title="原文 : Then pass an instance of your policy implementation to the config source builder&rsquo;s retryPolicy method.">次に、ポリシー実装のインスタンスを構成ソース・ビルダーの<code>retryPolicy</code>メソッドに渡します。</span> </p>

</div>
</doc-view>
