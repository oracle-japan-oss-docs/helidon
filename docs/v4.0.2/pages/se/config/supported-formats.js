<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.47"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.46" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.363oCL" title="原文 : Additional Config Formats and Parsers"><router-link @click.native="this.scrollFix('#_additional_config_formats_and_parsers')" to="#_additional_config_formats_and_parsers">追加の構成形式およびパーサー</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4LCOpG" title="原文 : Additional Config Source Types"><router-link @click.native="this.scrollFix('#_additional_config_source_types')" to="#_additional_config_source_types">追加構成ソース・タイプ</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.62"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3Pm5D8.spl1" title="原文 : Helidon Config provides several extension modules that support other configuration formats (parsers) and sources.">Helidon Configには、他の構成形式(パーサー)およびソースをサポートする複数の拡張モジュールが用意されています。</span> <span class="merged" id="all.3Pm5D8.spl2" title="原文 : This document describes how to include them and use them in your project.">このドキュメントでは、それらを組み込み、プロジェクトで使用する方法について説明します。</span> <span class="merged" id="all.3Pm5D8.spl3" title="原文 : In each case you need to add module dependencies to your project and, in some cases, write your application accordingly.">いずれの場合も、プロジェクトにモジュール依存関係を追加し、場合によってはそれに応じてアプリケーションを記述する必要があります。</span> </p>

</div>


<h2 id="_additional_config_formats_and_parsers"><span class="merged" id="all.3c4CBW" title="原文 : Additional Config Formats and Parsers">追加の構成形式およびパーサー</span></h2>
<div class="section">

<h3 id="_automatic_media_type_and_file_type_handling"><span class="merged" id="all.dGKrh" title="原文 : Automatic Media Type and File Type Handling">自動メディア・タイプおよびファイル・タイプ処理</span></h3>
<div class="section">
<p><span class="merged" id="all.2FJbj6" title="原文 : With each of the parsers described here, your application can either">ここで説明するパーサーごとに、アプリケーションで次のいずれかを実行できます</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1tbJM9" title="原文 : explicitly add a parser of the correct implementation to the Config.Builder, or">正しい実装のパーサーを<code>Config.Builder</code>に明示的に追加</span>

</li>
<li>
<span class="merged" id="all.PtZsW" title="原文 : rely on Java service loading and the config system’s matching of file types and media types to parsers.">Javaサービスのロード、および構成システムによるファイル・タイプとメディア・タイプのパーサーとの照合に依存します。</span>

</li>
</ol>

<p><span class="merged" id="all.2mtLV5.spl1" title="原文 : If your application creates a Config.Builder with parser services disabled (see disableParserServices then that builder will not find the Java services for the various parsers and so will be unable to match the file type or media type of sources with the corresponding parser automatically.">アプリケーションがパーサー・サービスを<em>「無効」</em>にして<code>Config.Builder</code>を作成する場合(<a href="/apidocs/io.helidon.config/io/helidon/config/Config.Builder.html#disableParserServices--" target="_blank"><code>disableParserServices</code></a>を参照)、そのビルダーは様々なパーサーのJavaサービスを検出しないため、ソースのファイル・タイプまたはメディア・タイプを対応するパーサーと自動的に照合できません。</span> <span class="merged" id="all.2mtLV5.spl2" title="原文 : So if you want to use automatic type matching with a given builder, do not invoke Config.Builder.disableParserServices().">そのため、特定のビルダーで自動型照合を使用する場合は、<code>Config.Builder.disableParserServices()</code>を起動しないでください。</span> </p>

</div>


<h3 id="Config-ModuleYaml"><span class="merged" id="all.42WB1c.1"  title="原文:: YAML">YAML</span></h3>
<div class="section">

<h4 id="_maven_coordinates"><span class="merged" id="all.317oeS.37"  title="原文:: Maven Coordinates">Maven連携</span></h4>
<div class="section">
<p><span class="merged" id="all.2qm8Zd" title="原文 : Add the following dependency in your project:">プロジェクトに次の依存関係を追加します:</span></p>

<markup
lang="xml"
title="Config YAML Dependency in <code>pom.xml</code>"
>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-config-yaml&lt;/artifactId&gt;
    &lt;/dependency&gt;</markup>

<markup
lang="java"
title="Config YAML Dependency in <code>module-info.java</code>"
>module myModule {
    requires io.helidon.config.yaml;
}</markup>

</div>


<h4 id="_using_the_yaml_parser"><span class="merged" id="all.1UPnaV" title="原文 : Using the YAML Parser">YAMLパーサーの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.3gvm62" title="原文 : The YAML parser handles the following media type:">YAMLパーサーは、次のメディア・タイプを処理します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4fJhlo" title="原文 : application/x-yaml - YAML format (file type .yaml)"><code>application/x-yaml</code> - YAML形式(ファイル・タイプ<code>.yaml</code>)</span></p>

</li>
</ul>

<markup
lang="java"
title="Automatic selection"
>Config config = Config.create(classpath("application.yaml")); <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1bQWrj" title="原文 : The config system automatically maps the file type .yaml to the media type application/x-yaml which the Helidon YAML parser matches.">構成システムは、Helidon YAMLパーサーが一致するメディア・タイプ<code>application/x-yaml</code>にファイル・タイプ<code>.yaml</code>を自動的にマップします。</span></li>
</ul>

<markup
lang="java"
title="YAML parser specified - no file type on source"
>Config config = Config.create(classpath("my-config")                                    <span class="conum" data-value="1" />
                                    .parser(YamlConfigParser.create())); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.12PgX0" title="原文 : The media type of the source my-config is unknown, so the config system cannot choose a parser automatically.">ソース<code>my-config</code>のメディア・タイプが不明であるため、構成システムはパーサーを自動的に選択できません。</span></li>
<li data-value="2"><span class="merged" id="all.CSrC2.spl1" title="原文 : The config system will parse the resource my-config on the runtime classpath using the YAML parser instance created by the YamlConfigParser.">構成システムは、<a href="/apidocs/io.helidon.config/io/helidon/config/yaml/YamlConfigParser.html" target="_blank"><code>YamlConfigParser</code></a>によって作成されたYAMLパーサー・インスタンスを使用して、ランタイム・クラスパスのリソース<code>my-config</code>を解析します。</span> <span class="merged" id="all.CSrC2.spl2" title="原文 : The create() method creates a config parser with default behavior."><code>create()</code>メソッドは、デフォルトの動作で構成パーサーを作成します。</span> </li>
</ul>

<markup
lang="java"
title="Media type specified"
>Config config = Config.create(classpath("my-config")                     <span class="conum" data-value="1" />
                                    .mediaType(MediaTypes.APPLICATION_X_YAML)); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.12PgX0.1" title="原文 : The media type of the source my-config is unknown, so the config system cannot choose a parser automatically.">ソース<code>my-config</code>のメディア・タイプが不明であるため、構成システムはパーサーを自動的に選択できません。</span></li>
<li data-value="2"><span class="merged" id="all.36RRcF" title="原文 : Specifying the media type for the config source allows the config system to use its matching algorithm with the available parsers to choose a parser for that type.">構成ソースのメディア・タイプを指定すると、構成システムは、使用可能なパーサーで一致するアルゴリズムを使用して、そのタイプのパーサーを選択できます。</span></li>
</ul>

<markup
lang="java"
title="YAML parser specified because parser services disabled"
>Config config = Config.builder(classpath("application.yaml"))
        .disableParserServices()                                  <span class="conum" data-value="1" />
        .addParser(YamlConfigParser.create())        <span class="conum" data-value="2" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3NSXb0" title="原文 : Disables automatic parser lookup and registration.">自動パーサー検索および登録を無効にします。</span></li>
<li data-value="2"><span class="merged" id="all.4f9mKt" title="原文 : Explicit registration of the YAML parser is therefore required.">したがって、YAMLパーサーを明示的に登録する必要があります。</span></li>
</ul>

</div>

</div>


<h3 id="Config-ModuleHocon"><span class="merged" id="all.23lwKM" title="原文 : HOCON/JSON">HOCON/JSON</span></h3>
<div class="section">
<p><span class="merged" id="all.2xXsXj" title="原文 : The Helidon HOCON config module handles sources in the HOCON and JSON formats.">Helidon HOCON構成モジュールは、HOCONおよびJSON形式のソースを処理します。</span></p>


<h4 id="_maven_coordinates_2"><span class="merged" id="all.317oeS.38"  title="原文:: Maven Coordinates">Maven連携</span></h4>
<div class="section">
<p><span class="merged" id="all.2qm8Zd.1" title="原文 : Add the following dependency in your project:">プロジェクトに次の依存関係を追加します:</span></p>

<markup
lang="xml"
title="Config HOCON Dependency in <code>pom.xml</code>"
>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-config-hocon&lt;/artifactId&gt;
    &lt;/dependency&gt;</markup>

<markup
lang="java"
title="Config HOCON Dependency in <code>module-info.java</code>"
>module myModule {
    requires io.helidon.config.hocon;
}</markup>

</div>


<h4 id="_using_the_hoconjson_parser"><span class="merged" id="all.1Odo6k" title="原文 : Using the HOCON/JSON Parser">HOCON/JSONパーサーの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.48PZ9r" title="原文 : The parser handles the following media types:">パーサーは、次のメディア・タイプを処理します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4F0J6L" title="原文 : application/hocon - HOCON format (file type .conf)"><code>application/hocon</code> - HOCON形式(ファイル・タイプ<code>.conf</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.4Ja92Q" title="原文 : application/json - JSON format (file type .json)"><code>application/json</code> - JSON形式(ファイル・タイプ<code>.json</code>)</span></p>

</li>
</ul>

<markup
lang="java"
title="Automatic selection"
>Config config = Config.create(classpath("application.conf")); <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tnn6k" title="原文 : The config system automatically maps the file type .conf to the media type `application/hocon which the Helidon HOCON parser matches.">構成システムは、Helidon HOCONパーサーが一致するメディア・タイプの`application/hoconにファイル・タイプ<code>.conf</code>を自動的にマップします。</span></li>
</ul>

<p><span class="merged" id="all.3Q0ps3" title="原文 : The same module and parser supports file type .json and the media type application/json.">同じモジュールおよびパーサーは、ファイル・タイプ<code>.json</code>およびメディア・タイプ<code>application/json</code>をサポートしています。</span></p>

<markup
lang="java"
title="HOCON parser specified - no file type on source"
>Config config = Config.create(classpath("my-config")                                     <span class="conum" data-value="1" />
                                    .parser(HoconConfigParser.create()));                <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.gArTT" title="原文 : the media type of the source my-config is unknown, so the config system cannot choose a parser automatically.">ソース<code>my-config</code>のメディア・タイプが不明であるため、構成システムはパーサーを自動的に選択できません。</span></li>
<li data-value="2"><span class="merged" id="all.oBVin.spl1" title="原文 : The config system will parse the resource my-config using the HOCON parser created by the HoconConfigParser.">構成システムは、<a href="/apidocs/io.helidon.config.hocon/io/helidon/config/hocon/HoconConfigParser.html" target="_blank">HoconConfigParser</a>によって作成されたHOCONパーサーを使用してリソース<code>my-config</code>を解析します。</span> <span class="merged" id="all.oBVin.spl2" title="原文 : The create() method creates a config parser with default behavior."><code>create()</code>メソッドは、デフォルトの動作で構成パーサーを作成します。</span> </li>
</ul>

<markup
lang="java"
title="Media type specified"
>Config config = Config.create(classpath("my-config")                    <span class="conum" data-value="1" />
                                    .mediaType(MediaTypes.APPLICATION_HOCON)); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.12PgX0.2" title="原文 : The media type of the source my-config is unknown, so the config system cannot choose a parser automatically.">ソース<code>my-config</code>のメディア・タイプが不明であるため、構成システムはパーサーを自動的に選択できません。</span></li>
<li data-value="2"><span class="merged" id="all.36RRcF.1" title="原文 : Specifying the media type for the config source allows the config system to use its matching algorithm with the available parsers to choose a parser for that type.">構成ソースのメディア・タイプを指定すると、構成システムは、使用可能なパーサーで一致するアルゴリズムを使用して、そのタイプのパーサーを選択できます。</span></li>
</ul>

<markup
lang="java"
title="HOCON parser specified because parser services disabled"
>Config config = Config.builder(classpath("application.conf"))
        .disableParserServices()                                  <span class="conum" data-value="1" />
        .addParser(HoconConfigParser.create())                    <span class="conum" data-value="2" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3NSXb0.1" title="原文 : Disables automatic parser lookup and registration.">自動パーサー検索および登録を無効にします。</span></li>
<li data-value="2"><span class="merged" id="all.1xVFj7" title="原文 : Explicit registration of the HOCON parser is therefore required.">したがって、HOCONパーサーを明示的に登録する必要があります。</span></li>
</ul>

<markup
lang="java"
title="Customized HOCON parser"
>Config config = Config.builder(classpath("application.conf"))
        .disableParserServices()
        .addParser(HoconConfigParser.builder()                    <span class="conum" data-value="1" />
                           .resolvingEnabled(false)               <span class="conum" data-value="2" />
                           .build())                              <span class="conum" data-value="3" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.cR2IG" title="原文 : Creates new instance of the parser builder.">パーサー・ビルダーの新しいインスタンスを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.28awAD.spl1" title="原文 : Disables resolution of substitutions.">代替の解決を使用不可にします。</span> <span class="merged" id="all.28awAD.spl2" title="原文 : (See the HOCON documentation.)">(<a href="https://github.com/lightbend/config/blob/master/HOCON.md#substitutions" target="_blank">「HOCONドキュメント」</a>を参照。)</span> </li>
<li data-value="3"><span class="merged" id="all.2V0GAs" title="原文 : Builds a new instance of the HOCON config parser.">HOCON構成パーサーの新しいインスタンスをビルドします。</span></li>
</ul>

<p><span class="merged" id="all.2q72tu" title="原文 : You can also specify ConfigResolveOptions using the HoconConfigParser.builder().resolveOptions method."><code>HoconConfigParser.builder().resolveOptions</code>メソッドを使用して<a href="https://github.com/lightbend/config/blob/master/config/src/main/java/com/typesafe/config/ConfigResolveOptions.java" target="_blank"><code>ConfigResolveOptions</code></a>を指定することもできます。</span></p>

</div>

</div>

</div>


<h2 id="_additional_config_source_types"><span class="merged" id="all.4McIAE" title="原文 : Additional Config Source Types">追加構成ソース・タイプ</span></h2>
<div class="section">

<h3 id="Config-ModuleEtcd"><span class="merged" id="all.403XBa" title="原文 : Etcd">Etcd</span></h3>
<div class="section">
<p><span class="merged" id="all.A0156" title="原文 : The Helidon Etcd config module supports reading configuration from a specified Etcd key.">Helidon Etcd構成モジュールは、指定されたEtcdキーからの構成の読取りをサポートします。</span></p>


<h4 id="_maven_coordinates_3"><span class="merged" id="all.317oeS.39"  title="原文:: Maven Coordinates">Maven連携</span></h4>
<div class="section">
<p><span class="merged" id="all.3kvreo" title="原文 : Add the following dependency to your project:">次の依存関係をプロジェクトに追加します:</span></p>

<markup
lang="xml"
title="Config Etcd Dependency in <code>pom.xml</code>"
>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-config-etcd&lt;/artifactId&gt;
    &lt;/dependency&gt;</markup>

<markup
lang="java"
title="Config Etcd Dependency in <code>module-info.java</code>"
>module myModule {
    requires io.helidon.config.etcd;
}</markup>

</div>


<h4 id="_using_the_etcd_config_source"><span class="merged" id="all.1gHZ52" title="原文 : Using the Etcd Config Source">Etcd構成ソースの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.47GhGP" title="原文 : To read configuration from an Etcd source, your application uses the EtcdConfigSourceBuilder.">Etcdソースから構成を読み取るには、アプリケーションで<a href="/apidocs/io.helidon.config.etcd/io/helidon/config/etcd/EtcdConfigSourceBuilder.html" target="_blank"><code>EtcdConfigSourceBuilder</code></a>を使用します。</span></p>

<markup
lang="java"
title="Use Etcd config source"
>Config config = Config.create(
        EtcdConfigSource                             <span class="conum" data-value="1" />
                .create(URI.create("http://my-etcd:2379"),  <span class="conum" data-value="2" />
                      "/config.yaml",                       <span class="conum" data-value="3" />
                      EtcdConfigSourceBuilder.EtcdApi.v3)); <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2XkbFF" title="原文 : Use the factory method EtcdConfigSource.create to create the EtcdConfigSource.">ファクトリ・メソッド<code>EtcdConfigSource.create</code>を使用して、<code>EtcdConfigSource</code>を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.2PLoON" title="原文 : Specify the Etcd endpoint address.">Etcdエンドポイント・アドレスを指定します。</span></li>
<li data-value="3"><span class="merged" id="all.1fmYb5" title="原文 : Specify the Etcd key of the configuration document.">構成ドキュメントのEtcdキーを指定します。</span></li>
<li data-value="4"><span class="merged" id="all.1QNuTw" title="原文 : Version of the Etcd API to use; v3 is supported. v2 is deprecated.">使用するEtcd APIのバージョン。<code>v3</code>がサポートされています。<code>v2</code>は非推奨です。</span></li>
</ul>

<p><span class="merged" id="all.3x1ljX" title="原文 : The config system will use the YAML parser automatically in this example because the file type of the key is .yaml.">この例では、キーのファイル・タイプが<code>.yaml</code>であるため、構成システムは<router-link @click.native="this.scrollFix('#Config-ModuleYaml')" to="#Config-ModuleYaml">「YAMLパーサー」</router-link>を自動的に使用します。</span></p>

<p><span class="merged" id="all.45pfsm" title="原文 : The EtcdConfigSourceBuilder class extends AbstractConfigSourceBuilder and so supports the usual settings on config sources."><code>EtcdConfigSourceBuilder</code>クラスは<a href="/apidocs/io.helidon.config/io/helidon/config/spi/AbstractConfigSourceBuilder.html" target="_blank"><code>AbstractConfigSourceBuilder</code></a>を拡張するため、構成ソースの通常の設定をサポートしています。</span></p>

</div>


<h4 id="_monitoring_for_source_changes"><span class="merged" id="all.2zO0b4" title="原文 : Monitoring for Source Changes">ソースの変更のモニタリング</span></h4>
<div class="section">
<p><span class="merged" id="all.3ioe7O" title="原文 : The Etcd support includes a change watcher strategy designed for an etcd config source.">Etcdサポートには、etcd構成ソース用に設計された変更ウォッチャ戦略が含まれています。</span></p>

<markup
lang="java"
title="Use Etcd config source"
>Config config = Config.create(
        EtcdConfigSource
                 .builder()
                 .uri(URI.create("http://my-etcd:2379"))
                 .key("/config.yaml")
                 .api(EtcdConfigSourceBuilder.EtcdApi.v3)
                 .changeWatcher(EtcdWatcher.create()));                    <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4Mvmfp" title="原文 : Use the etcd-specific change watcher strategy.">etcd固有の変更ウォッチャ戦略を使用します。</span></li>
</ul>

</div>


<h4 id="_loading_meta_configuration_via_etcd"><span class="merged" id="all.K2XSC" title="原文 : Loading Meta-configuration via Etcd">Etcdを介したメタ構成のロード</span></h4>
<div class="section">
<p><span class="merged" id="all.4Gjc9a" title="原文 : To read meta-configuration from an Etcd source set the following required properties for the source:">Etcdソースからメタ構成を読み取るには、ソースに次の必須プロパティを設定します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2Gjw16" title="原文 : type to etcd, or class to io.helidon.config.etcd.EtcdConfigSourceBuilder"><code>type</code>から<code>etcd</code>、または<code>class</code>から<code>io.helidon.config.etcd.EtcdConfigSourceBuilder</code></span></p>

</li>
<li>
<p><span class="merged" id="all.42P6Ee" title="原文 : uri (type URI) - Etcd endpoint URI."><code>uri</code> (type <code>URI</code> ) - EtcdエンドポイントURI。</span></p>

</li>
<li>
<p><span class="merged" id="all.obK4S" title="原文 : key (type String) - Etcd key that is associated with the configuration."><code>key</code> (type <code>String</code> ) - 構成に関連付けられているEtcdキー。</span></p>

</li>
<li>
<p><span class="merged" id="all.oxiLe" title="原文 : api (type EtcdConfigSourceBuilder.EtcdApi, i.e. v2 or v3) - Etcd API version. v2 is deprecated."><code>api</code> (<code>v2</code>または<code>v3</code>などのタイプの<code>EtcdConfigSourceBuilder.EtcdApi</code>) - Etcd APIのバージョン。<code>v2</code>は非推奨です。</span></p>

</li>
</ul>

<p><span class="merged" id="all.1mMmuC" title="原文 : Other optional properties are inherited from AbstractConfigSourceBuilder. (see javadoc)">その他のオプションの<code>properties</code>は、<code>AbstractConfigSourceBuilder</code>から継承されます(<a href="/apidocs/io.helidon.config/io/helidon/config/AbstractConfigSourceBuilder.html#init-io.helidon.config.Config-" target="_blank">javadoc</a>を参照)</span></p>

<markup
lang="java"
title="Load Config from meta-configuration"
>Config config = Config.loadSourcesFrom(classpath("config-meta-etcd.yaml"));</markup>

<markup
lang="YAML"
title="Meta-config <code>config-meta-etcd.yaml</code> for the etcd source"
>sources:
    - type: "etcd"                                                 <span class="conum" data-value="1" />
      properties:
          uri: "http://my-etcd:2379"                               <span class="conum" data-value="2" />
          key: "/config.yaml"                                      <span class="conum" data-value="2" />
          api: "v3"                                                <span class="conum" data-value="2" />
          change-watcher:
              type: "etcd"                                         <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1d27Q1" title="原文 : etcd config source type"><code>etcd</code>構成ソース・タイプ</span></li>
<li data-value="2"><span class="merged" id="all.1V7nLn" title="原文 : Etcd source-specific (mandatory) properties: uri, key and api.">Etcdソース固有(必須)の<code>properties</code>: <code>uri</code>、<code>key</code>および<code>api</code>。</span></li>
<li data-value="3"><span class="merged" id="all.1uy8ho" title="原文 : Watcher strategy EtcdWatcher is automatically initialized by specified mandatory properties.">ウォッチャ戦略<code>EtcdWatcher</code>は、指定された必須の<code>properties</code>によって自動的に初期化されます。</span></li>
</ul>

</div>

</div>


<h3 id="Config-ModuleGit"><span class="merged" id="all.1UbBa0"  title="原文:: git">git</span></h3>
<div class="section">
<p><span class="merged" id="all.23DgxX" title="原文 : The Helidon git config module supports reading configuration from a git repository.">Helidon git構成モジュールは、gitリポジトリからの構成の読取りをサポートします。</span></p>


<h4 id="_maven_coordinates_4"><span class="merged" id="all.317oeS.40"  title="原文:: Maven Coordinates">Maven連携</span></h4>
<div class="section">
<p><span class="merged" id="all.3kvreo.1" title="原文 : Add the following dependency to your project:">次の依存関係をプロジェクトに追加します:</span></p>

<markup
lang="xml"
title="Config git Dependency in <code>pom.xml</code>"
>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-config-git&lt;/artifactId&gt;
    &lt;/dependency&gt;</markup>

<markup
lang="java"
title="Config git Dependency in <code>module-info.java</code>"
>module myModule {
    requires io.helidon.config.git;
}</markup>

</div>


<h4 id="_using_the_git_config_source"><span class="merged" id="all.3bltYp" title="原文 : Using the git Config Source">git構成ソースの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.yOEzs" title="原文 : To read configuration from a git source, your application uses the GitConfigSourceBuilder.">gitソースから構成を読み取るには、アプリケーションで<a href="/apidocs/io.helidon.config.git/io/helidon/config/git/GitConfigSourceBuilder.html" target="_blank"><code>GitConfigSourceBuilder</code></a>を使用します。</span></p>

<markup
lang="java"
title="Use git config source"
>Config config = Config.create(
        GitConfigSource
                .builder()                                                          <span class="conum" data-value="1" />
                .uri(URI.create("https://github.com/okosatka/test-config.git"))     <span class="conum" data-value="2" />
                .directory(Paths.get("/config"))                                    <span class="conum" data-value="3" />
                .branch("dev"));                                                    <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1CPVDu" title="原文 : Use the factory method GitConfigSource.builder to initialize the builder.">ファクトリ・メソッド<code>GitConfigSource.builder</code>を使用してビルダーを初期化します。</span></li>
<li data-value="2"><span class="merged" id="all.1ecmq8" title="原文 : Specify the git repository URI.">gitリポジトリURIを指定します。</span></li>
<li data-value="3"><span class="merged" id="all.43DWnz" title="原文 : Specify a directory where the git repository is already cloned or it will be cloned.">gitリポジトリがすでにクローニングされているか、クローニングされるディレクトリを指定します。</span></li>
<li data-value="4"><span class="merged" id="all.4LVt2L" title="原文 : Specify the git branch.">gitブランチを指定します。</span></li>
</ul>

<p><span class="merged" id="all.3uuOqv.spl1" title="原文 : Note that the config system will use the HOCON parser in this example because the file type is .conf.">ファイル・タイプが<code>.conf</code>であるため、構成システムはこの例の<router-link @click.native="this.scrollFix('#Config-ModuleHocon')" to="#Config-ModuleHocon">「HOCONパーサー」</router-link>を使用します。</span> <span class="merged" id="all.3uuOqv.spl2" title="原文 : Recall that for this to work the HOCON config module must be on module-path or classpath.">これが機能するには、HOCON構成モジュールがモジュール・パスまたはクラスパスに存在する必要があることに注意してください。</span> </p>

<p><span class="merged" id="all.4FlcsZ" title="原文 : The GitConfigSourceBuilder supports the usual source builder properties because it extends AbstractConfigSourceBuilder."><code>GitConfigSourceBuilder</code>は、<a href="/apidocs/io.helidon.config/io/helidon/config/AbstractConfigSourceBuilder.html" target="_blank"><code>AbstractConfigSourceBuilder</code></a>を拡張するため、通常のソース・ビルダー・プロパティをサポートしています。</span></p>

</div>


<h4 id="_monitoring_for_source_changes_2"><span class="merged" id="all.2zO0b4.1" title="原文 : Monitoring for Source Changes">ソースの変更のモニタリング</span></h4>
<div class="section">
<p><span class="merged" id="all.3Dv4H7" title="原文 : Your application can monitor changes to a configuration loaded from a git source associating the regular built-in polling strategy with the source.">アプリケーションでは、<code>regular</code>組込みポーリング戦略をソースに関連付ける、gitソースからロードされた構成に対する変更を監視できます。</span></p>

<markup
lang="java"
title="Use of git config source with polling strategy"
>Config config = Config.create(
        GitConfigSourceBuilder
                .create("application.conf")
                .uri(URI.create("https://github.com/okosatka/test-config.git"))
                .pollingStrategy(PollingStrategies.regular(Duration.ofMinutes(5)))); <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1IPvPr" title="原文 : Use PollingStrategies.regular(Duration duration) to monitor for config changes."><code>PollingStrategies.regular(Duration duration)</code>を使用して、構成の変更を監視します。</span></li>
</ul>

<p><span class="merged" id="all.3J2MAp.spl1" title="原文 : You can also implement your own polling strategy by implementing PollingStrategy."><a href="/apidocs/io.helidon.config/io/helidon/config/spi/PollingStrategy.html" target="_blank"><code>PollingStrategy</code></a>を実装して、独自のポーリング戦略を実装することもできます。</span> <span class="merged" id="all.3J2MAp.spl2" title="原文 : See the mutability support and polling strategy discussions."><router-link to="/se/config/mutability-support">「可変性のサポート」</router-link>および<router-link :to="{path: '/se/config/extensions', hash: '#Config-SPI-PollingStrategy'}">「ポーリング計画」</router-link>のディスカッションを参照してください。</span> </p>

</div>


<h4 id="_loading_meta_configuration_via_git"><span class="merged" id="all.4Nyi0C" title="原文 : Loading Meta-configuration via git">gitを介したメタ構成のロード</span></h4>
<div class="section">
<p><span class="merged" id="all.2BnDvr.spl1" title="原文 : The config system can load information about config sources from meta-configuration rather than requiring your application to construct the builder.">構成システムは、アプリケーションでビルダーをビルドする必要なく、メタ構成から構成ソースに関する情報をロードできます。</span> <span class="merged" id="all.2BnDvr.spl2" title="原文 : To read meta-configuration from a git config source set the following properties for the source:">git構成ソースからメタ構成を読み取るには、ソースに対して次のプロパティを設定します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3WfQSZ" title="原文 : type to git or class to io.helidon.config.git.GitConfigSourceBuilder"><code>type</code>から<code>git</code>、または<code>class</code>から<code>io.helidon.config.git.GitConfigSourceBuilder</code></span></p>

</li>
<li>
<p><span class="merged" id="all.E4P1Z" title="原文 : path (type String) - Relative path to the configuration file in repository."><code>path</code> (type <code>String</code> ) - リポジトリ内の構成ファイルへの相対パス。</span></p>

</li>
<li>
<p><span class="merged" id="all.3Ycxom" title="原文 : uri (type URI) - URI to the git repository."><code>uri</code> (type <code>URI</code> ) - gitリポジトリへのURI。</span></p>

</li>
<li>
<p><span class="merged" id="all.2NyzTf" title="原文 : directory (type Path) - Directory with a cloned repository, by default a temporary directory."><code>directory</code> (type <code>Path</code> ) - クローニングされたリポジトリを含むディレクトリ。デフォルトでは一時ディレクトリです。</span></p>

</li>
<li>
<p><span class="merged" id="all.4bUsXa" title="原文 : branch (type String) - git branch (default is master)."><code>branch</code> (type <code>String</code> ) - gitブランチ(デフォルトは<code>master</code>)。</span></p>

</li>
</ul>

<p><span class="merged" id="all.PYFhk.spl1" title="原文 : The meta-configuration must set the path and one of uri or directory.">メタ構成では、<code>path</code>および<code>uri</code>または<code>directory</code>のいずれかを設定する必要があります。</span> <span class="merged" id="all.PYFhk.spl2" title="原文 : Other optional properties are inherited from AbstractParsableConfigSource.Builder (see javadoc)">その他のオプションの<code>properties</code>は、<code>AbstractParsableConfigSource.Builder</code>から継承されます(<a href="/apidocs/io.helidon.config/io/helidon/config/spi/AbstractParsableConfigSource.Builder.html#init-io.helidon.config.Config-" target="_blank">javadoc</a>を参照)</span> </p>

<markup
lang="java"
title="Load Config from meta-configuration"
>Config config = Config.loadSourcesFrom(classpath("config-meta-git.yaml"));</markup>

<markup
lang="YAML"
title="Meta-config <code>config-meta-git.yaml</code> for the git source"
>sources:
    - type: "git"                                            <span class="conum" data-value="1" />
      properties:
          path: "application.conf"                           <span class="conum" data-value="2" />
          uri: "https://github.com/okosatka/test-config.git" <span class="conum" data-value="2" />
          directory: "/config"                               <span class="conum" data-value="2" />
          branch: "dev"                                      <span class="conum" data-value="2" />
          polling-strategy:
              type: "regular"                                <span class="conum" data-value="3" />
              properties:
                  interval: "PT5M"                           <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2vqCXt" title="原文 : git config source type"><code>git</code>構成ソース・タイプ</span></li>
<li data-value="2"><span class="merged" id="all.4akHcQ" title="原文 : git source-specific properties: path, uri, directory and branch.">gitソース固有のプロパティ: <code>path</code>, <code>uri</code>, <code>directory</code>および<code>branch</code>。</span></li>
<li data-value="3"><span class="merged" id="all.3LiJXj" title="原文 : Polling strategy regular with an interval, in Duration format, of 5 minutes in this example."><code>Duration</code>形式の間隔(この例では5分)を使用したポーリング戦略<code>regular</code>。</span></li>
</ul>

</div>

</div>

</div>

</doc-view>
