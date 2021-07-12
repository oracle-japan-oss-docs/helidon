<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1ylOg7" title="原文 : MicroProfile Config">MicroProfile構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4O2nw3" title="原文 : Helidon&rsquo;s MicroProfile Config, an implementation of Eclipse MicroProfile Config, enables you to configure your applications using MicroProfile&rsquo;s config configuration sources and APIs.">HelidonのMicroProfile Config (Eclipse MicroProfile Configの実装)を使用すると、MicroProfileの構成ソースおよびAPIを使用してアプリケーションを構成できます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.1" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.OOJZz" title="原文 : To enable MicroProfile Config either add a dependency on the helidon-microprofile bundle or add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfile Configを有効にするには、<router-link to="/mp/introduction/02_microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon.microprofile.config&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-microprofile-config&lt;/artifactId&gt;
        &lt;/dependency&gt;</markup>

</div>

<h2 id="_about_microprofile_config"><span class="merged" id="all.3F03o4" title="原文 : About MicroProfile Config">MicroProfile構成について</span></h2>
<div class="section">
<p><span class="merged" id="all.d7gzL.spl1" title="原文 : Helidon MicroProfile Config is an implementation of Eclipse MicroProfile Config.">Helidon MicroProfile Configは、<a href="https://github.com/eclipse/microprofile-config/" id="" target="_blank" >「Eclipse MicroProfile構成」</a>の実装です。</span> <span class="merged" id="all.d7gzL.spl2" title="原文 : You can configure your applications using MicroProfile&rsquo;s config configuration sources and APIs.">MicroProfileの構成ソースおよびAPIを使用して、アプリケーションを構成できます。</span> </p>

<p><span class="merged" id="all.3pepmJ" title="原文 : You can also extend the configuration using MicroProfile SPI to add custom ConfigSource and Converter by implementing the org.eclipse.microprofile.config.spi.ConfigSource and org.eclipse.microprofile.config.spi.Converter interfaces respectively."><code>org.eclipse.microprofile.config.spi.ConfigSource</code>および<code>org.eclipse.microprofile.config.spi.Converter</code>インタフェースをそれぞれ実装することで、MicroProfile SPIを使用して構成を拡張し、カスタム<code>ConfigSource</code>および<code>Converter</code>を追加することもできます。</span></p>


<h3 id="_microprofile_config_features"><span class="merged" id="all.5Eo1C" title="原文 : MicroProfile Config Features">MicroProfileの構成機能</span></h3>
<div class="section">
<p><span class="merged" id="all.2zq6pv" title="原文 : MicroProfile Config uses ConfigSource SPI to load configuration data, either from default configuration sources such file META-INF/microprofile-config.properties, environment variables, and system properties; or from custom ConfigSource located by Java Service Loader.">MicroProfile Configは、<code>ConfigSource</code> SPIを使用して、ファイル<code>META-INF/microprofile-config.properties</code>、環境変数、システム・プロパティなどのデフォルトの構成ソース、またはJavaサービス・ローダーによって配置されたカスタム<code>ConfigSource</code>から構成データをロードします。</span></p>

<p><span class="merged" id="all.3ZvA7o" title="原文 : The data is then available through MicroProfile Config APIs to be injected into CDI Beans, or to be obtained using a Config instance programmatically.">その後、MicroProfile Config APIを介してデータを使用してCDI Beanにインジェクトしたり、<code>Config</code>インスタンスをプログラムで使用して取得できます。</span></p>

<p><span class="merged" id="all.3blk6S" title="原文 : MicroProfile Config provides typed access to configuration values, using built-in converters, and Converter implementations located by Java Service Loader.">MicroProfile Configは、組込みコンバータおよびJavaサービス・ローダーによって配置される<code>Converter</code>実装を使用して、構成値へのタイプ付きアクセスを提供します。</span></p>

<p><span class="merged" id="all.4MqB7y.spl1" title="原文 : MicroProfile Config supports a concept of configuration profiles.">MicroProfile Configは、構成プロファイルの概念をサポートしています。</span> <span class="merged" id="all.4MqB7y.spl2" title="原文 : You can define a profile using the configuration property mp.config.profile (when using default configuration, this can be defined as a system property, environment variable or as a property in microprofile-config.properties).">プロファイルは、構成プロパティ<code>mp.config.profile</code>を使用して定義できます(デフォルト構成を使用する場合、これはシステム・プロパティ、環境変数または<code>microprofile-config.properties</code>のプロパティとして定義できます)。</span> <span class="merged" id="all.4MqB7y.spl3" title="原文 : When a profile is defined, additional config source is loaded (microprofile-config-profile.properties) and properties from profile have precedence over default properties. Profile properties can be defined using `%profile prefix, such as %dev.server.port.">プロファイルを定義すると、追加の構成ソース(<code>microprofile-config.properties</code>)が読み込まれ、プロファイルのプロパティがデフォルトのプロパティよりも優先されます。プロファイルのプロパティは、<code>%dev.server.port</code>のように<code>%profile</code>プレフィックスを使用し定義できます。</span> </p>


<h4 id="_using_microprofile_config_api"><span class="merged" id="all.388j4A" title="原文 : Using MicroProfile Config API">MicroProfile Config APIの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.ll6mV" title="原文 : You can use MicroProfile Config API to get configuration properties by using ConfigProvider.getConfig() or injecting configuration values with @ConfigProperty.">MicroProfile Config APIを使用すると、<code>ConfigProvider.getConfig()</code>を使用するか、<code>@ConfigProperty</code>で構成値をインジェクトすることで、構成プロパティを取得できます。</span></p>

<markup
lang="java"
title="ConfigProvider.getConfig()の使用"
>org.eclipse.microprofile.config.Config config = ConfigProvider.getConfig();
config.getOptionalValue("app.greeting", String.class).orElse("Hello");</markup>

<markup
lang="java"
title="コンストラクタへの構成済プロパティのインジェクト"
>@Inject
public GreetingProvider(@ConfigProperty(name = "app.greeting", defaultValue = "Hello") String message) {
    this.message = message
}</markup>

</div>

<h4 id="_microprofile_config_config_sources"><span class="merged" id="all.43txav" title="原文 : MicroProfile Config Config Sources">MicroProfile構成の構成ソース</span></h4>
<div class="section">
<p><span class="merged" id="all.zW1Su" title="原文 : The example below shows how the MicroProfile configuration file microprofile-config.properties can be used to modify the server listen port property.">次の例は、MicroProfile構成ファイル<code>microprofile-config.properties</code>を使用してサーバーのリスニング・ポート・プロパティを変更する方法を示しています。</span></p>

<markup
lang="properties"

>// Application properties. This is the default greeting
app.greeting=Hello

// Microprofile server properties
server.port=8080
server.host=0.0.0.0</markup>

</div>
</div>

<h3 id="_helidon_microprofile_config_features"><span class="merged" id="all.yHmt8" title="原文 : Helidon MicroProfile Config Features">Helidon MicroProfile構成機能</span></h3>
<div class="section">
<p><span class="merged" id="all.EaWRO" title="原文 : Helidon MicroProfile Config offers the following features on top of the specification:">Helidon MicroProfile Configでは、仕様の上部に次の機能が用意されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2snl7j.spl1" title="原文 : References You can use ${reference} to reference another configuration key in a key value."><strong>「参照」</strong><br><code>${reference}</code>を使用して、キー値の別の構成キーを参照できます。</span> <span class="merged" id="all.2snl7j.spl2" title="原文 : This allows to configure a single key to be reused in multiple other keys.">これにより、単一のキーを他の複数のキーで再利用するように構成できます。</span> </p>

</li>
</ul>
<markup
lang="yaml"
title="例"
>uri: "http://localhost:8080"
service-1: "${uri}/service1"
service-2: "${uri}/service2"</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2zySTE.spl1" title="原文 : Encryption You can encrypt secrets using a master password and store them in a configuration file."><strong>「暗号化」</strong><br>マスター・パスワードを使用してシークレットを暗号化し、構成ファイルに格納できます。</span> <span class="merged" id="all.2zySTE.spl2" title="原文 : The config encryption filter in MicroProfile Config is enabled by default.">MicroProfile構成の構成暗号化フィルタは、デフォルトで有効になっています。</span> <span class="merged" id="all.2zySTE.spl3" title="原文 : For more information, see Configuration Secrets.">詳細は、<router-link @click.native="this.scrollFix('#security/03_configuration-secrets.adoc')" to="#security/03_configuration-secrets.adoc">「構成シークレット」</router-link>を参照してください。</span> </p>

</li>
</ul>
<markup
lang="properties"
title="暗号化されたシークレットの例"
># Password encrypted using a master password
client_secret=${GCM=mYRkg+4Q4hua1kvpCCI2hg==}
# Password encrypted using public key (there are length limits when using RSA)
client_secret=${RSA=mYRkg+4Q4hua1kvpCCI2hg==}
# Password in clear text, can be used in development
# The system needs to be configured to accept clear text
client_secret=${CLEAR=known_password}</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1H8DoD.spl1" title="原文 : Meta Configuration You can configure the Config using Helidon MP Config meta configuration feature."><strong>「メタ構成」</strong><br>Helidon MP Configメタ構成機能を使用して構成を構成できます。</span> <span class="merged" id="all.1H8DoD.spl2" title="原文 : This is a Helidon specific feature available since version 2.3.0.">これは、バージョン2.3.0以降で使用可能なHelidon固有の機能です。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.4O4kUc" title="原文 : When used, the MicroProfile Config uses configuration sources and flags configured in the meta configuration file.">MicroProfile構成を使用すると、メタ構成ファイルで構成された構成ソースおよびフラグが使用されます。</span></p>

<p><span class="merged" id="all.95G5C" title="原文 : The meta-config allows configuration of config sources and other configuration options, including addition of discovered sources and converters.">meta-configを使用すると、検出されたソースやコンバータの追加など、構成ソースやその他の構成オプションを構成できます。</span></p>

<p><span class="merged" id="all.1Xhh6i.spl1" title="原文 : If a file named mp-meta-config.yaml, or mp-meta-config.properties is in the current directory or on the classpath, and there is no explicit setup of configuration in the code, the configuration will be loaded from the meta-config file."><code>mp-meta-config.yaml</code>または<code>mp-meta-config.properties</code>という名前のファイルが現在のディレクトリまたはクラスパスにあり、コードに構成が明示的に設定されていない場合、構成は<code>meta-config</code>ファイルからロードされます。</span> <span class="merged" id="all.1Xhh6i.spl2" title="原文 : The location of the file can be overridden using system property io.helidon.config.mp.meta-config, or environment variable HELIDON_MP_META_CONFIG">ファイルのロケーションは、システム・プロパティ<code>io.helidon.config.mp.meta-config</code>または環境変数<code>HELIDON_MP_META_CONFIG</code>を使用してオーバーライドできます</span> </p>

<markup
lang="yaml"
title="YAMLメタ構成ファイルの例:"
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
    classpath: "META-INF/database.yaml" <span class="conum" data-value="11" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1p1btH" title="原文 : If configured to true, config sources discovered through service loader will be added"><code>true</code>に構成されている場合、サービス・ローダーによって検出された構成ソースが追加されます</span></li>
<li data-value="2"><span class="merged" id="all.B8b0A" title="原文 : If configured to true, converters discovered through service loader will be added"><code>true</code>に構成されている場合、サービス・ローダーによって検出されたコンバータが追加されます</span></li>
<li data-value="3"><span class="merged" id="all.40Pt8f" title="原文 : If configured to true, default config sources (system properties, environment variables, and `META-INF/microprofile-config.properties) will be added"><code>true</code>に構成されている場合、デフォルトの構成ソース(システム・プロパティ、環境変数および`META-INF/microprofile-config.properties)が追加されます</span></li>
<li data-value="4"><span class="merged" id="all.3FFWmo" title="原文 : Loads the environment variables config source.">環境変数config sourceをロードします。</span></li>
<li data-value="5"><span class="merged" id="all.3vLBQT" title="原文 : Loads the system properties config source.">システム・プロパティ構成ソースをロードします。</span></li>
<li data-value="6"><span class="merged" id="all.2miQuf" title="原文 : Loads a properties file">プロパティ・ファイルをロード</span></li>
<li data-value="7"><span class="merged" id="all.4bGGDz" title="原文 : Location of the file: /conf/prod.properties on the file system">ファイルのロケーション: ファイル・システム上の<code>/conf/prod.properties</code></span></li>
<li data-value="8"><span class="merged" id="all.4EkWjL" title="原文 : Custom ordinal, if not defined, the value defined in the file, or default value is used">カスタム序数(定義されていない場合はファイルに定義されている値、またはデフォルト値が使用されます)</span></li>
<li data-value="9"><span class="merged" id="all.ABxGj" title="原文 : The file is optional (if not optional and no file is found, the bootstrap fails)">ファイルはオプションです(オプションでなく、ファイルが見つからない場合、ブートストラップは失敗します)</span></li>
<li data-value="10"><span class="merged" id="all.Lq3Ha" title="原文 : Loads a YAML file">YAMLファイルをロード</span></li>
<li data-value="11"><span class="merged" id="all.4RkofF" title="原文 : Location of the file: META-INF/database.yaml on the classpath">ファイルのロケーション: クラスパス上の<code>META-INF/database.yaml</code></span></li>
</ul>
<p><span class="merged" id="all.33gfHe.spl1" title="原文 : For backward compatibility, we will support usage of Helidon SE meta-configuration until version 3.0.0.">下位互換性のために、バージョン3.0.0までのHelidon SEメタ構成の使用がサポートされています。</span> <span class="merged" id="all.33gfHe.spl2" title="原文 : Using this approach causes behavior that is not compatible with MicroProfile Config specification.">このアプローチを使用すると、MicroProfile Config仕様と互換性のない動作が発生します。</span> </p>

</div>
</div>

<h2 id="_guides"><span class="merged" id="all.1MzdrF"  title="原文:: Guides">ガイド</span></h2>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/guides/03_config"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">MP構成ガイド</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2oKSzn" title="原文 : Step-by-step guide about using MicroProfile Config in your Helidon MP application.">Helidon MPアプリケーションでのMicroProfile Configの使用に関するステップ・バイ・ステップ・ガイド。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>

<h2 id="_using_microprofile_config_sources"><span class="merged" id="all.3ekigD" title="原文 : Using MicroProfile Config Sources">MicroProfile構成ソースの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.1ZKDEo" title="原文 : The following configuration sources can be used to retrieve the configuration:">次の構成ソースを使用して、構成を取得できます:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 37.5%;">
<col style="width: 62.5%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1c5Nmn"  title="原文:: Source">ソース</span></th>
<th><span class="merged" id="all.4JM9z7"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.24lkzh"  title="原文:: System properties">システム・プロパティ</span></td>
<td class=""><span class="merged" id="all.37RESY" title="原文 : A mutable source that uses System.getProperties() to obtain configuration values."><code>System.getProperties()</code>を使用して構成値を取得する可変ソース。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.401dbB"  title="原文:: Environment variables">環境変数</span></td>
<td class=""><span class="merged" id="all.32ooRH" title="原文 : An immutable source that uses System.env() to obtain configuration values and resolves aliases as defined by the MicroProfile Config specification."><code>System.env()</code>を使用して構成値を取得し、MicroProfile Config仕様で定義されている別名を解決する不変のソース。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jb4qj"  title="原文: META-INF/microprofile-config.properties"><code>META-INF/microprofile-config.properties</code></span></td>
<td class=""><span class="merged" id="all.3e02Hj" title="原文 : The properties config source as defined by MicroProfile Config specification.">MicroProfile Config仕様で定義されているプロパティ構成ソース。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Fz2xo"  title="原文: application.yaml"><code>application.yaml</code></span></td>
<td class=""><span class="merged" id="all.3fMtZv" title="原文 : The Helidon default configuration source.">Helidonのデフォルト構成ソース。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.oj8YQ"  title="原文:: File">ファイル</span></td>
<td class=""><span class="merged" id="all.2BH7eq" title="原文 : Creates the source from a properties file on the file system with MpConfigSources.create(Path)."><code>MpConfigSources.create(Path)</code>を使用して、ファイル・システムのプロパティ・ファイルからソースを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1oCEgW"  title="原文:: URL">URL</span></td>
<td class=""><span class="merged" id="all.13Xtlf" title="原文 : Creates the source from properties from an URL with MpConfigSources.create(URL)."><code>MpConfigSources.create(URL)</code>でURLからプロパティからソースを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.v2eCc"  title="原文: Map&lt;String, String&gt;"><code>Map&lt;String, String></code></span></td>
<td class=""><span class="merged" id="all.4V6SUv" title="原文 : Creates the source from a Map with MpConfigSources.create(Map)."><code>MpConfigSources.create(Map)</code>でマップからソースを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38QCtk"  title="原文: Properties"><code>Properties</code></span></td>
<td class=""><span class="merged" id="all.2906gm" title="原文 : Creates the source directly from Properties with MpConfigSources.create(Properties)."><code>MpConfigSources.create(Properties)</code>でプロパティからソースを直接作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.383faw" title="原文 : File on classpath">クラスパス上のファイル</span></td>
<td class=""><span class="merged" id="all.13C4Be" title="原文 : Creates the source from a properties file on classpath with MpConfigSources.classpath(String)."><code>MpConfigSources.classpath(String)</code>を使用して、クラスパスのプロパティ・ファイルからソースを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42WB1c.1" title="原文 : YAML">YAML</span></td>
<td class=""><span class="merged" id="all.4IuglE" title="原文 : Creates the source from YAML using YamlMpConfigSource.create(Path) or YamlMpConfigSource.create(URL)."><code>YamlMpConfigSource.create(Path)</code>または<code>YamlMpConfigSource.create(URL)</code>を使用してYAMLからソースを作成します。</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_using_helidon_config_apis"><span class="merged" id="all.2juii5" title="原文 : Using Helidon Config APIs">Helidon構成APIの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.pIhwS" title="原文 : You can use MpConfigSources.create(helidonConfig) to create a config source from Helidon config and then use it to create a MicroProfile instance."><code>MpConfigSources.create(helidonConfig)</code>を使用して、Helidon構成から構成ソースを作成し、それを使用してMicroProfileインスタンスを作成できます。</span></p>

<markup
lang="java"

>io.helidon.config.Config helidonConfig = io.helidon.config.Config.builder()
                .addSource(ConfigSources.create(Map.of("key", "value"))) <span class="conum" data-value="1" />
                .build();

Config config = ConfigProviderResolver.instance()
                .getBuilder()
                .withSources(MpConfigSources.create(helidonConfig)) <span class="conum" data-value="2" />
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4MLW3v" title="原文 : Creates a config source from Helidon Config.">Helidon構成から構成ソースを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.gAQ3P" title="原文 : Creates a MicroProfile Config instance.">MicroProfile構成インスタンスを作成します。</span></li>
</ul>
<p><span class="merged" id="all.1teJDv" title="原文 : For more information on using Helidon Config APIs, see the Helidon SE Configuration documentation.">Helidon Config APIの使用方法の詳細は、Helidon SE構成ドキュメントを参照してください。</span></p>

</div>

<h2 id="_additional_information"><span class="merged" id="all.1BotSu"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.cQjwR" title="原文 : Helidon Config SPI"><a href="./apidocs//io.helidon.config/io/helidon/config/spi/package-summary.html" id="" target="_blank" >Helidon構成SPI</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3UOnMp" title="原文 : Helidon Config API"><a href="./apidocs//io.helidon.config/io/helidon/config/package-summary.html" id="" target="_blank" >Helidon構成API</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4LgaGm" title="原文 : Eclispe MicroProfile API"><a href="https://download.eclipse.org/microprofile/microprofile-config-1.3/apidocs/" id="" target="_blank" >Eclispe MicroProfile API</a></span></p>

</li>
</ul>
</div>
</doc-view>
