<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2pceCn.1"  title="原文:: Extensions">拡張</span></dt>
<dd slot="desc"><p><span class="merged" id="all.o1vrK" title="原文 : Developer-provided extensions influence how the config system behaves.">開発者が提供する拡張機能は、構成システムの動作に影響します。</span></p>

<p><span class="merged" id="all.4C2xL0.spl1" title="原文 : The config system introduction explains the design of the config system and how its parts work together to read and parse config data, convert it to Java types, fine-tune the look-up of config data, and reload and reprocess data when it changes."><router-link @click.native="this.scrollFix('#config/01_introduction.adoc')" to="#config/01_introduction.adoc">config system introduction</router-link>では、構成システムの設計、および構成データの読取りと解析、構成データのJavaタイプへの変換、構成データの参照の微調整、および変更時のデータのリロードと再処理のために構成システムがどのように連携するかについて説明します。</span> <span class="merged" id="all.4C2xL0.spl2" title="原文 : Config extensions provided by the application modify and expand the way the config system performs these steps.">アプリケーションによって提供される<em>「構成拡張」</em>は、これらのステップを構成システムが実行する方法を変更して展開します。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_introduction"><span class="merged" id="all.4LJMHk.6"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.2143Jo" title="原文 : Each config extension implements one of the interfaces defined in the Configuration SPI:">各構成拡張は、構成SPIで定義されたインタフェースのいずれかを実装します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1RWXUL" title="原文 : ConfigSource - Loads raw configuration data from a given type of source and delegates to a ConfigParser, producing the in-memory data structure which represents the loaded and parsed configuration."><code>ConfigSource</code> - 指定されたタイプのソースからRAW構成データをロードし、<code>ConfigParser</code>に委任して、ロードおよび解析された構成を表すメモリー内データ構造を生産します。</span></p>

</li>
<li>
<p><span class="merged" id="all.2xctUt" title="原文 : ConfigParser - Translates configuration content in a given format into the corresponding internal config data structures."><code>ConfigParser</code> - 指定された形式の構成コンテンツを、対応する内部構成データ構造に変換します。</span></p>

</li>
<li>
<p><span class="merged" id="all.34crnk" title="原文 : OverrideSource - Provides key/value pairs which override config values loaded from any ConfigSource, given the key and ignoring the original value."><code>OverrideSource</code> - キーを指定して、元の値を<em>「無視」</em>して、<code>ConfigSource</code>からロードされた構成値をオーバーライドするキーと値のペアが提供されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.jaucF" title="原文 : ConfigFilter - Transforms config String values returned from any value-type Config node, given the key and the original value."><code>ConfigFilter</code> - キー<em>と</em>元の値を指定して、任意の値タイプの<code>Config</code>ノードから返された構成<code>String</code>値を変換します。</span></p>

</li>
<li>
<p><span class="merged" id="all.4xclL" title="原文 : ConfigMapperProvider - Provides one or more ConfigMappers each of which converts a Config object tree to a Java type specific to the application."><code>ConfigMapperProvider</code> - それぞれが<code>Config</code>オブジェクト・ツリーをアプリケーション固有のJavaタイプに変換する、1つ以上の<code>ConfigMapper</code>を提供します。</span></p>

</li>
<li>
<p><span class="merged" id="all.46liQB" title="原文 : PollingStrategy - Implements a custom technique to trigger polling of underlying sources for changes"><code>PollingStrategy</code> - 基礎となるソースの変更のポーリングをトリガーするカスタム手法を実装</span></p>

</li>
<li>
<p><span class="merged" id="all.m5YIU" title="原文 : ChangeWatcher - Implements a custom technique to watch underlying sources for changes and notifying the config system of such a change"><code>ChangeWatcher</code> - 基礎となるソースの変更を監視し、そのような変更を構成システムに通知するカスタム手法を実装</span></p>

</li>
</ul>
<p><span class="merged" id="all.1Vlfgf.spl1" title="原文 : The extension mechanism of Config can also use Java ServiceLoader.">Configの拡張メカニズムでは、Java <code>ServiceLoader</code>も使用できます。</span> <span class="merged" id="all.1Vlfgf.spl2" title="原文 : For this purpose, you implement providers that serve as factories for your implementation of an extension.">このためには、拡張機能の実装のファクトリとして機能するプロバイダを実装します。</span> <span class="merged" id="all.1Vlfgf.spl3" title="原文 : This is to support meta-configuration even for custom extensions.">これは、カスタム拡張機能の場合でもメタ構成をサポートするためです。</span> <span class="merged" id="all.1Vlfgf.spl4" title="原文 : Service providers:">サービス・プロバイダ:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2YT2Ov" title="原文 : ConfigMapperProvider - support for config mappers, automatically discovered by the config system"><code>ConfigMapperProvider</code> - 構成マッパーのサポート(構成システムによって自動的に検出される)</span></p>

</li>
<li>
<p><span class="merged" id="all.4LwkmK" title="原文 : ConfigFilter - support for config filters, automatically discovered by the config system"><code>ConfigFilter</code> - 構成システムによって自動的に検出される構成フィルタのサポート</span></p>

</li>
<li>
<p><span class="merged" id="all.4G6iTQ" title="原文 : ConfigParser - support for config parsers, automatically discovered by the config system"><code>ConfigParser</code> - 構成システムによって自動的に検出される構成パーサーのサポート</span></p>

</li>
<li>
<p><span class="merged" id="all.42h8fW" title="原文 : ConfigSourceProvider - support for named config sources, configurable through meta configuration"><code>ConfigSourceProvider</code> - メタ構成を介して構成可能な名前付き構成ソースのサポート</span></p>

</li>
<li>
<p><span class="merged" id="all.3BFFGW" title="原文 : ChangeWatcherProvider - support for named change watchers, configurable through meta configuration"><code>ChangeWatcherProvider</code> - メタ構成を介して構成可能な名前付き変更ウォッチャのサポート</span></p>

</li>
<li>
<p><span class="merged" id="all.4c36Gb" title="原文 : OverrideSourceProvider - support for named override sources, configurable through meta configuration"><code>OverrideSourceProvider</code> - メタ構成を介して構成可能な名前付きオーバーライド・ソースのサポート</span></p>

</li>
<li>
<p><span class="merged" id="all.3aHAsE" title="原文 : PollingStrategyProvider - support for named polling strategies, configurable through meta configuration"><code>PollingStrategyProvider</code> - メタ構成を介して構成可能な名前付きポーリング戦略のサポート</span></p>

</li>
<li>
<p><span class="merged" id="all.2Jhnwo" title="原文 : RetryPolicyProvider - support for retry policies, configurable through meta configuration"><code>RetryPolicyProvider</code> - 再試行ポリシーのサポート(メタ構成によって構成可能)</span></p>

</li>
</ul>
<p><span class="merged" id="all.EB3dz" title="原文 : The config system itself implements several of these SPIs, as noted in the sections below.">次のセクションで説明するように、構成システム自体がこれらのSPIのいくつかを実装します。</span></p>

</div>

<h2 id="_setting_up_an_extension"><span class="merged" id="all.1aN1B3" title="原文 : Setting up an extension">拡張機能の設定</span></h2>
<div class="section">
<p><span class="merged" id="all.3Z92B5" title="原文 : You can configure a custom extension in two ways:">カスタム拡張は、次の2つの方法で構成できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1m3xIm" title="原文 : Manual configuration with builder">ビルダーによる手動構成</span>

</li>
<li>
<span class="merged" id="all.1fTl8j" title="原文 : Automatic configuration using a Java service loader">Javaサービス・ローダーを使用した自動構成</span>

</li>
</ol>

<h3 id="_manual_configuration_with_builder"><span class="merged" id="all.1m3xIm.1" title="原文 : Manual configuration with builder">ビルダーによる手動構成</span></h3>
<div class="section">
<p><span class="merged" id="all.4Tx06H" title="原文 : The following example shows configuration of all possible extensions with Config (all custom extension have a name prefix My):">次の例は、<code>Config</code>で使用可能なすべての拡張機能の構成を示しています(すべてのカスタム拡張機能には名前のプレフィクス<code>My</code>があります):</span></p>

<markup
lang="java"

>Config config = Config.builder()
                .addSource(FileConfigSource.builder()
                                   .changeWatcher(MyChangeWatcher.create())
                                   .pollingStrategy(MyPollingStrategy.create())
                                   .parser(MyConfigParser.create())
                                   .retryPolicy(MyRetryPolicy.create()))
                .addSource(MySource.create())
                .addFilter(MyFilter.create())
                .overrides(MyOverrides.create())
                .build()</markup>

</div>

<h3 id="_automatic_configuration_using_a_service_loader"><span class="merged" id="all.236WQn" title="原文 : Automatic configuration using a service loader">サービス・ローダーを使用した自動構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2kh5ai" title="原文 : The following extensions are loaded using a service loader for any configuration instance, and do not require an explicit setup:">次の拡張機能は、構成インスタンスのサービス・ローダーを使用してロードされるため、明示的な設定は必要ありません:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2ZaoA2" title="原文 : ConfigParser - each config parser on the classpath that implements ConfigParserProvider as a Java service loader service"><code>ConfigParser</code> - <code>ConfigParserProvider</code>をJavaサービス・ローダー・サービスとして実装するクラスパス上の各構成パーサー</span></p>

</li>
<li>
<p><span class="merged" id="all.3lSxZZ" title="原文 : ConfigFilter - each filter on the classpath that implements ConfigFilter as a Java service loader service"><code>ConfigFilter</code> - <code>ConfigFilter</code>をJavaサービス・ローダー・サービスとして実装するクラスパスの各フィルタ</span></p>

</li>
</ul>
<p><span class="merged" id="all.2WUTER.spl1" title="原文 : Other extensions are only used from Java service loader when you use meta configuration.">その他の拡張機能は、メタ構成を使用する場合にJavaサービス・ローダーからのみ使用されます。</span> <span class="merged" id="all.2WUTER.spl2" title="原文 : Mapping is done through the type configured in meta configuration, and the type defined by the extension provider interface.">マッピングは、メタ構成で構成されたタイプと、拡張プロバイダ・インタフェースで定義されたタイプを介して行われます。</span> <span class="merged" id="all.2WUTER.spl3" title="原文 : For example for config sources, the interface defines the following methods (only subset shown):">たとえば、構成ソースの場合、インタフェースは次のメソッドを定義します(表示されているのはサブセットのみ):</span> </p>

<markup
lang="java"

>boolean supports(String type);
ConfigSource create(String type, Config metaConfig);</markup>

<p><span class="merged" id="all.ZLOVD" title="原文 : Considering the following meta configuration:">次のメタ構成について考えてみます:</span></p>

<markup
lang="yaml"

>sources:
  - type: "my-type"
    properties:
      my-config: "configuration"</markup>

<p><span class="merged" id="all.21Hini.spl1" title="原文 : The config system would iterate through all ConfigSourceProvider implementations found through Java ServiceLoader based on their priority.">構成システムは、優先度に基づいて、Java <code>ServiceLoader</code>を介して検出されたすべての<code>ConfigSourceProvider</code>実装を反復処理します。</span> <span class="merged" id="all.21Hini.spl2" title="原文 : First provider that returns true when supports(&quot;my-type&quot;) is called would be used, and an instance of a ConfigSource created using create(&quot;my-type&quot;, config), where config is located on the node of properties from meta configuration."><code>supports("my-type")</code>が呼び出されたときに<code>true</code>を返す最初のプロバイダが使用され、<code>create("my-type", config)</code>を使用して作成された<code>ConfigSource</code>のインスタンス(<code>config</code>はメタ構成の<code>properties</code>のノード上にあります)。</span> </p>

</div>

<h3 id="priority-info"><span class="merged" id="all.yxZki"  title="原文:: About Priority">優先順位について</span></h3>
<div class="section">
<p><span class="merged" id="all.4Une58.spl1" title="原文 : The config system invokes extensions of a given type in priority order.">configシステムは、指定されたタイプの拡張を優先度順に呼び出します。</span> <span class="merged" id="all.4Une58.spl2" title="原文 : Developers can express the relative importance of an extension by annotating the service implementation class with @javax.annotation.Priority.">開発者は、サービス実装クラスに<code>@javax.annotation.Priority</code>の注釈を付けることで、拡張機能の相対的な重要性を表すことができます。</span> <span class="merged" id="all.4Une58.spl3"  title="原文: The default value is 100.">デフォルト値は100です。</span> <span class="merged" id="all.4Une58.spl4" title="原文 : A lower priority value represents greater importance."><em>「より低い」</em>優先度の値は、<em>「より大きい」</em>重要度を表します。</span> </p>

</div>
</div>

<h2 id="Config-SPI-ConfigSource"><span class="merged" id="all.vLAR3" title="原文 : ConfigSource SPI">ConfigSource SPI</span></h2>
<div class="section">
<p><span class="merged" id="all.3WzBio.spl1" title="原文 : The config system includes built-in support for several types of sources (for example, Java String, Readable, Properties, and Map objects - see ConfigSources).">構成システムには、複数のタイプのソースに対する組込みサポートが含まれています (たとえば、Java <code>String</code>, <code>Readable</code>, <code>Properties</code>オブジェクトや<code>Map</code>オブジェクト - <a href="./apidocs/io.helidon.config/io/helidon/config/ConfigSources.html" id="" target="_blank" ><code>ConfigSources</code></a>を参照)。</span> <span class="merged" id="all.3WzBio.spl2" title="原文 : Implement a ConfigSource to load raw configuration data from a type of source that the config system does not already support."><a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigSource.html" id="" target="_blank" ><code>ConfigSource</code></a>を実装して、構成システムでまだサポートされていないタイプのソースからRAW構成データをロードします。</span> </p>


<div class="block-title"><span class="merged" id="all.3zY9HP" title="原文 : ConfigSource SPI"><span>ConfigSource SPI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ConfigSource SPI" src="./images/config/spi-ConfigSource.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.3qfhnv.spl1" title="原文 : For config sources that work directly with config nodes, the followin API is available.">構成ノードで直接動作する構成ソースの場合、次のAPIを使用できます。</span> <span class="merged" id="all.3qfhnv.spl2" title="原文 : These interfaces have an implementation provided by Helidon.">これらのインタフェースには、Helidonによって提供される実装があります。</span> <span class="merged" id="all.3qfhnv.spl3" title="原文 : The interfaces ConfigNode, ObjectNode, ValueNode and ListNode represent the in-memory data structure for loaded and parsed configuration data.">インタフェース<code>ConfigNode</code>, <code>ObjectNode</code>, <code>ValueNode</code>および<code>ListNode</code>は、ロードおよび解析された構成データのメモリー内データ構造を表します。</span> </p>


<div class="block-title"><span class="merged" id="all.1UE3Ld" title="原文 : ConfigNode API"><span>ConfigNode API</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ConfigNode API" src="./images/config/spi-node.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2yedJB.spl1" title="原文 : For config sources that work return data (NodeConfigSource and ParsableConfigSource) a Content must be returned that describes the loaded data.">戻りデータ(<code>NodeConfigSource</code>および<code>ParsableConfigSource</code>)を使用する構成ソースの場合、ロードされたデータを記述する<code>Content</code>を返す必要があります。</span> <span class="merged" id="all.2yedJB.spl2" title="原文 : The following diagram depicts the Content API.">次の図は、<code>Content</code> APIを示しています。</span> </p>


<div class="block-title"><span class="merged" id="all.1RcpHa" title="原文 : Content API"><span>コンテンツAPI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="コンテンツAPI" src="./images/config/spi-content.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2muoTH" title="原文 : Some of the methods provided are not always mandatory, yet they are part of the APIs to simplify the overall class structure:">提供されるメソッドの一部は必ずしも必須ではありませんが、全体的なクラス構造を簡素化するAPIの一部です:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1UCWuV.spl1" title="原文 : ConfigContent.stamp() - this method is used by PollingStrategy to determine if content has been changed.">ConfigContent.stamp() - このメソッドは、コンテンツが変更されたかどうかを判断するために<code>PollingStrategy</code>によって使用されます。</span> <span class="merged" id="all.1UCWuV.spl2" title="原文 : This can be always empty for sources, that do not implement PollableSource">これは、<code>PollableSource</code>を実装しないソースの場合は常に<code>empty</code>になることができます</span> </p>

</li>
<li>
<p><span class="merged" id="all.2nDdWz" title="原文 : ConfigParser.Content.charset() - this can return any Charset for media types that are binary">ConfigParser.Content.charset() - バイナリ・メディア・タイプの<code>Charset</code>を返すことができます</span></p>

</li>
<li>
<p><span class="merged" id="all.pXXbq" title="原文 : ConfigParser.Content.mediaType() - this can be used to override media type (that would otherwise be &quot;guessed&quot; from the underlying source)">ConfigParser.Content.mediaType() - これを使用して、メディア・タイプをオーバーライドできます(オーバーライドしない場合、基礎となるソースから推測されます)</span></p>

</li>
<li>
<p><span class="merged" id="all.QSScY" title="原文 : ParsableSource.parser() - this can be used to override parser (that would otherwise be based on mediaType)">ParsableSource.parser() - これを使用してパーサーをオーバーライドできます(オーバーライドしない場合は<code>mediaType</code>に基づきます)</span></p>

</li>
<li>
<p><span class="merged" id="all.3SBoq5" title="原文 : ParsableSource.mediaType() - return the configured or &quot;guessed&quot; media type of this source, see io.helidon.common.media.type.MediaTypes, if not returned, media type must be present on Content, or provided through media type mapping">ParsableSource.mediaType() - このソースの構成済または"guessed"メディア・タイプを返します。<code>io.helidon.common.media.type.MediaTypes</code>を参照してください。返されない場合は、メディア・タイプが<code>Content</code>に存在するか、メディア・タイプ・マッピングを介して提供される必要があります</span></p>

</li>
</ul>
</div>

<h2 id="Config-SPI-ConfigParser"><span class="merged" id="all.3OT97W" title="原文 : ConfigParser SPI">ConfigParser SPI</span></h2>
<div class="section">
<p><span class="merged" id="all.47YXPU.spl1" title="原文 : The parsing step converts config data in some format into the corresponding in-memory representation of config ObjectNodes.">解析ステップでは、なんらかの形式の構成データを、対応するインメモリー表現の構成<code>ObjectNode</code>に変換します。</span> <span class="merged" id="all.47YXPU.spl2" title="原文 : The config system can already parse several data formats (for example Java Properties, YAML, and HOCON).">構成システムでは、複数のデータ形式(Java <code>Properties</code>、YAML、HOCONなど)をすでに解析できます。</span> <span class="merged" id="all.47YXPU.spl3" title="原文 : Implement the ConfigParser SPI to allow the config system to handle additional formats."><a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigParser.html" id="" target="_blank" ><code>ConfigParser</code></a> SPIを実装して、構成システムが追加の形式を処理できるようにします。</span> </p>


<div class="block-title"><span class="merged" id="all.2Bd8CM" title="原文 : ConfigParser SPI"><span>ConfigParser SPI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ConfigParser SPI" src="./images/config/spi-ConfigParser.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.3MzKvx" title="原文 : The ConfigParser.Content interface defines operations on the content that is to be parsed by a ConfigParser implementation:"><code>ConfigParser.Content</code>インタフェースは、<code>ConfigParser</code>実装によって解析されるコンテンツに対する操作を定義します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3DiPk7" title="原文 : mediaType() - Reports the media type of the content (if it is to override media type defined on the config source)"><code>mediaType()</code> - コンテンツのメディア・タイプをレポートします(構成ソースで定義されているメディア・タイプをオーバーライドする場合)</span></p>

</li>
<li>
<p><span class="merged" id="all.1qcTqI" title="原文 : data() - Provides the InputStream with config source data"><code>data()</code> - <code>InputStream</code>に構成ソース・データを提供</span></p>

</li>
<li>
<p><span class="merged" id="all.QRVpo" title="原文 : charset() - Defines the charset to use to parse the stream in case this is a text based media type, ignored by parsers of binary content"><code>charset()</code> - テキスト・ベースのメディア・タイプの場合にストリームの解析に使用する文字セットを定義します。バイナリ・コンテンツのパーサーでは無視されます</span></p>

</li>
</ul>
<p><span class="merged" id="all.184yDV.spl1" title="原文 : The application can register parsers for a builder by invoking Config.Builder#addParser(ConfigParser).">アプリケーションは、<code>Config.Builder#addParser(ConfigParser)</code>を起動することで、ビルダーのパーサーを登録できます。</span> <span class="merged" id="all.184yDV.spl2" title="原文 : The config system also uses the Java service loader mechanism to load automatically, for all builders, any parsers listed in the META-INF/services/io.helidon.config.spi.ConfigParser resource on the runtime classpath.">また、構成システムは、Javaサービス・ローダー・メカニズムを使用して、すべてのビルダーに対して、ランタイム・クラスパスの<code>META-INF/services/io.helidon.config.spi.ConfigParser</code>リソースにリストされているパーサーを自動的にロードします。</span> <span class="merged" id="all.184yDV.spl3" title="原文 : Prevent autoloading of parsers for a given builder by invoking Config.Builder#disableParserServices()."><code>Config.Builder#disableParserServices()</code>を起動して、特定のビルダーのパーサーの自動ロードを防止します。</span> </p>

<p><span class="merged" id="all.2rbNZD.spl1" title="原文 : ConfigParser accepts @Priority."><code>ConfigParser</code>は<code>@Priority</code>を受け入れます。</span> <span class="merged" id="all.2rbNZD.spl2" title="原文 : See About Priority."><router-link @click.native="this.scrollFix('#priority-info')" to="#priority-info">「優先度について」</router-link>を参照してください。</span> </p>

<markup
lang="java"
title="<code>META-INF/services/io.helidon.config.spi.ConfigParser</code>にリストされているカスタム・パーサー実装の例"
>my.module.MyConfigParser</markup>

<markup
lang="java"
title="<code>module-info.java</code>でのカスタム・パーサー定義の例"
>module my.module {
    requires transitive io.helidon.config;
    provides io.helidon.config.spi.ConfigParser with myModule.MyConfigParser;
}</markup>

</div>

<h2 id="Config-SPI-OverrideSource"><span class="merged" id="all.1tOPAN" title="原文 : OverrideSource SPI">OverrideSource SPI</span></h2>
<div class="section">
<p><span class="merged" id="all.298btL.spl1" title="原文 : When the application retrieves a configuration value the config system first uses the relevant config sources and filters.">アプリケーションが構成値を取得すると、構成システムは最初に関連する構成ソースおよびフィルタを使用します。</span> <span class="merged" id="all.298btL.spl2" title="原文 : It then applies any overrides the application has provided.">次に、アプリケーションが提供した<em>「オーバーライド」</em>が適用されます。</span> <span class="merged" id="all.298btL.spl3" title="原文 : Each override has:">各オーバーライドには次のものがあります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3t5rIW" title="原文 : a Predicate&lt;Config.Key&gt; (a boolean-valued function that operates on the config key), and"><code>Predicate&lt;Config.Key></code> (構成キーを操作するブール値関数)</span></p>

</li>
<li>
<p><span class="merged" id="all.10axQs" title="原文 : a replacement, overriding, String value the config system should use if the predicate evaluates to true.">述語がtrueと評価された場合に、構成システムが使用する置換、<em>「オーバーライド」</em>、<code>String</code>値。</span></p>

</li>
</ul>
<p><span class="merged" id="all.4FjcFD.spl1" title="原文 : To furnish overrides to the config system, implement the OverrideSource SPI one or more times and pass instances of those implementations to the config builder&rsquo;s overrides method.">構成システムにオーバーライドを提供するには、<a href="./apidocs/io.helidon.config/io/helidon/config/spi/OverrideSource.html" id="" target="_blank" ><code>OverrideSource</code></a> SPIを1回以上実装し、それらの実装のインスタンスを構成ビルダーの<a href="./apidocs/io.helidon.config/io/helidon/config/Config.Builder.html#overrides-java.util.function.Supplier-" id="" target="_blank" ><code>overrides</code></a>メソッドに渡します。</span> <span class="merged" id="all.4FjcFD.spl2" title="原文 : The config system will apply the overrides returned from each OverrideSource to each config key requested from a Config that is based on that Config.Builder.">構成システムは、各<code>OverrideSource</code>から返されたオーバーライドを、その<code>Config.Builder</code>に基づく<code>Config</code>からリクエストされた各構成キーに適用します。</span> </p>

<p><span class="merged" id="all.3UcsYY" title="原文 : To support custom override sources in meta configuration, also implement the OverrideSourceProvider service loader SPI">メタ構成でカスタム・オーバーライド・ソースをサポートするには、<a href="./apidocs/io.helidon.config/io/helidon/config/spi/OverrideSourceProvider.html" id="" target="_blank" ><code>OverrideSourceProvider</code></a>サービス・ローダーSPIも実装</span></p>


<div class="block-title"><span class="merged" id="all.4A5Wr8" title="原文 : OverrideSource SPI"><span>OverrideSource SPI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OverrideSource SPI" src="./images/config/spi-OverrideSource.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.85Esh" title="原文 : Note that override sources can also implement PollableSource, and WatchableSource to add change support.">オーバーライド・ソースでは、<code>PollableSource</code>および<code>WatchableSource</code>を実装して変更サポートを追加することもできます。</span></p>

</div>

<h2 id="Config-SPI-ConfigFilter"><span class="merged" id="all.2QaFpu" title="原文 : ConfigFilter SPI">ConfigFilter SPI</span></h2>
<div class="section">
<p><span class="merged" id="all.3lcwc.spl1" title="原文 : Before returning a String from Config.value() the config system applies any filters set up on the Config.Builder used to create the config tree that contains the config node of interest."><code>Config.value()</code>から<code>String</code>を返す前に、構成システムは、目的の構成ノードを含む構成ツリーを作成するために使用される<code>Config.Builder</code>に設定されている<em>「フィルタ」</em>を適用します。</span> <span class="merged" id="all.3lcwc.spl2" title="原文 : The application provides filters as implementations of the ConfigFilter interface.">アプリケーションは、<a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigFilter.html" id="" target="_blank" ><code>ConfigFilter</code></a>インタフェースの実装としてフィルタを提供します。</span> <span class="merged" id="all.3lcwc.spl3" title="原文 : Each filter is a function which accepts a Config.Key and an input String value and returns a String value the config system should use for that key going forward.">各フィルタは、<code>Config.Key</code>と入力<code>String</code>値を受け入れ、構成システムが今後そのキーに使用する<code>String</code>値を返す関数です。</span> <span class="merged" id="all.3lcwc.spl4" title="原文 : The filter can return the original value or return some other value.">フィルタは、元の値を返すことも、他の値を返すこともできます。</span> </p>

<p><span class="merged" id="all.1mmRP.spl1" title="原文 : The application registers filters and filter providers by passing ConfigFilter implementations to one of the config builder addFilter methods.">アプリケーションは、<code>ConfigFilter</code>実装をいずれかの構成ビルダー<a href="./apidocs/io.helidon.config/io/helidon/config/Config.Builder.html" id="" target="_blank" >「<code>addFilter</code>メソッド」</a>に渡すことで、フィルタおよびフィルタ・プロバイダを登録します。</span> <span class="merged" id="all.1mmRP.spl2" title="原文 : The config system also uses the Java service loader mechanism to load additional filters automatically, for all builders, using the service interface described in the following table.">また、構成システムでは、次の表で説明するサービス・インタフェースを使用して、すべてのビルダーに対して追加のフィルタを自動的にロードするJavaサービス・ローダー・メカニズムも使用します。</span> <span class="merged" id="all.1mmRP.spl3" title="原文 : Prevent a given builder from using the auto-loaded filters by invoking the disableFilterServices method."><a href="./apidocs/io.helidon.config/io/helidon/config/Config.Builder.html#disableFilterServices--" id="" target="_blank" ><code>disableFilterServices</code></a>メソッドを呼び出して、特定のビルダーが自動ロードされたフィルタを使用しないようにします。</span> </p>

<div class="block-title"><span class="merged" id="all.uWbmw" title="原文 : Config SPI Interfaces for Filtering"><span>フィルタリング用のSPIインタフェースの構成</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3KfTIM"  title="原文:: Interface">インタフェース</span></th>
<th><span class="merged" id="all.1e8dVO.4"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.JUOSC.7"  title="原文:: Usage">使用方法</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3q85bp" title="原文 : ConfigFilter"><a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigFilter.html" id="" target="_blank" ><code>ConfigFilter</code></a></span></td><td class=""><span class="merged" id="all.DMGCn.spl1" title="原文 : Accepts @Priority."><code>@Priority</code>を受け入れます。</span> <span class="merged" id="all.DMGCn.spl2" title="原文 : See About Priority."><router-link @click.native="this.scrollFix('#priority-info')" to="#priority-info">「優先度について」</router-link>を参照してください。</span> </td>
<td class=""><span class="merged" id="all.3M9GFn"  title="原文: String apply(Config.Key key, String stringValue);"><code>String apply(Config.Key key, String stringValue);</code></span></td>
<td class=""><span class="merged" id="all.4A8RlS" title="原文 : Accepts a key and the corresponding String value and returns the String which the config system should use for that key.">キーおよび対応する<code>String</code>値を受け入れ、構成システムがそのキーに使用する<code>String</code>を返します。</span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_initializing_filters"><span class="merged" id="all.3bNZBj" title="原文 : Initializing Filters">フィルタの初期化</span></h3>
<div class="section">
<p><span class="merged" id="all.1TNhuG.spl1" title="原文 : The ConfigFilter JavaDoc describes multiple methods for adding filters to a Config.Builder."><code>ConfigFilter</code> JavaDocでは、<code>Config.Builder</code>にフィルタを追加するための複数のメソッドについて説明しています。</span> <span class="merged" id="all.1TNhuG.spl2" title="原文 : Some accept a ConfigFilter directly and some accept a provider function which, when passed a Config instance, returns a ConfigFilter."><code>ConfigFilter</code>を直接受け入れるものもあれば、<code>Config</code>インスタンスを渡すと<code>ConfigFilter</code>を返すプロバイダ関数を受け入れるものもあります。</span> </p>

<p><span class="merged" id="all.1Y1DSv" title="原文 : Neither a ConfigFilter nor a provider function which furnishes one should access the Config instance passed to the provider function."><strong><em>プロバイダ関数に渡される<code>Config</code>インスタンスには、<code>ConfigFilter</code>もプロバイダ関数もアクセスできません。</em></strong></span></p>

<p><span class="merged" id="all.3zdfkl.spl1" title="原文 : Instead, implement the ConfigFilter.init(Config) method on the filter.">かわりに、フィルタに<code>ConfigFilter.init(Config)</code>メソッドを実装します。</span> <span class="merged" id="all.3zdfkl.spl2" title="原文 : The config system invokes the filters&apos; init methods according to the filters&apos; @Priority order.">configシステムは、フィルタの<code>@Priority</code>順序に従ってフィルタの<code>init</code>メソッドを呼び出します。</span> </p>

<p><span class="merged" id="all.2WNONb.spl1" title="原文 : Recall that whenever any code invokes Config.get, the Config instance invokes the apply method of all registered filters.">コードが<code>Config.get</code>を起動するたびに、<code>Config</code>インスタンスは<em>「すべての」</em>登録済フィルタの<code>apply</code>メソッドを起動することに注意してください。</span> <span class="merged" id="all.2WNONb.spl2" title="原文 : By the time the application retrieves config this way the config system will have run the init method on all the filters.">アプリケーションがこの方法で構成を取得すると、構成システムはすべてのフィルタに対して<code>init</code>メソッドを実行します。</span> <span class="merged" id="all.2WNONb.spl3" title="原文 : But note that when a filter&rsquo;s init method invokes Config.get, the init methods of lower-priority filters will not yet have run."><em>ただし、フィルタの<code>init</code>メソッドが<code>Config.get</code>を呼び出す場合、優先度の低いフィルタの<code>init</code>メソッドはまだ実行されていないことに注意してください。</em></span> </p>


<div class="block-title"><span class="merged" id="all.2DEVWw" title="原文 : ConfigFilter SPI"><span>ConfigFilter SPI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ConfigFilter SPI" src="./images/config/spi-ConfigFilter.png" /> </v-card-text> </v-card>

</div>
</div>

<h2 id="Config-SPI-ConfigMapperProvider"><span class="merged" id="all.3zDyNH" title="原文 : ConfigMapperProvider SPI">ConfigMapperProvider SPI</span></h2>
<div class="section">
<p><span class="merged" id="all.UvEsq.spl1" title="原文 : The config system provides built-in mappings from String values to various Java types.">構成システムは、<code>String</code>値から様々なJavaタイプへの組込みマッピングを提供します。</span> <span class="merged" id="all.UvEsq.spl2" title="原文 : (See ConfigMappers.)">(<a href="./apidocs/io.helidon.config/io/helidon/config/ConfigMappers.html" id="" target="_blank" ><code>ConfigMappers</code></a>を参照。)</span> </p>

<p><span class="merged" id="all.m08dU" title="原文 : To handle mappings to other types the application can register custom mappers with the config system by implementing the ConfigMapperProvider SPI.">他のタイプへのマッピングを処理するために、アプリケーションでは、<a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigMapperProvider.html" id="" target="_blank" ><code>ConfigMapperProvider</code></a> SPIを実装することで、カスタム・マッパーを構成システムに登録できます。</span></p>

<p><span class="merged" id="all.1hJeYD" title="原文 : Such providers return a map, with entries in which:">このようなプロバイダは、次のエントリを含むマップを返します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1EmTTr" title="原文 : the key is the Java type (a Class object) the mapper produces, and">キーはマッパーが生産するJavaタイプ(<code>Class</code>オブジェクト)です</span></p>

</li>
<li>
<p><span class="merged" id="all.OPyKA" title="原文 : the value is a ConfigMapper that converts the config in-memory data structure into the type in the key.">値は、構成インメモリー・データ構造をキーのタイプに変換する<code>ConfigMapper</code>です。</span></p>

</li>
</ul>
<p><span class="merged" id="all.4BTrxf" title="原文 : The provider may also implement other methods for finer tuned conversion mechanisms:">プロバイダは、より微調整された変換メカニズムのための他のメソッドを実装することもできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2IxHP9" title="原文 : genericTypeMappers() returns a map with entries for specific GenericType conversions, for example when the provider supports only mapping for GenericType&lt;Map&lt;String, Integer&gt;&gt;"><code>genericTypeMappers()</code>は、プロバイダが<code>GenericType&lt;Map&lt;String, Integer>></code>のマッピングのみをサポートしている場合など、特定の<code>GenericType</code>変換のエントリを含むマップを返します</span></p>

</li>
<li>
<p><span class="merged" id="all.39OXtz" title="原文 : mapper(Class) returns a conversion function (optional) that converts a config node to the typed instance (if supported by this provider)"><code>mapper(Class)</code>は、構成ノードを型付きインスタンスに変換する変換ファンクション(オプション)を返します(このプロバイダでサポートされている場合)</span></p>

</li>
<li>
<p><span class="merged" id="all.4gYdzz" title="原文 : mapper(GenericType) returns a conversion function (optional) that coverts a config node to the GenericType (if supported by this provider) - for example in case this provider supports any Map&lt;String, ?&gt; type, such as Map&lt;String, Integer&gt; and Map&lt;String, Double&gt;"><code>mapper(GenericType)</code>は、構成ノードを対象とする変換関数(オプション)をGenericTypeに返します(このプロバイダでサポートされている場合) - たとえば、このプロバイダが<code>Map&lt;String, Integer></code>や<code>Map&lt;String, Double></code>などのマップ&lt;String, ?>タイプをサポートしている場合です</span></p>

</li>
</ul>
<p><span class="merged" id="all.QZPIi" title="原文 : The config conversion system works as follows:">構成変換システムは、次のように動作します:</span></p>

<p><span class="merged" id="all.3ao7l2" title="原文 : For Config.as(Class):"><code>Config.as(Class)</code>の場合:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1JbRKp" title="原文 : Check whether a conversion function exists for the class requested (from method mappers()).">(<code>mappers()</code>メソッドから)リクエストされたクラスに変換関数が存在するかどうかを確認してください。</span>

</li>
<li>
<span class="merged" id="all.3iVSby" title="原文 : Check whether a conversion function is provided by any ConfigMapperProvider with method mapper(Class)."><code>mapper(Class)</code>メソッドを使用して、変換ファンクションが<code>ConfigMapperProvider</code>によって提供されているかどうかを確認します。</span>

</li>
<li>
<span class="merged" id="all.2oWSN4" title="原文 : Check whether a conversion function exists for a generic type for the class requested (from method genericTypeMappers).">(メソッド<code>genericTypeMappers</code>から)リクエストされたクラスに汎用タイプの変換関数が存在するかどうかを確認してください。</span>

</li>
<li>
<span class="merged" id="all.3mjkq1" title="原文 : Check whether a conversion function is provided by any ConfigMapperProvider with method mapper(GenericType) for a generic type for the class requested.">変換関数が、リクエストされたクラスの汎用型に対してメソッド<code>mapper(GenericType)</code>を持つ<code>ConfigMapperProvider</code>によって提供されているかどうかを確認してください。</span>

</li>
</ol>
<p><span class="merged" id="all.2CGucf" title="原文 : For Config.as(GenericType) - the first two steps are skipped."><code>Config.as(GenericType)</code>の場合 - 最初の2つのステップはスキップされます。</span></p>

<p><span class="merged" id="all.1g7pe6.spl1" title="原文 : The config system also uses the Java ServiceLoader mechanism to load automatically, for all builders, any mappers returned by the providers listed in the META-INF/services/io.helidon.config.spi.ConfigMapperProvider resource on the runtime classpath.">また、構成システムは、Java <code>ServiceLoader</code>メカニズムを使用して、すべてのビルダーに対して、ランタイム・クラスパスの<code>META-INF/services/io.helidon.config.spi.ConfigMapperProvider</code>リソースにリストされているプロバイダによって返されたマッパーを自動的にロードします。</span> <span class="merged" id="all.1g7pe6.spl2" title="原文 : The application can prevent autoloading of mappers for a given builder by invoking Config.Builder#disableMapperServices().">アプリケーションでは、<code>Config.Builder#disableMapperServices()</code>を起動することで、特定のビルダーのマッパーの自動ロードを防止できます。</span> <span class="merged" id="all.1g7pe6.spl3" title="原文 : Note that the built-in mappers described in ConfigMappers still operate."><code>ConfigMappers</code>で説明されている組込みマッパーは引き続き動作することに注意してください。</span> </p>

<p><span class="merged" id="all.XBHO8.spl1" title="原文 : Mapper providers accept @Priority.">マッパー・プロバイダは<code>@Priority</code>を受け入れます。</span> <span class="merged" id="all.XBHO8.spl2" title="原文 : See About Priority."><router-link @click.native="this.scrollFix('#priority-info')" to="#priority-info">「優先度について」</router-link>を参照してください。</span> </p>


<div class="block-title"><span class="merged" id="all.42bHG9" title="原文 : ConfigMapperProvider SPI"><span>ConfigMapperProvider SPI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ConfigMapperProvider SPI" src="./images/config/spi-ConfigMapperProvider.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.QzVCw.spl1" title="原文 : A mapper provider can specify a @javax.annotation.Priority.">マッパー・プロバイダは、<code>@javax.annotation.Priority</code>を指定できます。</span> <span class="merged" id="all.QzVCw.spl2" title="原文 : If no priority is explicitly assigned, the value of 100 is assumed.">優先度が明示的に割り当てられていない場合は、<code>100</code>の値が想定されます。</span> </p>

<markup
lang="java"
title="<code>META-INF/services/io.helidon.config.spi.ConfigMapperProvider</code>でのカスタム・マッパー・プロバイダ実装の参照"
>my.module.MyConfigMapperProvider</markup>

<markup
lang="java"
title="<code>module-info.java</code>でのカスタム・マッパー・プロバイダ実装の参照"
>module my.module {
    requires transitive io.helidon.config;
    provides io.helidon.config.spi.ConfigMapperProvider with my.module.MyConfigMapperProvider;
}</markup>

</div>

<h2 id="Config-SPI-PollingStrategy"><span class="merged" id="all.ZJcn8" title="原文 : Change support SPI">SPIのサポートの変更</span></h2>
<div class="section">
<p><span class="merged" id="all.498RVK.spl1" title="原文 : Once it loads a Config tree from ConfigSources the config system does not itself change the in-memory Config tree."><code>ConfigSource</code>から<code>Config</code>ツリーをロードすると、構成システム自体はインメモリー<code>Config</code>ツリーを変更しません。</span> <span class="merged" id="all.498RVK.spl2" title="原文 : Even so, the underlying data available via the tree&rsquo;s ConfigSources can change.">その場合でも、ツリーの<code>ConfigSource</code>を介して使用可能な基礎となるデータは変更される可能性があります。</span> <span class="merged" id="all.498RVK.spl3" title="原文 : Implementations of PollingStrategy may trigger regular check whether a source has new data."><a href="./apidocs/io.helidon.config/io/helidon/config/spi/PollingStrategy.html" id="" target="_blank" ><code>PollingStrategy</code></a>の実装によって、ソースに新しいデータがあるかどうかの定期的なチェックがトリガーされる場合があります。</span> <span class="merged" id="all.498RVK.spl4" title="原文 : Implementation of ChangeWatcher may watch the underlying source for changes and trigger an update."><a href="./apidocs/io.helidon.config/io/helidon/config/spi/ChangeWatcher.html" id="" target="_blank" ><code>ChangeWatcher</code></a>の実装では、基礎となるソースの変更を監視し、更新をトリガーできます。</span> </p>


<h3 id="_pollingstrategy_spi"><span class="merged" id="all.14ThIA" title="原文 : PollingStrategy SPI">PollingStrategy SPI</span></h3>
<div class="section">
<p><span class="merged" id="all.3YcgxN.spl1" title="原文 : An implementation of PollingStrategy gets an instance to poll, and triggers its poll method."><code>PollingStrategy</code>の実装は、ポーリングするインスタンスを取得し、その<code>poll</code>メソッドをトリガーします。</span> <span class="merged" id="all.3YcgxN.spl2" title="原文 : The result of poll method may be used to update the polling strategy schedule."><code>poll</code>メソッドの結果を使用して、ポーリング戦略スケジュールを更新できます。</span> </p>

<p><span class="merged" id="all.2SB3dV.spl1" title="原文 : The approach of checking for changes is part of the config system, and the PollingStrategy does not need to be concerned with it.">変更をチェックするアプローチは構成システムの一部であり、<code>PollingStrategy</code>はこれを考慮する必要はありません。</span> <span class="merged" id="all.2SB3dV.spl2" title="原文 : This is based on the source stamp as defined in ConfigContent and used in PollableSource.isModified(Object) methods.">これは、<code>ConfigContent</code>で定義され、<code>PollableSource.isModified(Object)</code>メソッドで使用されるソース<code>stamp</code>に基づきます。</span> </p>

<p><span class="merged" id="all.340GIP" title="原文 : If a more sophisticated solution is needed, you may need to implement a ChangeWatcher instead.">より高度なソリューションが必要な場合は、かわりに<code>ChangeWatcher</code>を実装する必要がある場合があります。</span></p>

<p><span class="merged" id="all.2DYgom.spl1" title="原文 : The config system offers polling strategy for periodic time-based checks.">構成システムは、定期的な時間ベースのチェックのためのポーリング戦略を提供します。</span> <span class="merged" id="all.2DYgom.spl2" title="原文 : Often an application can create a config source simply by using one of the methods on ConfigSources (for example, ConfigSources#file(path) to get a builder and then invoke pollingStrategy passing a polling strategy.">多くの場合、アプリケーションでは、<code>ConfigSources</code>のいずれかのメソッド(たとえば、<code>ConfigSources#file(path)</code>を使用してビルダーを取得し、<code>pollingStrategy</code>を呼び出してポーリング戦略を渡す)を使用するだけで、構成ソースを作成できます。</span> <span class="merged" id="all.2DYgom.spl3" title="原文 : But the application can implement its own PollingStrategy and set it on the config source builder instead.">ただし、アプリケーションは独自の<code>PollingStrategy</code>を実装して、かわりに構成ソース・ビルダーで設定できます。</span> </p>


<div class="block-title"><span class="merged" id="all.1Y08iI" title="原文 : PollingStrategy SPI"><span>PollingStrategy SPI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="PollingStrategy SPI" src="./images/config/spi-PollingStrategy.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.vIuev" title="原文 : To support polling strategies that can be configured in meta configuration, also implement the PollingStrategyProvider Java service loader SPI.">メタ構成で構成できるポーリング戦略をサポートするには、<code>PollingStrategyProvider</code> Javaサービス・ローダーSPIも実装します。</span></p>

</div>

<h3 id="_changewatcher_spi"><span class="merged" id="all.2A5feM" title="原文 : ChangeWatcher SPI">ChangeWatcher SPI</span></h3>
<div class="section">
<p><span class="merged" id="all.1LpHXc.spl1" title="原文 : An implementation of ChangeWatcher gets the underlying source information and a change listener."><code>ChangeWatcher</code>の実装は、基礎となるソース情報と変更リスナーを取得します。</span> <span class="merged" id="all.1LpHXc.spl2" title="原文 : The &quot;watcher&quot; then watches for changes of the source and notifies the listener when a change occurs.">「ウォッチャ」は、ソースの変更を監視し、変更が発生したときにリスナーに通知します。</span> </p>

<p><span class="merged" id="all.13dqDs.spl1" title="原文 : This is designed to support sources that can react on changes (such as file system).">これは、変更に対応できるソース(ファイル・システムなど)をサポートするように設計されています。</span> <span class="merged" id="all.13dqDs.spl2" title="原文 : When a polling mechanism is needed, please check PollingStrategy above.">ポーリング・メカニズムが必要な場合は、前述の<code>PollingStrategy</code>を確認してください。</span> </p>

<p><span class="merged" id="all.1p1YAI" title="原文 : The config system offers a change watcher for any Path based config source (such as FileConfigSource) and for the etcd config source.">構成システムには、<code>Path</code>ベースの構成ソース(<code>FileConfigSource</code>など)および<code>etcd</code>構成ソースの変更ウォッチャが用意されています。</span></p>

<p><span class="merged" id="all.iAEi0" title="原文 : To use a change watcher, simply create a config source using its builder and register the change watcher on the builder (the config source must support appropriate type of change watchers).">変更ウォッチャを使用するには、そのビルダーを使用して構成ソースを作成し、変更ウォッチャをビルダーに登録します(構成ソースは適切なタイプの変更ウォッチャをサポートしている必要があります)。</span></p>


<div class="block-title"><span class="merged" id="all.23N7Sa" title="原文 : ChangeWatcher SPI"><span>ChangeWatcher SPI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ChangeWatcher SPI" src="./images/config/spi-ChangeWatcher.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1loU1g" title="原文 : To support change watchers that can be configured in meta configuration, also implement the ChangeWatcherProvider Java service loader SPI.">メタ構成で構成できる変更ウォッチャをサポートするには、<code>ChangeWatcherProvider</code> Javaサービス・ローダーSPIも実装します。</span></p>

</div>
</div>

<h2 id="Config-SPI-RetryPolicy"><span class="merged" id="all.1zHcLt" title="原文 : RetryPolicy SPI">RetryPolicy SPI</span></h2>
<div class="section">
<p><span class="merged" id="all.2KSUMm" title="原文 : The builder for each ConfigSource and OverrideSource accepts a RetryPolicy governing if and how the source should deal with failures loading the underlying data.">各<code>ConfigSource</code>および<code>OverrideSource</code>のビルダーは、基礎となるデータのロードの失敗をソースが処理するかどうか、およびどのように処理するかを制御する<a href="./apidocs/io.helidon.config/io/helidon/config/spi/RetryPolicy.html" id="" target="_blank" ><code>RetryPolicy</code></a>を受け入れます。</span></p>

<p><span class="merged" id="all.1Bi11b.spl1" title="原文 : A retry policy accepts a function, the invocation of which the policy will govern according to its own implementation.">再試行ポリシーは、独自の実装に従ってポリシーが制御する関数を受け入れます。</span> <span class="merged" id="all.1Bi11b.spl2" title="原文 : Applications can use the predefined policies in RetryPolicies, such as RetryPolicies.justCall which simply invokes the function without any retry.">アプリケーションでは、再試行せずにファンクションを起動するだけの<code>RetryPolicies.justCall</code>など、<a href="./apidocs/io.helidon.config/io/helidon/config/RetryPolicies.html" id="" target="_blank" ><code>RetryPolicies</code></a>の事前定義済ポリシーを使用できます。</span> <span class="merged" id="all.1Bi11b.spl3" title="原文 : That class also exposes a builder for constructing a time-based retry policy, with several parameters:">このクラスは、時間ベースの再試行ポリシーをビルドするためのビルダーも公開します。パラメータは次のとおりです:</span> </p>

<div class="block-title"><span class="merged" id="all.3HtNM5" title="原文 : Parameters Controlling Built-in RetryPolicy"><span>組込み<code>RetryPolicy</code>を制御するパラメータ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.35CVhz"  title="原文:: Parameter">パラメータ</span></th>
<th><span class="merged" id="all.JUOSC.8"  title="原文:: Usage">使用方法</span></th>
<th><span class="merged" id="all.oxso7.1"  title="原文:: Default">デフォルト</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.lGKge"  title="原文: delay"><code>delay</code></span></td>
<td class=""><span class="merged" id="all.2Upr35" title="原文 : Initial delay between calls to the function">関数の呼び出し間の初期遅延</span></td>
<td class=""><span class="merged" id="all.2UsRLy"  title="原文:: 200 ms">200 ms</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3DfVEe"  title="原文: delayFactor"><code>delayFactor</code></span></td>
<td class=""><span class="merged" id="all.1UoBpS" title="原文 : Multiplier applied to delay on each successive call">連続する各コールで<code>delay</code>に適用される乗数</span></td>
<td class=""><span class="merged" id="all.UT3bJ.1"  title="原文: 2">2</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48gnez"  title="原文: callTimeout"><code>callTimeout</code></span></td>
<td class=""><span class="merged" id="all.G74UE" title="原文 : Time limit for each individual call of the function">関数の個々の呼び出しの時間制限</span></td>
<td class=""><span class="merged" id="all.2jeu7q"  title="原文:: 500 ms">500 ms</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2HkgCb"  title="原文: overallTimeout"><code>overallTimeout</code></span></td>
<td class=""><span class="merged" id="all.2S2Kgh" title="原文 : Limit for the total elapsed time attempting to call the function successfully, including delays between calls">関数を正常にコールしようとした合計経過時間の制限(コール間の遅延を含む)</span></td>
<td class=""><span class="merged" id="all.2Q2uIy"  title="原文:: 2 s">2 s</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.1lxJ47" title="原文 : The actual delay between function call starts as delay and changes by the factor delayFactor on each successive attempt.">ファンクション・コール間の実際の遅延は、<code>delay</code>として開始され、後続の試行ごとにファクタ<code>delayFactor</code>によって変更されます。</span></p>

<p><span class="merged" id="all.2JqKuU.spl1" title="原文 : Note that the job of each retry policy is to call the provided function successfully.">各再試行ポリシーのジョブは、指定された関数を正常にコールすることです。</span> <span class="merged" id="all.2JqKuU.spl2" title="原文 : As such, the policy must perform the first attempt as well as any retries.">そのため、ポリシーは最初の試行および再試行を実行する必要があります。</span> </p>


<div class="block-title"><span class="merged" id="all.p2QEn" title="原文 : RetryPolicy SPI"><span>RetryPolicy SPI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="RetryPolicy SPI" src="./images/config/spi-RetryPolicy.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1YSTFR.spl1" title="原文 : The application can try to cancel the overall execution of a RetryPolicy by invoking the RetryPolicy#cancel(boolean mayInterruptIfRunning) method.">アプリケーションでは、<code>RetryPolicy#cancel(boolean mayInterruptIfRunning)</code>メソッドを起動することで、<code>RetryPolicy</code>の実行全体の取消しを試行できます。</span> <span class="merged" id="all.1YSTFR.spl2" title="原文 : Ideally the retry policy implementation should be able to abort the execution of the retry policy, even while a function call is in progress, but the policy must respond to cancels between function calls.">再試行ポリシーの実装では、関数コールの進行中でも再試行ポリシーの実行を中断できることが理想的ですが、ポリシーは関数コール間の取消しに応答する必要があります。</span> <span class="merged" id="all.1YSTFR.spl3" title="原文 : In either case cancel returns true if the retry was aborted without a successful call to the function, and false otherwise, including if the function call had already completed successfully or had previously been successfully canceled.">いずれの場合も、<code>cancel</code>は、関数の呼出しが成功せずに再試行が中断された場合は<code>true</code>を返し、それ以外の場合は<code>false</code>を返します(関数の呼出しがすでに正常に完了しているか、以前に取り消されたかなど)。</span> </p>

<p><span class="merged" id="all.47c792" title="原文 : To support retry policies in meta configuration, also implement the Java service loader SPI RetryPolicyProvider.">メタ構成での再試行ポリシーをサポートするには、Javaサービス・ローダーSPI <code>RetryPolicyProvider</code>も実装します。</span></p>

</div>
</doc-view>
