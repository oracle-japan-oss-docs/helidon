<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.41"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.40" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2k81lc" title="原文 : Profile Options"><router-link @click.native="this.scrollFix('#_profile_options')" to="#_profile_options">プロファイル・オプション</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4828Cq" title="原文 : Profile Config Source"><router-link @click.native="this.scrollFix('#Profile-Config-Source')" to="#Profile-Config-Source">プロファイル構成ソース</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.WIk39" title="原文 : Profile Files"><router-link @click.native="this.scrollFix('#Profile-File')" to="#Profile-File">プロファイル・ファイル</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.56"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2YQ5wm" title="原文 : Configuration profiles provide a capability to prepare structure of configuration for each environment in advance, and then simply switch between these structures using a system property or an environment variable.">構成プロファイルは、事前に各環境の構成構造を準備し、システム・プロパティまたは環境変数を使用してこれらの構造を切り替える機能を提供します。</span></p>

</div>


<h2 id="_profile_options"><span class="merged" id="all.uDZZ7"  title="原文:: Profile Options">プロファイル・オプション</span></h2>
<div class="section">
<p><span class="merged" id="all.R96nM" title="原文 : To choose a configuration profile to use at runtime, you can use:">実行時に使用する構成プロファイルを選択するには、次を使用できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2nNkHT" title="原文 : A system property config.profile">システム・プロパティ<code>config.profile</code></span>

</li>
<li>
<span class="merged" id="all.1CqvBt" title="原文 : An environment variable HELIDON_CONFIG_PROFILE">環境変数<code>HELIDON_CONFIG_PROFILE</code></span>

</li>
</ol>

<p><span class="merged" id="all.1W3V6R" title="原文 : There are two ways to define a profile configuration:">プロファイル構成を定義するには、次の2つの方法があります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2p3Lz6" title="原文 : Use a config source with a profile specific name"><router-link @click.native="this.scrollFix('#Profile-Config-Source')" to="#Profile-Config-Source">「プロファイル固有名」</router-link>で構成ソースの使用</span>

</li>
<li>
<span class="merged" id="all.3zR9E" title="原文 : Use a profile file defining all configuration sources">すべての構成ソースを定義する<router-link @click.native="this.scrollFix('#Profile-File')" to="#Profile-File">「プロファイル・ファイル」</router-link>を使用</span>

</li>
</ol>

<p><span class="merged" id="all.3k6HXT.spl1" title="原文 : Configuration profiles can only be used when config is created using the Config.create() method without parameters.">構成プロファイルは、パラメータなしで<code>Config.create()</code>メソッドを使用して構成を作成する場合にのみ使用できます。</span> <span class="merged" id="all.3k6HXT.spl2" title="原文 : If you explicitly configure sources, profiles are ignored.">ソースを明示的に構成した場合、プロファイルは無視されます。</span> </p>

</div>


<h2 id="Profile-Config-Source"><span class="merged" id="all.2ffT0X" title="原文 : Profile Config Sources">プロファイル構成ソース</span></h2>
<div class="section">
<p><span class="merged" id="all.4YKIT" title="原文 : If a profile is specified, config will load the profile-specific default configuration source before the &quot;main&quot; source.">プロファイルが指定されている場合、構成によってプロファイル固有のデフォルト構成ソースが「メイン」ソースの前にロードされます。</span></p>

<p><span class="merged" id="all.3FIpz2" title="原文 : Let’s consider the selected profile is dev, and we have yaml configuration support on classpath; config will look for the following sources (in this order):">選択したプロファイルは<code>dev</code>であり、クラスパスで<code>yaml</code>構成サポートがあるとします。構成では次のソースが検索されます(この順序):</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.Xxetr" title="原文 : application-dev.yaml on file system">ファイル・システム上の<code>application-dev.yaml</code></span>

</li>
<li>
<span class="merged" id="all.2my4CI" title="原文 : application-dev.properties on file system">ファイル・システム上の<code>application-dev.properties</code></span>

</li>
<li>
<span class="merged" id="all.1aCePy" title="原文 : application-dev.yaml on classpath">クラスパスの<code>application-dev.yaml</code></span>

</li>
<li>
<span class="merged" id="all.36qdpg" title="原文 : application-dev.properties on classpath">クラスパスの<code>application-dev.properties</code></span>

</li>
<li>
<span class="merged" id="all.pQsvs" title="原文 : application.yaml on file system">ファイル・システム上の<code>application.yaml</code></span>

</li>
<li>
<span class="merged" id="all.2JG785" title="原文 : application.properties on file system">ファイル・システム上の<code>application.properties</code></span>

</li>
<li>
<span class="merged" id="all.3B3H2u" title="原文 : application.yaml on classpath">クラスパスの<code>application.yaml</code></span>

</li>
<li>
<span class="merged" id="all.4RqsOV" title="原文 : application.properties on classpath">クラスパスの<code>application.properties</code></span>

</li>
</ol>

</div>


<h2 id="Profile-File"><span class="merged" id="all.2DZPIs" title="原文 : Profile Files">プロファイル・ファイル</span></h2>
<div class="section">
<p><span class="merged" id="all.2VkK1y" title="原文 : If a profile is specified, config will look for a profile-specific &quot;meta configuration&quot;.">プロファイルが指定されている場合、構成ではプロファイル固有のメタ構成が検索されます。</span></p>

<p><span class="merged" id="all.2rj6oS" title="原文 : Let’s consider the selected profile is dev, and we have yaml configuration support on classpath; config will look for the following profiles (in this order):">選択したプロファイルは<code>dev</code>であり、クラスパスで<code>yaml</code>構成サポートがあるとします。構成では次のプロファイルが(この順序で)検索されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.vy23I" title="原文 : config-profile-dev.yaml on file system">ファイル・システム上の<code>config-profile-dev.yaml</code></span>

</li>
<li>
<span class="merged" id="all.1IvqvQ" title="原文 : config-profile-dev.properties on file system">ファイル・システム上の<code>config-profile-dev.properties</code></span>

</li>
<li>
<span class="merged" id="all.2YcfCS" title="原文 : config-profile-dev.yaml on classpath">クラスパスの<code>config-profile-dev.yaml</code></span>

</li>
<li>
<span class="merged" id="all.46HOJp" title="原文 : config-profile-dev.properties on classpath">クラスパスの<code>config-profile-dev.properties</code></span>

</li>
</ol>

<p><span class="merged" id="all.KQLn.spl1" title="原文 : If any of these files is discovered, it would be used to set up the configuration.">これらのファイルが見つかった場合は、構成の設定に使用されます。</span> <span class="merged" id="all.KQLn.spl2" title="原文 : In case none is found, the config falls back to profile specific config sources.">見つからない場合、構成は<router-link @click.native="this.scrollFix('#Profile-Config-Source')" to="#Profile-Config-Source">「プロファイル固有の構成ソース」</router-link>に戻ります。</span> </p>

<p><span class="merged" id="all.160zS2" title="原文 : The structure of the file is described below in profile file format.">ファイルの構造については、後述する<router-link @click.native="this.scrollFix('#Config-Profile-Format')" to="#Config-Profile-Format">「プロファイル・ファイル形式」</router-link>を参照してください。</span></p>

<p><span class="merged" id="all.EAwZB.spl1" title="原文 : In case you need to customize the location of the profile file, you can use the system property io.helidon.config.meta-config.">プロファイル・ファイルのロケーションをカスタマイズする必要がある場合は、システム・プロパティ<code>io.helidon.config.meta-config</code>を使用できます。</span> <span class="merged" id="all.EAwZB.spl2" title="原文 : For example if it is configured to config/profile.yaml, config looks for file config/profile-dev.yaml when dev profile is configured.">たとえば、<code>config/profile.yaml</code>に構成されている場合、configは<code>dev</code>プロファイルが構成されているときにファイル<code>config/profile-dev.yaml</code>を検索します。</span> </p>


<h3 id="Config-Profile-Format"><span class="merged" id="all.2ngwgO" title="原文 : Profile File Format">プロファイル・ファイル・フォーマット</span></h3>
<div class="section">
<p><span class="merged" id="all.3MZX6G.spl1" title="原文 : Configuration profile provides similar options to the configuration builder.">構成プロファイルには、構成ビルダーと同様のオプションがあります。</span> <span class="merged" id="all.3MZX6G.spl2" title="原文 : The profile file must contain at least the list of sources from which configuration can be loaded.">プロファイル・ファイルには、少なくとも構成をロードできるソースのリストが含まれている必要があります。</span> </p>

<p><span class="merged" id="all.20FMUz.spl1" title="原文 : The root sources property contains an array (ordered) of objects defining each config source to be used.">ルート<code>sources</code>プロパティには、使用する各構成ソースを定義するオブジェクトの配列(順序付き)が含まれます。</span> <span class="merged" id="all.20FMUz.spl2" title="原文 : Each element of the array must contain at least the type property, determining the config source type (such as system-properties, file).">配列の各要素には、構成ソース・タイプ(<code>system-properties</code>、<code>file</code>など)を決定する<code>type</code>プロパティが少なくとも含まれている必要があります。</span> <span class="merged" id="all.20FMUz.spl3" title="原文 : It may also contain a properties property with additional configuration of the config source.">構成ソースの追加構成を含む<code>properties</code>プロパティが含まれている場合もあります。</span> </p>

<p><span class="merged" id="all.1o0emw" title="原文 : An example development profile using &quot;inlined&quot; configuration:">「インライン」構成を使用した開発プロファイルの例:</span></p>

<markup
lang="yaml"
title="Config profile <code>config-profile-dev.yaml</code>"
>sources:
  - type: "inlined"
    properties:
      app.greeting: "Hello World"</markup>

<p><span class="merged" id="all.21Gdmb" title="原文 : An example of a profile using environment variables, system properties, classpath, and file configuration:">環境変数、システム・プロパティ、クラスパスおよびファイル構成を使用するプロファイルの例:</span></p>

<markup
lang="yaml"
title="Config profile <code>config-profile-prod.yaml</code>"
>sources:
  - type: "environment-variables"
  - type: "system-properties"
  - type: "file"
    properties:
      path: "config/config-prod.yaml"
  - type: "classpath"
    properties:
      resource: "application.yaml"</markup>


<h4 id="_built_in_types"><span class="merged" id="all.4YUGHz"  title="原文:: Built-in Types">組込みタイプ</span></h4>
<div class="section">
<p><span class="merged" id="all.3XIkJb" title="原文 : The config system supports these built-in types:">構成システムでは、次の組込みタイプがサポートされます:</span></p>

<div class="block-title"><span class="merged" id="all.2AlAPi"  title="原文:: Built-in Types"><span>組込みタイプ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.p0YxL.6"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.3APT35"  title="原文:: Use">使用</span></th>
<th><span class="merged" id="all.1yOXvB" title="原文 : Related ConfigSources Method">関連<code>ConfigSources</code>メソッド</span></th>
<th><span class="merged" id="all.ZwCgW"  title="原文:: Required Properties">必須プロパティ</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.40pLvV"  title="原文: system-properties"><code>system-properties</code></span></td>
<td class=""><span class="merged" id="all.F61TR" title="原文 : System properties are a config source">システム・プロパティは構成ソースです</span></td>
<td class=""><span class="merged" id="all.2xjxJT"  title="原文: ConfigSources.systemProperties()"><code>ConfigSources.systemProperties()</code></span></td>
<td class=""><span class="merged" id="all.2jtIAF.1"  title="原文:: n/a">該当なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4X1qkf"  title="原文: environment-variables"><code>environment-variables</code></span></td>
<td class=""><span class="merged" id="all.1LGE7L" title="原文 : Environment variables are a config source">環境変数は構成ソースです</span></td>
<td class=""><span class="merged" id="all.1sh9Rl"  title="原文: ConfigSources.environmentVariables()"><code>ConfigSources.environmentVariables()</code></span></td>
<td class=""><span class="merged" id="all.2jtIAF.2"  title="原文:: n/a">該当なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TsKfV"  title="原文: classpath"><code>classpath</code></span></td>
<td class=""><span class="merged" id="all.4FdBdj" title="原文 : Specified resource is used as a config source">指定したリソースは構成ソースとして使用されています</span></td>
<td class=""><span class="merged" id="all.2l7ZEX"  title="原文: ConfigSources.classpath(String)"><code>ConfigSources.classpath(String)</code></span></td>
<td class=""><span class="merged" id="all.4MsqzX" title="原文 : resource - path to the resource to load"><code>resource</code> - ロードするリソースへのパス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.XcKOJ"  title="原文: file"><code>file</code></span></td>
<td class=""><span class="merged" id="all.qefv2" title="原文 : Specified file is used as a config source">指定されたファイルは構成ソースとして使用されています</span></td>
<td class=""><span class="merged" id="all.3se6VJ"  title="原文: ConfigSources.file(Path)"><code>ConfigSources.file(Path)</code></span></td>
<td class=""><span class="merged" id="all.2w4H1O" title="原文 : path - path to the file to load"><code>path</code> - ロードするファイルへのパス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4QNNPF"  title="原文: directory"><code>directory</code></span></td>
<td class=""><span class="merged" id="all.2wwtbV" title="原文 : Each file in directory used as config entry, with key = file name and value = file contents">構成エントリとして使用されるディレクトリ内の各ファイル(key =ファイル名およびvalue =ファイルの内容)</span></td>
<td class=""><span class="merged" id="all.4MRDJ5"  title="原文: ConfigSources.directory(String)"><code>ConfigSources.directory(String)</code></span></td>
<td class=""><span class="merged" id="all.D3vJ5" title="原文 : path - path to the directory to use"><code>path</code> - 使用するディレクトリへのパス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3kDdAI.2"  title="原文: url"><code>url</code></span></td>
<td class=""><span class="merged" id="all.2mgL9S" title="原文 : Specified URL is read as a config source">指定されたURLは構成ソースとして読み取られます</span></td>
<td class=""><span class="merged" id="all.1Kiy1J"  title="原文: ConfigSources.url(URL)"><code>ConfigSources.url(URL)</code></span></td>
<td class=""><span class="merged" id="all.3IU67I" title="原文 : url - URL from which to load the config"><code>url</code> - 構成のロード元のURL</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.25u9b9"  title="原文: inlined"><code>inlined</code></span></td>
<td class=""><span class="merged" id="all.K5VM7" title="原文 : The whole configuration tree under properties is added as a configuration source (excluding the properties node)"><code>properties</code>の下の構成ツリー全体が構成ソースとして追加されます(<code>properties</code>ノードを除く)</span></td>
<td class=""><span class="merged" id="all.2jtIAF.3"  title="原文:: n/a">該当なし</span></td>
<td class=""><span class="merged" id="all.2jtIAF.4"  title="原文:: n/a">該当なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1kBP8j"  title="原文: prefixed"><code>prefixed</code></span></td>
<td class=""><span class="merged" id="all.2fDGO0" title="原文 : Associated config source is loaded with the specified prefix">関連付けられた構成ソースは、指定されたプレフィクスでロードされます</span></td>
<td class=""><span class="merged" id="all.45Zha8"  title="原文: ConfigSources.prefixed(String,Supplier)"><code>ConfigSources.prefixed(String,Supplier)</code></span></td>
<td class=""><doc-view>
<ul class="ulist">
<li>
<p><span class="merged" id="all.15x1jN" title="原文 : key - key of config element in associated source to load"><code>key</code> - ロードする関連ソースの構成要素のキー</span></p>

</li>
<li>
<p><span class="merged" id="all.353mzV" title="原文 : type - associated config source specification"><code>type</code> - 関連付けられた構成ソース指定</span></p>

</li>
<li>
<p><span class="merged" id="all.4eWzB0" title="原文 : properties - as needed to further qualify the associated config source"><code>properties</code> - 必要に応じて、関連する構成ソースをさらに修飾</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2jZFVZ.spl1" title="原文 : Except for the system-properties and environment-variables types, the profile properties section for a source can also specify any optional settings for the corresponding config source type."><code>system-properties</code>および<code>environment-variables</code>型を除き、ソースのプロファイル<code>properties</code>セクションは、対応する構成ソース・オプションの設定を指定することもできます。</span> <span class="merged" id="all.2jZFVZ.spl2" title="原文 : The JavaDoc for the related config source type builders lists the supported properties for each type.">関連する構成ソース・タイプ・ビルダーのJavaDocには、各タイプでサポートされるプロパティがリストされています。</span> <span class="merged" id="all.2jZFVZ.spl3" title="原文 : (For example, FileConfigSource.FileBuilder.)">(たとえば、<a href="/apidocs/io.helidon.config/io/helidon/config/internal/FileConfigSource.FileBuilder.html" target="_blank"><code>FileConfigSource.FileBuilder</code></a>。)</span> </p>

<p><span class="merged" id="all.2KOTDV.spl1" title="原文 : Here is an example profile in YAML format.">YAML形式のプロファイルの例を次に示します。</span> <span class="merged" id="all.2KOTDV.spl2" title="原文 : Note how the properties sections are at the same level as the type or class within a sources array entry."><code>properties</code>セクションが<code>sources</code>配列エントリ内の<code>type</code>または<code>class</code>と同じレベルにあることに注意してください。</span> </p>

<markup
lang="yaml"
title="Profile <code>config-profile.yaml</code> illustrating all built-in sources available on the classpath"
>caching.enabled: false
sources:
  - type: "system-properties"
  - type: "environment-variables"
  - type: "directory"
    properties:
      path: "conf/secrets"
      media-type-mapping:
        yaml: "application/x-yaml"
        password: "application/base64"
      polling-strategy:
        type: "regular"
        properties:
          interval: "PT15S"
  - type: "url"
    properties:
      url: "http://config-service/my-config"
      media-type: "application/hocon"
      optional: true
      retry-policy:
        type: "repeat"
        properties:
          retries: 3
  - type: "file"
    properties:
      optional: true
      path: "conf/env.yaml"
      change-watcher:
        type: "file"
        properties:
          delay-millis: 5000
  - type: "prefixed"
    properties:
      key: "app"
      type: "classpath"
      properties:
        resource: "app.conf"
  - type: "classpath"
    properties:
      resource: "application.conf"</markup>

<p><span class="merged" id="all.HSNXQ" title="原文 : Note that the example shows how your profile can configure optional features such as polling strategies and retry policies for config sources.">この例は、プロファイルがポーリング戦略や構成ソースの再試行ポリシーなどのオプション機能を構成する方法を示しています。</span></p>

</div>


<h4 id="_support_for_custom_sources"><span class="merged" id="all.2jBOcE" title="原文 : Support for Custom Sources">カスタム・ソースのサポート</span></h4>
<div class="section">
<p><span class="merged" id="all.uffWi" title="原文 : Profiles can be used to set up custom config sources as well as the built-in ones described above.">プロファイルを使用して、カスタム構成ソースおよび前述の構成ソースを設定できます。</span></p>

<p><span class="merged" id="all.4Ma0ez" title="原文 : Implement the ConfigSourceProvider"><code>ConfigSourceProvider</code>の実装</span></p>

<markup
lang="java"

>public class MyConfigSourceProvider implements ConfigSourceProvider {
    private static final String TYPE = "my-type";

    @Override
    public boolean supports(String type) {
        return TYPE.equals(type);
    }

    @Override
    public ConfigSource create(String type, Config metaConfig) {
        // as we only support one in this implementation, we can just return it
        return MyConfigSource.create(metaConfig);
    }

    @Override
    public Set&lt;String&gt; supported() {
        return Collections.singleton(TYPE);
    }
}</markup>

<p><span class="merged" id="all.1SJqD2" title="原文 : Register it as a java service loader service">javaサービス・ローダー・サービスとして登録</span></p>

<markup

title="File <code>META-INF/services/io.helidon.config.spi.ConfigSourceProvider</code>"
>io.helidon.examples.MyConfigSourceProvider</markup>

<p><span class="merged" id="all.4Lm7Fq" title="原文 : And in module-info.java if using JPMS:">JPMSを使用している場合は、<code>module-info.java</code>で:</span></p>

<markup
lang="java"
title="File <code>module-info.java</code>"
>provides io.helidon.config.spi.ConfigSourceProvider with io.helidon.examples.MyConfigSourceProvider</markup>

<p><span class="merged" id="all.44k3b7" title="原文 : Now you can use the following profile:">これで、次のプロファイルを使用できます:</span></p>

<markup
lang="yaml"

>sources:
  - type: "system-properties"
  - type: "environment-variables"
  - type: "my-type"
    properties:
        my-property: "some-value"</markup>

<p><span class="merged" id="all.3rmI6R.spl1" title="原文 : Note that it is the io.helidon.config.AbstractConfigSource class that provides support for polling strategies, change watchers, and retry policies.">これは、ポーリング戦略、ウォッチャの変更および再試行ポリシーのサポートを提供する<code>io.helidon.config.AbstractConfigSource</code>クラスです。</span> <span class="merged" id="all.3rmI6R.spl2" title="原文 : If you create custom config sources that should also offer this support be sure they extend AbstractConfigSource and implement appropriate SPI interfaces (such as io.helidon.config.spi.WatchableSource) to support such features.">このサポートも提供する必要があるカスタム構成ソースを作成する場合は、必ず<code>AbstractConfigSource</code>を拡張し、そのような機能をサポートするための適切なSPIインタフェース(<code>io.helidon.config.spi.WatchableSource</code>など)を実装してください。</span> </p>

</div>


<h4 id="_support_for_custom_polling_strategies_change_watchers_and_retry_policies"><span class="merged" id="all.1LFeR2" title="原文 : Support for Custom Polling Strategies, Change Watchers, and Retry Policies">カスタム・ポーリング戦略、ウォッチャの変更および再試行ポリシーのサポート</span></h4>
<div class="section">
<p><span class="merged" id="all.3T86m6.spl1" title="原文 : Your config profile can include the set-up for polling strategies, change watchers, and retry policies if the config source supports them.">構成プロファイルには、ポーリング戦略の設定、ウォッチャの変更および再試行ポリシー(構成ソースでサポートされている場合)を含めることができます。</span> <span class="merged" id="all.3T86m6.spl2" title="原文 : Declare them in a way similar to how you declare the config sources themselves: by type and with accompanying properties.">構成ソース自体を宣言する方法と同様の方法: <code>type</code>および付随する<code>properties</code>によって宣言します。</span> </p>

<div class="block-title"><span class="merged" id="all.31XHrE" title="原文 : Config Profile Support for Built-in Polling Strategies"><span>組込みポーリング戦略の構成プロファイル・サポート</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2uXUf3"  title="原文:: Strategy Type">戦略のタイプ</span></th>
<th><span class="merged" id="all.JUOSC.35"  title="原文:: Usage">使用</span></th>
<th><span class="merged" id="all.3fmb7X.1"  title="原文:: Properties">プロパティ</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2XMivm"  title="原文: regular"><code>regular</code></span></td>
<td class=""><span class="merged" id="all.3xFFa1" title="原文 : Periodic polling - See PollingStrategies.regular method">定期的なポーリング - <a href="/apidocs/io.helidon.config/io/helidon/config/PollingStrategies.html#regular-java.time.Duration-" target="_blank"><code>PollingStrategies.regular</code></a>メソッドを参照</span></td>
<td class=""><span class="merged" id="all.6KG3z" title="原文 : interval (Duration) - indicating how often to poll; e.g., PT15S represents 15 seconds"><code>interval</code> (<code>Duration</code>) - ポーリングの頻度を示す(<code>PT15S</code>は15秒を表すなど)</span></td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.xYyfZ" title="原文 : Config Profile Support for Built-in Change Watchers"><span>組込み変更ウォッチャの構成プロファイル・サポート</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.p0YxL.7"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.JUOSC.36"  title="原文:: Usage">使用</span></th>
<th><span class="merged" id="all.3fmb7X.2"  title="原文:: Properties">プロパティ</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.XcKOJ.1"  title="原文: file"><code>file</code></span></td>
<td class=""><span class="merged" id="all.3YZiLM" title="原文 : Filesystem monitoring - See FileSystemWatcher class">ファイルシステムのモニタリング - <a href="/apidocs/io.helidon.config/io/helidon/config/FileSystemWatcher.html" target="_blank"><code>FileSystemWatcher</code></a>クラスを参照してください</span></td>
<td class=""><span class="merged" id="all.4VkyxK" title="原文 : initial-delay-millis - delay between the start of the watcher and first check for changes"><code>initial-delay-millis</code> - ウォッチャの開始から変更を確認するための遅延</span></td><td class=""><span class="merged" id="all.lkXFy" title="原文 : delay-millis - how often do we check the watcher service for changes"><code>delay-millis</code> - どのくらいの頻度でウォッチャ・サービスに変更がないか確認しますか</span></td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.mPYou" title="原文 : Config Profile Support for Built-in Retry Policies"><span>組込み再試行ポリシーの構成プロファイルのサポート</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.W3q2t"  title="原文:: Policy Type">ポリシー・タイプ</span></th>
<th><span class="merged" id="all.JUOSC.37"  title="原文:: Usage">使用</span></th>
<th><span class="merged" id="all.3fmb7X.3"  title="原文:: Properties">プロパティ</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.13ayqE"  title="原文: repeat"><code>repeat</code></span></td>
<td class=""><span class="merged" id="all.3V3M3A" title="原文 : Regularly-scheduled - see RetryPolicies.repeat.">Regularly-scheduled - <a href="/apidocs/io.helidon.config/io/helidon/configRetryPolicies.html#repeat-int-" target="_blank"><code>RetryPolicies.repeat</code></a>を参照してください。</span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1RpcLo" title="原文 : retries (int) - number of retries to perform "><code>retries</code> (<code>int</code>) - 実行する再試行回数<br></span>
</p>

<p><span class="merged" id="all.4aIbs8"  title="原文:: Optional:">オプション:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4ahrSG" title="原文 : delay (Duration) - initial delay between retries"><code>delay</code> (<code>Duration</code>) - 再試行間の初期遅延</span></p>

</li>
<li>
<p><span class="merged" id="all.2JffNN" title="原文 : delay-factor (double) - delay is repeatedly multiplied by this each retry to compute the delay for each successive retry"><code>delay-factor</code> (<code>double</code>) - <code>delay</code>は、連続する各再試行の遅延をコンピュートするために、この再試行ごとに繰り返し乗算されます</span></p>

</li>
<li>
<p><span class="merged" id="all.3DKKW5" title="原文 : call-timeout (Duration) - timeout for a single invocation to load the source"><code>call-timeout</code> (<code>Duration</code>) - ソースをロードする単一の呼出しのタイムアウト</span></p>

</li>
<li>
<p><span class="merged" id="all.4MxWQz" title="原文 : overall-timeout (Duration) - total timeout for all retry calls and delays"><code>overall-timeout</code> (<code>Duration</code>) - すべての再試行コールおよび遅延の合計タイムアウト</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.pM1eh.spl1" title="原文 : To specify a custom polling strategy or custom retry policy, implement the interface (io.helidon.config.spi.PollingStrategy, io.helidon.config.spi.ChangeWatcher, or io.helidon.config.spi.RetryPolicy), and then implement the provider interface (io.helidon.config.spi.PollingStrategyProvider, io.helidon.config.spi.ChangeWatcherProvider, or io.helidon.config.spi.RetryPolicyProvider) to enable your custom implementations for profiles.">カスタム・ポーリング戦略またはカスタム再試行ポリシーを指定するには、インタフェース(<code>io.helidon.config.spi.PollingStrategy</code>、<code>io.helidon.config.spi.ChangeWatcher</code>または<code>io.helidon.config.spi.RetryPolicy</code>)を実装し、プロバイダ・インタフェース(<code>io.helidon.config.spi.PollingStrategyProvider</code>、<code>io.helidon.config.spi.ChangeWatcherProvider</code>または<code>io.helidon.config.spi.RetryPolicyProvider</code>)を実装して、プロファイルのカスタム実装を有効にします。</span> <span class="merged" id="all.pM1eh.spl2" title="原文 : You can then use any custom properties - these are provided as a Config instance to the create method of the Provider implementation.">その後、任意のカスタム・プロパティを使用できます - これらは、プロバイダ実装の<code>create</code>メソッドに<code>Config</code>インスタンスとして提供されます。</span> </p>

<p><span class="merged" id="all.4RzvXt" title="原文 : See RetryPolicy, ChangeWatcher, and PollingStrategy JavaDoc sections."><a href="/apidocs/io.helidon.config/io/helidon/config/spi/RetryPolicy.html" target="_blank"><code>RetryPolicy</code></a>、<a href="/apidocs/io.helidon.config/io/helidon/config/spi/ChangeWatcher.html" target="_blank"><code>ChangeWatcher</code></a>および<a href="/apidocs/io.helidon.config/io/helidon/config/spi/PollingStrategy.html" target="_blank"><code>PollingStrategy</code></a> JavaDocの各項を参照してください。</span></p>

</div>

</div>

</div>

</doc-view>
