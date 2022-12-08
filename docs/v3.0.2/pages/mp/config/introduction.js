<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.3"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.1" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.1" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.1" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.1" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.1"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3VGrRZ.spl1" title="原文 : Helidon MicroProfile Config is an implementation of Eclipse MicroProfile Config.">Helidon MicroProfile Configは、<a href="https://github.com/eclipse/microprofile-config/" target="_blank">「Eclipse MicroProfile構成」</a>の実装です。</span> <span class="merged" id="all.3VGrRZ.spl2" title="原文 : You can configure your applications using MicroProfile&rsquo;s config configuration sources and APIs.">MicroProfileの構成ソースおよびAPIを使用して、アプリケーションを構成できます。</span> <span class="merged" id="all.3VGrRZ.spl3" title="原文 : You can also extend the configuration using MicroProfile SPI to add custom ConfigSource and Converter.">MicroProfile SPIを使用して、カスタム<code>ConfigSource</code>および<code>Converter</code>を追加することもできます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.1"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2wNrV8" title="原文 : To enable MicroProfile Config either add a dependency on the helidon-microprofile bundle or add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfile Configを有効にするには、<router-link to="/mp/introduction/microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.config&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-config&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC"  title="原文:: Usage">使用方法</span></h2>
<div class="section">

<h3 id="_microprofile_config_features"><span class="merged" id="all.5Eo1C" title="原文 : MicroProfile Config Features">MicroProfileの構成機能</span></h3>
<div class="section">

<h4 id="_microprofile_config_sources"><span class="merged" id="all.2QxziZ" title="原文 : MicroProfile Config Sources">MicroProfile構成ソース</span></h4>
<div class="section">
<p><span class="merged" id="all.CzUPE" title="原文 : A Config Source provides configuration values from different sources such as property files and user classes that are registered by the application.">構成ソースは、アプリケーションによって登録されたプロパティ・ファイルやユーザー・クラスなど、様々なソースからの構成値を提供します。</span></p>

<p><span class="merged" id="all.3LwWp" title="原文 : By default, the following configuration sources are used to retrieve the configuration:">デフォルトでは、次の構成ソースを使用して構成を取得します:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 37.5%;">
<col style="width: 62.5%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1c5Nmn"  title="原文:: Source">ソース</span></th>
<th><span class="merged" id="all.4JM9z7.3"  title="原文:: Description">説明</span></th>
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
</tbody>
</table>
</div>

<p><span class="merged" id="all.laGg3" title="原文 : MicroProfile Config uses ConfigSource SPI to load configuration data, either from default configuration sources or from custom ConfigSource located by Java Service Loader.">MicroProfile構成では、<code>ConfigSource</code> SPIを使用して、デフォルトの構成ソースから、またはJavaサービス・ローダーにあるカスタム<code>ConfigSource</code>から構成データをロードします。</span></p>

</div>


<h4 id="_using_microprofile_config_api"><span class="merged" id="all.388j4A" title="原文 : Using MicroProfile Config API">MicroProfile Config APIの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.3TDBd4" title="原文 : You can use MicroProfile Config API to get configuration properties by using a Config instance programmatically or injecting configuration values with @ConfigProperty.">MicroProfile構成APIを使用して、<code>Config</code>インスタンスをプログラムで使用するか、<code>@ConfigProperty</code>で構成値をインジェクトすることにより、構成プロパティを取得できます。</span></p>

<markup
lang="java"
title="Using <code>Config</code>"
>org.eclipse.microprofile.config.Config config = ConfigProvider.getConfig();
config.getOptionalValue("app.greeting", String.class).orElse("Hello");</markup>

<markup
lang="java"
title="Injecting configured properties into a constructor"
>@Inject
public GreetingProvider(@ConfigProperty(name = "app.greeting", defaultValue = "Hello") String message) {
    this.message = message
}</markup>

<p><span class="merged" id="all.3blk6S" title="原文 : MicroProfile Config provides typed access to configuration values, using built-in converters, and Converter implementations located by Java Service Loader.">MicroProfile Configは、組込みコンバータおよびJavaサービス・ローダーによって配置される<code>Converter</code>実装を使用して、構成値へのタイプ付きアクセスを提供します。</span></p>

</div>


<h4 id="_ordering_of_default_config_sources"><span class="merged" id="all.4OuNlQ" title="原文 : Ordering of Default Config Sources">デフォルト構成ソースの順序</span></h4>
<div class="section">
<p><span class="merged" id="all.13EELW.spl1" title="原文 : In order to properly configure your application using configuration sources, you need to understand the precedence rules used to merge your configuration data.">構成ソースを使用してアプリケーションを正しく構成するには、構成データのマージに使用される優先順位ルールを理解する必要があります。</span> <span class="merged" id="all.13EELW.spl2" title="原文 : The default MicroProfile Config Sources ordering is:">デフォルトのMicroProfile構成ソースの順序は次のとおりです:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.s65Kn" title="原文 : System properties (ordinal=400)">システム・プロパティ(序数=400)</span></p>

</li>
<li>
<p><span class="merged" id="all.3se9hC" title="原文 : Environment variables (ordinal=300)">環境変数(序数=300)</span></p>

</li>
<li>
<p><span class="merged" id="all.28Dxay" title="原文 : /META-INF/microprofile-config.properties (ordinal=100)">/META-INF/microprofile-config.properties (序数=100)</span></p>

</li>
</ul>

<p><span class="merged" id="all.1iEfGS.spl1" title="原文 : Each Config Source has an ordinal that determines the priority of the Config Source.">各構成ソースには、構成ソースの優先度を決定する序数があります。</span> <span class="merged" id="all.1iEfGS.spl2" title="原文 : A Config Source with higher ordinal has higher priority as compared to the Config Source with lower ordinal.">序数の高い構成ソースは、序数の低い構成ソースより優先度が高くなります。</span> <span class="merged" id="all.1iEfGS.spl3" title="原文 : The values taken from the high-priority Config Source overrides the values from low-priority Config Source.">優先度の高い構成ソースから取得された値は、優先度の低い構成ソースからの値をオーバーライドします。</span> </p>

<p><span class="merged" id="all.SROXf" title="原文 : This helps to customize the configuration of Config Sources using external Config Source if an external Config Source has higher ordinal values than the built-in Config Sources of the application.">これは、外部構成ソースの順序値がアプリケーションの組込み構成ソースより大きい場合に、外部構成ソースを使用して構成ソースの構成をカスタマイズするのに役立ちます。</span></p>

<p><span class="merged" id="all.zW1Su" title="原文 : The example below shows how the MicroProfile configuration file microprofile-config.properties can be used to modify the server listen port property.">次の例は、MicroProfile構成ファイル<code>microprofile-config.properties</code>を使用してサーバーのリスニング・ポート・プロパティを変更する方法を示しています。</span></p>

<markup
lang="properties"

>// Application properties. This is the default greeting
app.greeting=Hello

// Microprofile server properties
server.port=8080
server.host=0.0.0.0</markup>

</div>


<h4 id="Config-Profiles"><span class="merged" id="all.sz4Lp" title="原文 : MicroProfile Config Profiles">MicroProfile構成プロファイル</span></h4>
<div class="section">
<p><span class="merged" id="all.1oU5jW.spl1" title="原文 : MicroProfile Config supports a concept of configuration profiles.">MicroProfile Configは、構成プロファイルの概念をサポートしています。</span> <span class="merged" id="all.1oU5jW.spl2" title="原文 : You can define a profile using the configuration property mp.config.profile (when using default configuration, this can be defined as a system property, environment variable or as a property in microprofile-config.properties).">プロファイルは、構成プロパティ<code>mp.config.profile</code>を使用して定義できます(デフォルト構成を使用する場合、これはシステム・プロパティ、環境変数または<code>microprofile-config.properties</code>のプロパティとして定義できます)。</span> <span class="merged" id="all.1oU5jW.spl3" title="原文 : When a profile is defined, additional config source is loaded (microprofile-config-profile.properties) and properties from profile have precedence over default properties.">プロファイルが定義されると、追加の構成ソースがロードされ(<code>microprofile-config-profile.properties</code>)、プロファイルからのプロパティはデフォルト・プロパティより優先されます。</span> <span class="merged" id="all.1oU5jW.spl4" title="原文 : Profile properties can be defined using %profile prefix, such as %dev.server.port.">プロファイル・プロパティは、<code>%dev.server.port</code>などの<code>%profile</code>プレフィクスを使用して定義できます。</span> </p>

</div>

</div>


<h3 id="_helidon_microprofile_config_features"><span class="merged" id="all.yHmt8" title="原文 : Helidon MicroProfile Config Features">Helidon MicroProfile構成機能</span></h3>
<div class="section">
<p><span class="merged" id="all.EaWRO" title="原文 : Helidon MicroProfile Config offers the following features on top of the specification:">Helidon MicroProfile Configでは、仕様の上部に次の機能が用意されています:</span></p>

</div>


<h3 id="_helidon_microprofile_config_sources"><span class="merged" id="all.22j0lF" title="原文 : Helidon MicroProfile Config Sources">Helidon MicroProfile構成ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.1qwGo7.spl1" title="原文 : Helidon configuration sources can use different formats for the configuration data.">Helidon構成ソースでは、構成データに異なる形式を使用できます。</span> <span class="merged" id="all.1qwGo7.spl2" title="原文 : You can specify the format on a per source bases, mixing and matching formats as required.">ソース・ベースごとにフォーマットを指定し、必要に応じてフォーマットを混合して一致させることができます。</span> </p>

<p><span class="merged" id="all.1ZKDEo" title="原文 : The following configuration sources can be used to retrieve the configuration:">次の構成ソースを使用して、構成を取得できます:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 37.5%;">
<col style="width: 62.5%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1c5Nmn.1"  title="原文:: Source">ソース</span></td>
<td class=""><span class="merged" id="all.4JM9z7.4"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.oj8YQ"  title="原文:: File">ファイル</span></td>
<td class=""><span class="merged" id="all.2BH7eq" title="原文 : Creates the source from a properties file on the file system with MpConfigSources.create(Path)."><code>MpConfigSources.create(Path)</code>を使用して、ファイル・システムのプロパティ・ファイルからソースを作成します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1oCEgW"  title="原文:: URL">URL</span></td>
<td class=""><span class="merged" id="all.4ZPN8u" title="原文 : Creates the source from properties from a URL with MpConfigSources.create(URL)."><code>MpConfigSources.create(URL)</code>を使用してURLからプロパティからソースを作成します。</span></td>
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
<td class=""><span class="merged" id="all.42WB1c.1"  title="原文:: YAML">YAML</span></td>
<td class=""><span class="merged" id="all.4IuglE" title="原文 : Creates the source from YAML using YamlMpConfigSource.create(Path) or YamlMpConfigSource.create(URL)."><code>YamlMpConfigSource.create(Path)</code>または<code>YamlMpConfigSource.create(URL)</code>を使用してYAMLからソースを作成します。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.12NXmE" title="原文 : See manual setup of config section for more information.">詳細は、<router-link :to="{path: '/mp/config/advanced-configuration', hash: '#_creating_microprofile_config_sources_for_manual_setup_of_config'}">「構成の手動設定」</router-link>の項を参照してください。</span></p>


<h4 id="_references"><span class="merged" id="all.3oSja0"  title="原文:: References">参照</span></h4>
<div class="section">
<p><span class="merged" id="all.3KAgn1.spl1" title="原文 : You can use ${reference} to reference another configuration key in a key value."><code>${reference}</code>を使用して、キー値の別の構成キーを参照できます。</span> <span class="merged" id="all.3KAgn1.spl2" title="原文 : This allows to configure a single key to be reused in multiple other keys.">これにより、単一のキーを他の複数のキーで再利用するように構成できます。</span> </p>

<markup
lang="yaml"
title="Example"
>uri: "http://localhost:8080"
service-1: "${uri}/service1"
service-2: "${uri}/service2"</markup>

</div>


<h4 id="_change_support"><span class="merged" id="all.3fBc64" title="原文 : Change support">変更サポート</span></h4>
<div class="section">
<p><span class="merged" id="all.4JcjTb" title="原文 : Polling (or change watching) for file based config sources (not classpath based).">ファイル・ベースの構成ソース(クラスパス・ベースではない)のポーリング(または監視の変更)。</span></p>

<p><span class="merged" id="all.R1Pgy" title="原文 : To enable polling for a config source created using meta configuration (see below), or using MpConfigSources.create(Path), or YamlMpConfigSource.create(Path), use the following properties:">メタ構成(次を参照)を使用して作成された構成)、または<code>MpConfigSources.create(Path)</code>または<code>YamlMpConfigSource.create(Path)</code>を使用して作成された構成ソースのポーリングを有効にするには、次のプロパティを使用します:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 37.5%;">
<col style="width: 62.5%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.261WC8"  title="原文:: Property">プロパティ</span></th>
<th><span class="merged" id="all.4JM9z7.5"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1ls7nE"  title="原文: helidon.config.polling.enabled"><code>helidon.config.polling.enabled</code></span></td>
<td class=""><span class="merged" id="all.1Xj5Wc" title="原文 : To enable polling file for changes, uses timestamp to identify a change.">変更のポーリング・ファイルを有効にするには、タイムスタンプを使用して変更を識別します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10ZF0h"  title="原文: helidon.config.polling.duration"><code>helidon.config.polling.duration</code></span></td>
<td class=""><span class="merged" id="all.4BhEbn" title="原文 : Polling period duration, defaults to 10 seconds (&apos;PT10S`) See javadoc">ポーリング期間、デフォルトは10秒('PT10S`)<br><a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/Duration.html#parse(java.lang.CharSequence)" target="_blank">javadoc</a>を参照してください</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rJxDe"  title="原文: helidon.config.watcher.enabled"><code>helidon.config.watcher.enabled</code></span></td>
<td class=""><span class="merged" id="all.15NRRx.spl1" title="原文 : To enable watching file for changes using the Java WatchService.">Java <code>WatchService</code>を使用してファイルの変更を監視するには。</span> <span class="merged" id="all.15NRRx.spl2" title="原文 :  See link:https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/WatchService.html"><br>link:https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/WatchService.htmlを参照してください</span> </td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_encryption"><span class="merged" id="all.Nhjlz.1"  title="原文:: Encryption">暗号化</span></h4>
<div class="section">
<p><span class="merged" id="all.1tTQJl.spl1" title="原文 : You can encrypt secrets using a master password and store them in a configuration file.">マスター・パスワードを使用してシークレットを暗号化し、構成ファイルに格納できます。</span> <span class="merged" id="all.1tTQJl.spl2" title="原文 : The config encryption filter in MicroProfile Config is enabled by default.">MicroProfile構成の構成暗号化フィルタは、デフォルトで有効になっています。</span> <span class="merged" id="all.1tTQJl.spl3" title="原文 : For more information, see Configuration Secrets.">詳細は、<router-link to="/mp/security/configuration-secrets">「構成シークレット」</router-link>を参照してください。</span> </p>

<markup
lang="properties"
title="Example of encrypted secrets"
># Password encrypted using a master password
client_secret=${GCM=mYRkg+4Q4hua1kvpCCI2hg==}
# Password encrypted using public key (there are length limits when using RSA)
client_secret=${RSA=mYRkg+4Q4hua1kvpCCI2hg==}
# Password in clear text, can be used in development
# The system needs to be configured to accept clear text
client_secret=${CLEAR=known_password}</markup>

</div>


<h4 id="_meta_configuration"><span class="merged" id="all.2aYUcD"  title="原文:: Meta Configuration">メタ構成</span></h4>
<div class="section">
<p><span class="merged" id="all.43jxlO.spl1" title="原文 : You can configure the Config using Helidon MP Config meta configuration feature.">Helidon MP Configメタ構成機能を使用して構成を構成できます。</span> <span class="merged" id="all.43jxlO.spl2" title="原文 : The meta-config allows configuration of config sources and other configuration options, including addition of discovered sources and converters.">meta-configを使用すると、検出されたソースやコンバータの追加など、構成ソースやその他の構成オプションを構成できます。</span> </p>

<p><span class="merged" id="all.42uPh4" title="原文 : See Microprofile Config Sources for detailed information.">詳細は、<router-link :to="{path: '/mp/config/advanced-configuration', hash: '#_creating_microprofile_config_sources_from_meta_config'}">「Microprofile構成ソース」</router-link>を参照してください。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.33gfHe.spl1" title="原文 : For backward compatibility, we will support usage of Helidon SE meta-configuration until version 3.0.0.">下位互換性のために、バージョン3.0.0までのHelidon SEメタ構成の使用がサポートされています。</span> <span class="merged" id="all.33gfHe.spl2" title="原文 : Using this approach causes behavior that is not compatible with MicroProfile Config specification.">このアプローチを使用すると、MicroProfile Config仕様と互換性のない動作が発生します。</span> </p>
</div>

</div>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.1"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2bbtIG" title="原文 : Config sources can be configured using the following properties.">構成ソースは、次のプロパティを使用して構成できます。</span></p>

<p><span class="merged" id="all.jQtPp" title="原文 : The class responsible for configuration is:">構成を担当するクラスは次のとおりです:</span></p>

<p><span class="merged" id="all.3g1HE1.1" title="原文 : Type: org.eclipse.microprofile.config.Config">タイプ: org.eclipse.microprofile.config.Config</span></p>

<p><span class="merged" id="all.I7R8X.1" title="原文 : This is a standalone configuration type, prefix from configuration root: mp.config">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>mp.config</code></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.65"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.66" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.75"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.75"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.75"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.75"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4RLyMe.1"  title="原文: profile"><code>profile</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.180"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.6kgKE.1" title="原文 : Configure an explicit profile name.">明示的なプロファイル名を構成します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.3CGFZi" title="原文 : Current properties may be set in application.yaml or in microprofile-config.properties with mp.config prefix.">現在のプロパティは、<code>application.yaml</code>または<code>microprofile-config.properties</code>で<code>mp.config</code>プレフィクス付きで設定できます。</span></p>

<p><span class="merged" id="all.21CjJT" title="原文 : See Config Profiles for more information.">詳細は、<router-link @click.native="this.scrollFix('#Config-Profiles')" to="#Config-Profiles">「構成プロファイル」</router-link>を参照してください。</span></p>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.1"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<v-layout row wrap class="mb-5"><v-flex xs12><v-container fluid grid-list-md class="pa-0"><v-layout row wrap class="pillars"><v-flex xs12 sm4 lg3><v-card><v-card-title primary class="headline layout justify-center"><span style="text-align:center">MP構成ガイド</span></v-card-title> <v-card-text class="caption">
<p><span class="merged" id="all.2oKSzn" title="原文 : Step-by-step guide about using MicroProfile Config in your Helidon MP application.">Helidon MPアプリケーションでのMicroProfile Configの使用に関するステップ・バイ・ステップ・ガイド。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.1"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2DHYcr" title="原文 : MicroProfile Config Specifications"><a href="https://download.eclipse.org/microprofile/microprofile-config-3.0.1/microprofile-config-spec-3.0.1.html}" target="_blank">MicroProfile構成仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3AH19A" title="原文 : MicroProfile Config Javadocs"><a href="https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0/apidocs" target="_blank">MicroProfile構成Javadoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
