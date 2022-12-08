<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.2"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2TZiSl" title="原文 : Creating MicroProfile Config Sources for Manual Setup of Config"><router-link @click.native="this.scrollFix('#_creating_microprofile_config_sources_for_manual_setup_of_config')" to="#_creating_microprofile_config_sources_for_manual_setup_of_config">構成の手動設定用のMicroProfile構成ソースの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Kh4RZ" title="原文 : Creating Custom Config Sources"><router-link @click.native="this.scrollFix('#_creating_custom_config_sources')" to="#_creating_custom_config_sources">カスタム構成ソースの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1KOveu" title="原文 : Creating MicroProfile Config Sources from meta-config"><router-link @click.native="this.scrollFix('#_creating_microprofile_config_sources_from_meta_config')" to="#_creating_microprofile_config_sources_from_meta_config">meta-configからのMicroProfile構成ソースの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Thx4e" title="原文 : Extending Meta-Config to Create a Custom Config Source Type"><router-link @click.native="this.scrollFix('#_extending_meta_config_to_create_a_custom_config_source_type')" to="#_extending_meta_config_to_create_a_custom_config_source_type">メタ構成の拡張によるカスタム構成ソース・タイプの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.kVS76" title="原文 : Creating MicroProfile Config Source from Helidon SE Config Source"><router-link @click.native="this.scrollFix('#_creating_microprofile_config_source_from_helidon_se_config_source')" to="#_creating_microprofile_config_source_from_helidon_se_config_source">Helidon SE構成ソースからのMicroProfile構成ソースの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4aFaW2" title="原文 : Creating MicroProfile Config Source from Helidon SE Config Instance"><router-link @click.native="this.scrollFix('#_creating_microprofile_config_source_from_helidon_se_config_instance')" to="#_creating_microprofile_config_source_from_helidon_se_config_instance">Helidon SE構成インスタンスからのMicroProfile構成ソースの作成</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_creating_microprofile_config_sources_for_manual_setup_of_config"><span class="merged" id="all.ALIpA" title="原文 : Creating MicroProfile Config Sources for Manual Setup of Config">構成の手動設定用のMicroProfile構成ソースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.1wwuEj" title="原文 : You can use the following methods to create MicroProfile Config Sources to manually set up the Config from org.eclipse.microprofile.config.spi.ConfigProviderResolver#getBuilder() on io.helidon.config.mp.MpConfigSources class:">次のメソッドを使用して、<code>io.helidon.config.mp.MpConfigSources</code>クラスの<code>org.eclipse.microprofile.config.spi.ConfigProviderResolver#getBuilder()</code>から構成を手動で設定するためのMicroProfile構成ソースを作成できます:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 37.5%;">
<col style="width: 62.5%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1e8dVO"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.4JM9z7.2"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3EvjA4"  title="原文: systemProperties()"><code>systemProperties()</code></span></td>
<td class=""><span class="merged" id="all.338sdC" title="原文 : System properties config source.">システム・プロパティ構成ソース。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.29yLGe"  title="原文: environmentVariables()"><code>environmentVariables()</code></span></td>
<td class=""><span class="merged" id="all.2m8J8N" title="原文 : Environment variables config source.">環境変数構成ソース。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.302ed2"  title="原文: create(java.nio.file.Path)"><code>create(java.nio.file.Path)</code></span></td>
<td class=""><span class="merged" id="all.341Tgh.spl1" title="原文 : Loads a properties file from file system.">ファイル・システムからプロパティ・ファイルをロードします。</span> <span class="merged" id="all.341Tgh.spl2" title="原文 :  To load the properties file from file system with custom name, use create(String, java.nio.file.Path)."><br>ファイル・システムからカスタム名でプロパティ・ファイルをロードするには、<code>create(String, java.nio.file.Path)</code>を使用します。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3oXhZ1"  title="原文: create(java.util.Map)"><code>create(java.util.Map)</code></span></td>
<td class=""><span class="merged" id="all.3cmgcW.spl1" title="原文 : Creates an in-memory source from map.">マップからインメモリー・ソースを作成します。</span> <span class="merged" id="all.3cmgcW.spl2" title="原文 :  To create an in-memory source from map with custom name, use create(String, java.util.Map)."><br>カスタム名を使用してマップからインメモリー・ソースを作成するには、<code>create(String, java.util.Map)</code>を使用します。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OLCB1"  title="原文: create(java.util.Properties)"><code>create(java.util.Properties)</code></span></td>
<td class=""><span class="merged" id="all.1zEEQe.spl1" title="原文 : Creates an in-memory source from properties.">プロパティからインメモリー・ソースを作成します。</span> <span class="merged" id="all.1zEEQe.spl2" title="原文 :  To create an in-memory source from properties with custom name, use create(String, java.util.Properties)."><br>カスタム名を持つプロパティからインメモリー・ソースを作成するには、<code>create(String, java.util.Properties)</code>を使用します。</span> </td>
</tr>
</tbody>
</table>
</div>


<h3 id="_create_custom_map_microprofile_config_source"><span class="merged" id="all.4MBVoa" title="原文 : Create Custom Map MicroProfile Config Source">カスタム・マップMicroProfile構成ソースの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.4gBaC4" title="原文 : You can create Microprofile Config Source from a map.">マップからMicroprofile構成ソースを作成できます。</span></p>

<markup
lang="java"
title="Create MicroProfile Config Source based on Environment Variables and Custom Map"
>ConfigProviderResolver resolver = ConfigProviderResolver.instance();

org.eclipse.microprofile.config.Config config = resolver.getBuilder() <span class="conum" data-value="1" />
        .withSources(MpConfigSources.environmentVariables()) <span class="conum" data-value="2" />
        .withSources(MpConfigSources.create(Map.of("key","value"))) <span class="conum" data-value="3" />
        .build(); <span class="conum" data-value="4" />

resolver.registerConfig(config, null); <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3B9bMy" title="原文 : Creates MicroProfile Config Source builder.">MicroProfile構成ソース・ビルダーを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.4ZLzfE" title="原文 : Adds environment variables.">環境変数を追加します。</span></li>
<li data-value="3"><span class="merged" id="all.2b0pG4" title="原文 : Adds a custom map.">カスタム・マップを追加します。</span></li>
<li data-value="4"><span class="merged" id="all.29ptfs" title="原文 : Builds the MicroProfile Config Source.">MicroProfile構成ソースをビルドします。</span></li>
<li data-value="5"><span class="merged" id="all.pFOSC" title="原文 : Registers the config, so it can be used by other components">他のコンポーネントで使用できるように構成を登録</span></li>
</ul>

</div>


<h3 id="_create_yaml_microprofile_config_source"><span class="merged" id="all.NapO3" title="原文 : Create YAML MicroProfile Config Source">YAML MicroProfile構成ソースの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.d1upB.spl1" title="原文 : You can create YAML Microprofile Config Source from a path or a URL.">YAML Microprofile構成ソースは、パスまたはURLから作成できます。</span> <span class="merged" id="all.d1upB.spl2" title="原文 : When you create a MicroProfile instance from the builder, the YamlMpConfigSource allows you to create a custom Config Source and register it with the builder.">ビルダーからMicroProfileインスタンスを作成する場合、<code>YamlMpConfigSource</code>を使用すると、カスタム構成ソースを作成してビルダーに登録できます。</span> </p>

<markup
lang="java"
title="Create YamlMPConfigSource from a path"
>ConfigProviderResolver.instance().newBuilder()
        .withSources(YamlMpConfigSource.create(path))
        .build();</markup>

</div>

</div>


<h2 id="_creating_custom_config_sources"><span class="merged" id="all.4BzAYW" title="原文 : Creating Custom Config Sources">カスタム構成ソースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.3lrvx8" title="原文 : Custom Config Sources are loaded using the Java Service Loader pattern, by implementing either org.eclipse.microprofile.config.spi.ConfigSource, or org.eclipse.microprofile.config.spi.ConfigSourceProvider SPI and registering it as a service (Using META-INF/services/${class-name} file when using classpath, or using the provides statement in module-info.java when using module path).">カスタム構成ソースは、<code>org.eclipse.microprofile.config.spi.ConfigSource</code>または<code>org.eclipse.microprofile.config.spi.ConfigSourceProvider</code> SPIを実装してサービスとして登録することで、Javaサービス・ローダー・パターンを使用してロードされます(クラスパスを使用する場合は<code>META-INF/services/${class-name}</code>ファイルを使用し、モジュール・パスを使用する場合は<code>module-info.java</code>の<code>provides</code>文を使用します)。</span></p>

<p><span class="merged" id="all.3bj84U" title="原文 : The interface org.eclipse.microprofile.config.spi.ConfigSource requires implementation of the following methods:">インタフェース<code>org.eclipse.microprofile.config.spi.ConfigSource</code>には、次のメソッドの実装が必要です:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1c68d4"  title="原文: String getName()"><code>String getName()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1mRuYm"  title="原文: Map&lt;String, String&gt; getProperties()"><code>Map&lt;String, String> getProperties()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.28h6Rh"  title="原文: String getValue(String key)"><code>String getValue(String key)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4CdJ9Q"  title="原文: getOrdinal()"><code>getOrdinal()</code></span></p>

</li>
</ul>


<h3 id="_example_of_a_custom_config_source"><span class="merged" id="all.4PZhjB" title="原文 : Example of a Custom Config Source">カスタム構成ソースの例</span></h3>
<div class="section">
<markup
lang="java"

>public class CustomConfigSource implements ConfigSource {
    private static final String NAME = "MyConfigSource";
    private static final int ORDINAL = 200; // Default for MP is 100
    private static final Map&lt;String, String&gt; PROPERTIES = mapOf("app.greeting", "Hi");


    @Override
    public String getName() {
        return NAME; <span class="conum" data-value="1" />
    }

    @Override
    public Map&lt;String, String&gt; getProperties() {
        return PROPERTIES; <span class="conum" data-value="2" />
    }

    @Override
    public String getValue(String key) {
        return PROPERTIES.get(key); <span class="conum" data-value="3" />
    }

    @Override
    public int getOrdinal() {
        return ORDINAL; <span class="conum" data-value="4" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tCirv" title="原文 : Returns the name of the Config Source to use for logging or analysis of configured values.">構成された値のロギングまたは分析に使用する構成ソースの名前を返します。</span></li>
<li data-value="2"><span class="merged" id="all.3AsQnL" title="原文 : Returns the properties in this Config Source as a map.">この構成ソースのプロパティをマップとして返します。</span></li>
<li data-value="3"><span class="merged" id="all.10iXSs" title="原文 : Returns the value of the requested key, or null if the key is not available">リクエストされたキーの値を返します。キーが使用できない場合は<code>null</code>を返します</span></li>
<li data-value="4"><span class="merged" id="all.3bMbM1" title="原文 : Returns the ordinal of this Config Source.">この構成ソースの序数を返します。</span></li>
</ul>

</div>

</div>


<h2 id="_creating_microprofile_config_sources_from_meta_config"><span class="merged" id="all.1xfpMm" title="原文 : Creating MicroProfile Config Sources from meta-config">meta-configからのMicroProfile構成ソースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.4FY1Cl" title="原文 : Instead of directly specifying the configuration sources in your code, you can use meta-configuration in a file that declares the configuration sources, and their attributes as mentioned in Microprofile Config.">コードに構成ソースを直接指定するかわりに、<router-link to="/mp/config/introduction">「Microprofile構成」</router-link>に示すように、構成ソースとそれらの属性を宣言するファイルでメタ構成を使用できます。</span></p>

<p><span class="merged" id="all.459m5B" title="原文 : When used, the Microprofile Config uses configuration sources and flags configured in the meta configuration file.">Microprofile Configを使用すると、メタ構成ファイルで構成された構成ソースとフラグが使用されます。</span></p>

<p><span class="merged" id="all.1Xhh6i.spl1" title="原文 : If a file named mp-meta-config.yaml, or mp-meta-config.properties is in the current directory or on the classpath, and there is no explicit setup of configuration in the code, the configuration will be loaded from the meta-config file."><code>mp-meta-config.yaml</code>または<code>mp-meta-config.properties</code>という名前のファイルが現在のディレクトリまたはクラスパスにあり、コードに構成が明示的に設定されていない場合、構成は<code>meta-config</code>ファイルからロードされます。</span> <span class="merged" id="all.1Xhh6i.spl2" title="原文 : The location of the file can be overridden using system property io.helidon.config.mp.meta-config, or environment variable HELIDON_MP_META_CONFIG">ファイルのロケーションは、システム・プロパティ<code>io.helidon.config.mp.meta-config</code>または環境変数<code>HELIDON_MP_META_CONFIG</code>を使用してオーバーライドできます</span> </p>

<markup
lang="yaml"
title="Example of a YAML meta configuration file:"
>add-discovered-sources: true <span class="conum" data-value="1" />
add-discovered-converters: false <span class="conum" data-value="2" />
add-default-sources: false <span class="conum" data-value="3" />

sources:
  - type: "environment-variables" <span class="conum" data-value="4" />
  - type: "system-properties" <span class="conum" data-value="5" />
  - type: "properties" <span class="conum" data-value="6" />
    path: "/conf/prod.properties" <span class="conum" data-value="7" />
    ordinal: 50 <span class="conum" data-value="8" />
    optional: true <span class="conum" data-value="9" />
  - type: "yaml"  <span class="conum" data-value="10" />
    classpath: "META-INF/database.yaml" <span class="conum" data-value="11" />
  - type: "hocon"  <span class="conum" data-value="12" />
    classpath: "custom-application.conf" <span class="conum" data-value="13" />
  - type: "json"  <span class="conum" data-value="14" />
    path: "path: conf/custom-application.json" <span class="conum" data-value="15" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1p1btH" title="原文 : If configured to true, config sources discovered through service loader will be added"><code>true</code>に構成されている場合、サービス・ローダーによって検出された構成ソースが追加されます</span></li>
<li data-value="2"><span class="merged" id="all.B8b0A" title="原文 : If configured to true, converters discovered through service loader will be added"><code>true</code>に構成されている場合、サービス・ローダーによって検出されたコンバータが追加されます</span></li>
<li data-value="3"><span class="merged" id="all.40Pt8f" title="原文 : If configured to true, default config sources (system properties, environment variables, and `META-INF/microprofile-config.properties) will be added"><code>true</code>に構成されている場合、デフォルトの構成ソース(システム・プロパティ、環境変数および`META-INF/microprofile-config.properties)が追加されます</span></li>
<li data-value="4"><span class="merged" id="all.3FFWmo" title="原文 : Loads the environment variables config source.">環境変数config sourceをロードします。</span></li>
<li data-value="5"><span class="merged" id="all.3vLBQT" title="原文 : Loads the system properties config source.">システム・プロパティ構成ソースをロードします。</span></li>
<li data-value="6"><span class="merged" id="all.2miQuf" title="原文 : Loads a properties file">プロパティ・ファイルをロード</span></li>
<li data-value="7"><span class="merged" id="all.4bGGDz" title="原文 : Location of the file: /conf/prod.properties on the file system">ファイルのロケーション: ファイル・システム上の<code>/conf/prod.properties</code></span></li>
<li data-value="8"><span class="merged" id="all.2jqgRy.spl1" title="原文 : Custom ordinal, if not defined, the value defined in the file, or default value is used.">カスタム序数(定義されていない場合)、ファイルまたはデフォルト値で定義されている値が使用されます。</span> <span class="merged" id="all.2jqgRy.spl2" title="原文 : The source precedence order is the order of appearance in the file.">ソースの優先順位は、ファイル内の表示順序です。</span> </li>
<li data-value="9"><span class="merged" id="all.ABxGj" title="原文 : The file is optional (if not optional and no file is found, the bootstrap fails)">ファイルはオプションです(オプションでなく、ファイルが見つからない場合、ブートストラップは失敗します)</span></li>
<li data-value="10"><span class="merged" id="all.Lq3Ha" title="原文 : Loads a YAML file">YAMLファイルをロード</span></li>
<li data-value="11"><span class="merged" id="all.4RkofF" title="原文 : Location of the file: META-INF/database.yaml on the classpath">ファイルのロケーション: クラスパス上の<code>META-INF/database.yaml</code></span></li>
<li data-value="12"><span class="merged" id="all.4bA0DJ" title="原文 : Loads a HOCON file">HOCONファイルをロード</span></li>
<li data-value="13"><span class="merged" id="all.4D4yuq" title="原文 : Location of the file: custom-application.conf on the classpath">ファイルのロケーション: クラスパス上の<code>custom-application.conf</code></span></li>
<li data-value="14"><span class="merged" id="all.1o5aec" title="原文 : Loads a JSON file">JSONファイルをロード</span></li>
<li data-value="15"><span class="merged" id="all.4DpG1x" title="原文 : Location of the file: conf/custom-application.json relative to the directory of where the app was executed on the file system.">ファイルのロケーション: ファイル・システム上でアプリケーションが実行されたディレクトリに対する<code>conf/custom-application.json</code>。</span></li>
</ul>

<p><span class="merged" id="all.4OBSxb" title="原文 : Important Note: To enable support for HOCON and JSON types, add the following dependency to your project&rsquo;s pom.xml."><strong>重要なノート:</strong> <code>HOCON</code>および<code>JSON</code>タイプのサポートを有効にするには、プロジェクトpom.xmlに次の依存関係を追加します。</span></p>

<markup
lang="xml"

>        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-config-hocon-mp&lt;/artifactId&gt;
        &lt;/dependency&gt;</markup>

</div>


<h2 id="_extending_meta_config_to_create_a_custom_config_source_type"><span class="merged" id="all.RF5Us" title="原文 : Extending Meta-Config to Create a Custom Config Source Type">メタ構成の拡張によるカスタム構成ソース・タイプの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.4AHaIF.spl1" title="原文 : Helidon meta-config by default supports the following types: environment-variables, system-properties, properties, yaml, hocon and json.">デフォルトでは、Helidon meta-configは次のタイプをサポート: 環境変数、システム・プロパティ、プロパティ、yaml、hoconおよびjson。</span> <span class="merged" id="all.4AHaIF.spl2" title="原文 : Users can also extend meta-config to create a custom config source type by loading it using the Java Service Loader pattern.">ユーザーは、Java Service Loaderパターンを使用してロードすることで、メタ構成を拡張してカスタム構成ソース・タイプを作成することもできます。</span> <span class="merged" id="all.4AHaIF.spl3" title="原文 : This is achieved by implementing io.helidon.config.mp.spi.MpMetaConfigProvider SPI and registering it as a service (Using META-INF/services/${class-name} file when using classpath, or using the provides statement in module-info.java when using module path).">これを実現するには、<code>io.helidon.config.mp.spi.MpMetaConfigProvider</code> SPIを実装し、サービスとして登録します(クラスパスを使用する場合は<code>META-INF/services/${class-name}</code>ファイルを使用し、モジュール・パスを使用する場合は<code>module-info.java</code>の<code>provides</code>文を使用します)。</span> </p>

<p><span class="merged" id="all.2TcVd5" title="原文 : The interface io.helidon.config.mp.spi.MpMetaConfigProvider requires implementation of the following methods:">インタフェース<code>io.helidon.config.mp.spi.MpMetaConfigProvider</code>には、次のメソッドの実装が必要です:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3FAR3G"  title="原文: Set&lt;String&gt; supportedTypes()"><code>Set&lt;String> supportedTypes()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3kcj4e"  title="原文: List&lt;? extends ConfigSource&gt; create(String type, Config metaConfig, String profile);"><code>List&lt;? extends ConfigSource> create(String type, Config metaConfig, String profile);</code></span></p>

</li>
</ul>


<h3 id="_example_of_a_meta_config_custom_type"><span class="merged" id="all.2V3cZr" title="原文 : Example of a Meta-Config Custom Type">メタ構成カスタム・タイプの例</span></h3>
<div class="section">
<markup
lang="java"

>public class CustomMpMetaConfigProvider implements MpMetaConfigProvider {
    @Override
    public Set&lt;String&gt; supportedTypes() {
        return Set.of("custom"); <span class="conum" data-value="1" />
    }

    @Override
    public List&lt;? extends ConfigSource&gt; create(String type, Config metaConfig, String profile) {
        ConfigValue&lt;Path&gt; pathConfig = metaConfig.get("path").as(Path.class);
        if (pathConfig.isPresent()) { <span class="conum" data-value="2" />
            Path path = pathConfig.get();
            List&lt;ConfigSource&gt; sources = sourceFromPath(path, profile); <span class="conum" data-value="3" />
            if (sources != null &amp;&amp; !sources.isEmpty()) {
                return result;
            }
            location = "path " + path.toAbsolutePath();
        } else {
            ConfigValue&lt;String&gt; classpathConfig = metaConfig.get("classpath").as(String.class);
            if (classpathConfig.isPresent()) { <span class="conum" data-value="4" />
                String classpath = classpathConfig.get();
                List&lt;ConfigSource&gt; sources = sourceFromClasspath(classpath, profile); <span class="conum" data-value="5" />
                if (sources != null &amp;&amp; !sources.isEmpty()) {
                    return sources;
                }
                location = "classpath " + classpath;
            } else {
                ConfigValue&lt;URL&gt; urlConfig = metaConfig.get("url").as(URL.class);
                if (urlConfig.isPresent()) { <span class="conum" data-value="6" />
                    URL url = urlConfig.get();
                    List&lt;ConfigSource&gt; sources = sourceFromUrlMeta(url, profile); <span class="conum" data-value="7" />
                    if (sources != null &amp;&amp; !sources.isEmpty()) {
                        return sources;
                    }
                    location = "url " + url;
                } else {
                    throw new ConfigException("No config source location for " + config.key());
                }
            }
        }
    }
    if (metaConfig.get("optional").asBoolean().orElse(false);) {
        return List.of(); <span class="conum" data-value="8" />
    }
    throw new ConfigException("Meta configuration could not find non-optional config source on " + location); <span class="conum" data-value="9" />

}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Mq9y3" title="原文 : Returns the names of the types that will be supported in this meta-config.">このメタ構成でサポートされるタイプの名前を返します。</span></li>
<li data-value="2"><span class="merged" id="all.2Mouc4" title="原文 : Processes config source from file system if path is provided."><code>path</code>が指定されている場合、ファイル・システムから構成ソースを処理します。</span></li>
<li data-value="3"><span class="merged" id="all.3ESD3O" title="原文 : Method to parse config source from a specified path">指定した<code>path</code>から構成ソースを解析するメソッド</span></li>
<li data-value="4"><span class="merged" id="all.3ZZV76" title="原文 : Processes config source from classpath location if classpath is provided."><code>classpath</code>が指定されている場合、クラスパスのロケーションから構成ソースを処理します。</span></li>
<li data-value="5"><span class="merged" id="all.Zap56" title="原文 : Method to parse config source from a specified classpath">指定した<code>classpath</code>から構成ソースを解析するメソッド</span></li>
<li data-value="6"><span class="merged" id="all.1ZlQZB" title="原文 : Processes config source from URL location if location is provided."><code>location</code>が指定されている場合、URLのロケーションから構成ソースを処理します。</span></li>
<li data-value="7"><span class="merged" id="all.4A6CIr" title="原文 : Method to parse config source from a specified url">指定した<code>url</code>から構成ソースを解析するメソッド</span></li>
<li data-value="8"><span class="merged" id="all.393WLU" title="原文 : Returns an empty result if set to optional and config source is not found."><code>optional</code>に設定され、構成ソースが見つからない場合は、空の結果を返します。</span></li>
<li data-value="9"><span class="merged" id="all.YRDMr" title="原文 : Throws a ConfigException if not set to optional and config source is not found."><code>optional</code>に設定されておらず、構成ソースが見つからない場合は、ConfigExceptionをスローします。</span></li>
</ul>

</div>

</div>


<h2 id="_creating_microprofile_config_source_from_helidon_se_config_source"><span class="merged" id="all.35iNOS" title="原文 : Creating MicroProfile Config Source from Helidon SE Config Source">Helidon SE構成ソースからのMicroProfile構成ソースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.3F3bvD.spl1" title="原文 : To use the Helidon SE features in Helidon MP, create MicroProfile Config Source from Helidon SE Config Source.">Helidon MPのHelidon SE機能を使用するには、Helidon SE構成ソースからMicroProfile構成ソースを作成します。</span> <span class="merged" id="all.3F3bvD.spl2" title="原文 : The Config Source is immutable regardless of configured polling strategy or change watchers.">構成されたポーリング戦略や変更ウォッチャに関係なく、構成ソースは不変です。</span> </p>

<div class="listing">
<markup>Config config = ConfigProviderResolver.instance()
                .getBuilder()
                .withSources(MpConfigSources.create(helidonConfigSource) <span class="conum" data-value="1" />
                .build();</markup>
</div>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1OSaGO" title="原文 : Creates a MicroProfile config instance using Helidon Config Source.">Helidon構成ソースを使用してMicroProfile構成インスタンスを作成します。</span></li>
</ul>

</div>


<h2 id="_creating_microprofile_config_source_from_helidon_se_config_instance"><span class="merged" id="all.32iRt" title="原文 : Creating MicroProfile Config Source from Helidon SE Config Instance">Helidon SE構成インスタンスからのMicroProfile構成ソースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.1VwIyE.spl1" title="原文 : To use advanced Helidon SE features in Helidon MP, create MicroProfile Config Source from Helidon SE Config.">Helidon MPで高度なHelidon SE機能を使用するには、Helidon SE構成からMicroProfile構成ソースを作成します。</span> <span class="merged" id="all.1VwIyE.spl2" title="原文 : The Config Source is mutable if the config uses either polling strategy and change watchers, or polling strategy or change watchers.">構成でポーリング戦略および変更ウォッチャ、またはポーリング戦略または変更ウォッチャが使用されている場合、構成ソースは変更可能です。</span> <span class="merged" id="all.1VwIyE.spl3" title="原文 : The latest config version is queried each time org.eclipse.microprofile.config.spi.ConfigSource#getValue(String) is called.">最新の構成バージョンは、<code>org.eclipse.microprofile.config.spi.ConfigSource#getValue(String)</code>がコールされるたびに問い合せられます。</span> </p>

<div class="listing">
<markup>io.helidon.config.Config helidonConfig = io.helidon.config.Config.builder()
                .addSource(ConfigSources.create(Map.of("key", "value"))) <span class="conum" data-value="1" />
                .build();
ConfigProviderResolver.instance();
Config config = ConfigProviderResolver.instance()
                .getBuilder()
                .withSources(MpConfigSources.create(helidonConfig)) <span class="conum" data-value="2" />
                .build();</markup>
</div>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4MLW3v" title="原文 : Creates a config source from Helidon Config.">Helidon構成から構成ソースを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.14QlEe" title="原文 : Creates a MicroProfile config instance using Helidon Config.">Helidon Configを使用してMicroProfile構成インスタンスを作成します。</span></li>
</ul>

</div>

</doc-view>
