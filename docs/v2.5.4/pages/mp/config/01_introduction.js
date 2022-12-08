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

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.2"  title="原文:: Maven Coordinates">Maven連携</span></h2>
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
<p><span class="merged" id="all.1BOmrc.spl1" title="原文 : Helidon MicroProfile Config is an implementation of Eclipse MicroProfile Config.">Helidon MicroProfile Configは、<a href="https://github.com/eclipse/microprofile-config/" id="" target="_blank" >「Eclipse MicroProfile構成」</a>の実装です。</span> <span class="merged" id="all.1BOmrc.spl2" title="原文 : You can configure your applications using MicroProfile&rsquo;s config configuration sources and APIs.">MicroProfileの構成ソースおよびAPIを使用して、アプリケーションを構成できます。</span> <span class="merged" id="all.1BOmrc.spl3" title="原文 : You can also extend the configuration using MicroProfile SPI to add custom ConfigSource and Converter.">MicroProfile SPIを使用して、カスタム<code>ConfigSource</code>および<code>Converter</code>を追加することもできます。</span> </p>


<h3 id="_microprofile_config_features"><span class="merged" id="all.5Eo1C" title="原文 : MicroProfile Config Features">MicroProfileの構成機能</span></h3>
<div class="section">
<p><span class="merged" id="all.2zq6pv" title="原文 : MicroProfile Config uses ConfigSource SPI to load configuration data, either from default configuration sources such file META-INF/microprofile-config.properties, environment variables, and system properties; or from custom ConfigSource located by Java Service Loader.">MicroProfile Configは、<code>ConfigSource</code> SPIを使用して、ファイル<code>META-INF/microprofile-config.properties</code>、環境変数、システム・プロパティなどのデフォルトの構成ソース、またはJavaサービス・ローダーによって配置されたカスタム<code>ConfigSource</code>から構成データをロードします。</span></p>

<p><span class="merged" id="all.3ZvA7o" title="原文 : The data is then available through MicroProfile Config APIs to be injected into CDI Beans, or to be obtained using a Config instance programmatically.">その後、MicroProfile Config APIを介してデータを使用してCDI Beanにインジェクトしたり、<code>Config</code>インスタンスをプログラムで使用して取得できます。</span></p>

<p><span class="merged" id="all.3blk6S" title="原文 : MicroProfile Config provides typed access to configuration values, using built-in converters, and Converter implementations located by Java Service Loader.">MicroProfile Configは、組込みコンバータおよびJavaサービス・ローダーによって配置される<code>Converter</code>実装を使用して、構成値へのタイプ付きアクセスを提供します。</span></p>


<h4 id="_using_microprofile_config_api"><span class="merged" id="all.388j4A" title="原文 : Using MicroProfile Config API">MicroProfile Config APIの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.ll6mV" title="原文 : You can use MicroProfile Config API to get configuration properties by using ConfigProvider.getConfig() or injecting configuration values with @ConfigProperty.">MicroProfile Config APIを使用すると、<code>ConfigProvider.getConfig()</code>を使用するか、<code>@ConfigProperty</code>で構成値をインジェクトすることで、構成プロパティを取得できます。</span></p>

<markup
lang="java"
title="Using ConfigProvider.getConfig()"
>org.eclipse.microprofile.config.Config config = ConfigProvider.getConfig();
config.getOptionalValue("app.greeting", String.class).orElse("Hello");</markup>

<markup
lang="java"
title="Injecting configured properties into a constructor"
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

<h4 id="_microprofile_config_profiles"><span class="merged" id="all.sz4Lp" title="原文 : MicroProfile Config Profiles">MicroProfile構成プロファイル</span></h4>
<div class="section">
<p><span class="merged" id="all.1oU5jW.spl1" title="原文 : MicroProfile Config supports a concept of configuration profiles.">MicroProfile Configは、構成プロファイルの概念をサポートしています。</span> <span class="merged" id="all.1oU5jW.spl2" title="原文 : You can define a profile using the configuration property mp.config.profile (when using default configuration, this can be defined as a system property, environment variable or as a property in microprofile-config.properties).">プロファイルは、構成プロパティ<code>mp.config.profile</code>を使用して定義できます(デフォルト構成を使用する場合、これはシステム・プロパティ、環境変数または<code>microprofile-config.properties</code>のプロパティとして定義できます)。</span> <span class="merged" id="all.1oU5jW.spl3" title="原文 : When a profile is defined, additional config source is loaded (microprofile-config-profile.properties) and properties from profile have precedence over default properties.">プロファイルが定義されると、追加の構成ソースがロードされ(<code>microprofile-config-profile.properties</code>)、プロファイルからのプロパティはデフォルト・プロパティより優先されます。</span> <span class="merged" id="all.1oU5jW.spl4" title="原文 : Profile properties can be defined using %profile prefix, such as %dev.server.port.">プロファイル・プロパティは、<code>%dev.server.port</code>などの<code>%profile</code>プレフィクスを使用して定義できます。</span> </p>

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
title="Example"
>uri: "http://localhost:8080"
service-1: "${uri}/service1"
service-2: "${uri}/service2"</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4EJPoa" title="原文 : Change support Polling (or change watching) for file based config sources (not classpath based)."><strong>「変更サポート」</strong><br>ファイル・ベースの構成ソース(クラスパス・ベースではない)のポーリング(または監視の変更)。</span></p>

</li>
</ul>
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
<th><span class="merged" id="all.4JM9z7"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1ls7nE"  title="原文: helidon.config.polling.enabled"><code>helidon.config.polling.enabled</code></span></td>
<td class=""><span class="merged" id="all.1Xj5Wc" title="原文 : To enable polling file for changes, uses timestamp to identify a change.">変更のポーリング・ファイルを有効にするには、タイムスタンプを使用して変更を識別します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10ZF0h"  title="原文: helidon.config.polling.duration"><code>helidon.config.polling.duration</code></span></td>
<td class=""><span class="merged" id="all.4WkQFQ" title="原文 : Polling period duration, defaults to 10 seconds (&apos;PT10S`) See https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/Duration.html#parse(java.lang.CharSequence)">ポーリング期間、デフォルトは10秒('PT10S`)<br><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/Duration.html#parse(java.lang.CharSequence" id="" target="_blank" >https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/Duration.html#parse(java.lang.CharSequence</a>)を参照してください</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rJxDe"  title="原文: helidon.config.watcher.enabled"><code>helidon.config.watcher.enabled</code></span></td>
<td class=""><span class="merged" id="all.4F5kII.spl1" title="原文 : To enable watching file for changes using the Java WatchService.">Java <code>WatchService</code>を使用してファイルの変更を監視するには。</span> <span class="merged" id="all.4F5kII.spl2" title="原文 :  See https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/WatchService.html"><br><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/WatchService.html" id="" target="_blank" >https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/WatchService.html</a>を参照してください</span> </td>
</tr>
</tbody>
</table>
</div>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1d3gSR.spl1" title="原文 : Encryption You can encrypt secrets using a master password and store them in a configuration file."><strong>「暗号化」</strong><br>マスター・パスワードを使用してシークレットを暗号化し、構成ファイルに格納できます。</span> <span class="merged" id="all.1d3gSR.spl2" title="原文 : The config encryption filter in MicroProfile Config is enabled by default.">MicroProfile構成の構成暗号化フィルタは、デフォルトで有効になっています。</span> <span class="merged" id="all.1d3gSR.spl3" title="原文 : For more information, see Configuration Secrets.">詳細は、<router-link to="/mp/security/03_configuration-secrets">「構成シークレット」</router-link>を参照してください。</span> </p>

</li>
</ul>
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

<ul class="ulist">
<li>
<p><span class="merged" id="all.2wzFcP.spl1" title="原文 : Meta Configuration You can configure the Config using Helidon MP Config meta configuration feature."><strong>「メタ構成」</strong><br>Helidon MP Configメタ構成機能を使用して構成を構成できます。</span> <span class="merged" id="all.2wzFcP.spl2" title="原文 : The meta-config allows configuration of config sources and other configuration options, including addition of discovered sources and converters.">meta-configを使用すると、検出されたソースやコンバータの追加など、構成ソースやその他の構成オプションを構成できます。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.32DFqK.spl1" title="原文 : This is a Helidon specific feature available since version 2.3.0.">これは、バージョン2.3.0以降で使用可能なHelidon固有の機能です。</span> <span class="merged" id="all.32DFqK.spl2" title="原文 : See Microprofile Config Sources for detailed information.">詳細は、<router-link to="/mp/config/02_MP_config_sources">「Microprofile構成ソース」</router-link>を参照してください。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.33gfHe.spl1" title="原文 : For backward compatibility, we will support usage of Helidon SE meta-configuration until version 3.0.0.">下位互換性のために、バージョン3.0.0までのHelidon SEメタ構成の使用がサポートされています。</span> <span class="merged" id="all.33gfHe.spl2" title="原文 : Using this approach causes behavior that is not compatible with MicroProfile Config specification.">このアプローチを使用すると、MicroProfile Config仕様と互換性のない動作が発生します。</span> </p>
</div>
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
