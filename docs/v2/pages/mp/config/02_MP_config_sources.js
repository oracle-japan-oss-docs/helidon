<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.E5doK" title="原文 : Microprofile Config Sources">マイクロプロファイル構成ソース</span></dt>
<dd slot="desc"><p><span class="merged" id="all.CzUPE" title="原文 : A Config Source provides configuration values from different sources such as property files and user classes that are registered by the application.">構成ソースは、アプリケーションによって登録されたプロパティ・ファイルやユーザー・クラスなど、様々なソースからの構成値を提供します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_understanding_the_ordering_of_default_config_sources"><span class="merged" id="all.ML3o6" title="原文 : Understanding the Ordering of Default Config Sources">デフォルト構成ソースの順序の理解</span></h2>
<div class="section">
<p><span class="merged" id="all.43SPgm" title="原文 : The default MicroProfile Config Sources are:">デフォルトのMicroProfile構成ソースは次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.s65Kn" title="原文 : System properties (ordinal=400)">システム・プロパティ(序数=400)</span></p>

</li>
<li>
<p><span class="merged" id="all.3se9hC" title="原文 : Environment variables (ordinal=300)">環境変数(序数=300)</span></p>

</li>
<li>
<p><span class="merged" id="all.28Dxay" title="原文 : /META-INF/microprofile-config.properties (ordinal=100)">/META-INF/microprofile-config.properties (ordinal=100)</span></p>

</li>
</ul>
<p><span class="merged" id="all.1iEfGS.spl1" title="原文 : Each Config Source has an ordinal that determines the priority of the Config Source.">各構成ソースには、構成ソースの優先度を決定する序数があります。</span> <span class="merged" id="all.1iEfGS.spl2" title="原文 : A Config Source with higher ordinal has higher priority as compared to the Config Source with lower ordinal.">序数の高い構成ソースは、序数の低い構成ソースより優先度が高くなります。</span> <span class="merged" id="all.1iEfGS.spl3" title="原文 : The values taken from the high-priority Config Source overrides the values from low-priority Config Source.">優先度の高い構成ソースから取得された値は、優先度の低い構成ソースからの値をオーバーライドします。</span> </p>

<p><span class="merged" id="all.SROXf" title="原文 : This helps to customize the configuration of Config Sources using external Config Source if an external Config Source has higher ordinal values than the built-in Config Sources of the application.">これは、外部構成ソースの順序値がアプリケーションの組込み構成ソースより大きい場合に、外部構成ソースを使用して構成ソースの構成をカスタマイズするのに役立ちます。</span></p>

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
<th><span class="merged" id="all.4JM9z7.1"  title="原文:: Description">説明</span></th>
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

<h3 id="_example"><span class="merged" id="all.2xA7W7"  title="原文:: Example">例</span></h3>
<div class="section">
<markup
lang="java"
title="環境変数およびカスタム・マップに基づいたMicroProfile構成ソースの作成"
>ConfigProviderResolver resolver = ConfigProviderResolver.instance();

org.eclipse.microprofile.config.Config Config config = resolver.getBuilder().getBuilder() <span class="conum" data-value="1" />
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
<markup>ConfigProviderResolver.instance();
Config config = ConfigProviderResolver.instance()
                .getBuilder()
                .withSources(MpConfigSources.create(helidonConfig)) <span class="conum" data-value="1" />
                .build();</markup>
</div>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.14QlEe" title="原文 : Creates a MicroProfile config instance using Helidon Config.">Helidon Configを使用してMicroProfile構成インスタンスを作成します。</span></li>
</ul>
</div>

<h2 id="_create_yaml_microprofile_config_source_programatically"><span class="merged" id="all.831Ak" title="原文 : Create Yaml MicroProfile Config Source Programatically">プログラムによるYaml MicroProfile構成ソースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.2E3cSo.spl1" title="原文 : You can create Yaml Microprofile Config Source from a path or a URL.">パスまたはURLからYaml Microprofile構成ソースを作成できます。</span> <span class="merged" id="all.2E3cSo.spl2" title="原文 : When you create a MicroProfile instance from the builder, the YamlMpConfigSource allows you to create a custom Config Source and register it with the builder.">ビルダーからMicroProfileインスタンスを作成する場合、<code>YamlMpConfigSource</code>を使用すると、カスタム構成ソースを作成してビルダーに登録できます。</span> </p>


<h3 id="_example_2"><span class="merged" id="all.2xA7W7.1"  title="原文:: Example">例</span></h3>
<div class="section">
<markup
lang="java"
title="パスからのYamlMPConfigSourceの作成"
>ConfigProviderResolver.instance().newBuilder()
        .withSources(YamlMpConfigSource.create(path))
        .build()</markup>

</div>
</div>
</doc-view>
