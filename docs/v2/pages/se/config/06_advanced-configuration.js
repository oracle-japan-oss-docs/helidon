<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.31xdrL"  title="原文:: Advanced Configuration Topics">拡張構成のトピック</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3adUhY" title="原文 : This section discusses several advanced topics related to Helidon configuration.">この項では、Helidon構成に関連するいくつかの高度なトピックについて説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_advanced_config_sources_and_config_parsers"><span class="merged" id="all.3RCRiQ" title="原文 : Advanced Config Sources and Config Parsers">拡張構成ソースおよび構成パーサー</span></h2>
<div class="section">

<h3 id="_environment_variables_config_source"><span class="merged" id="all.4Q5CLQ" title="原文 : Environment Variables Config Source">環境変数構成ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.3pOXpF.spl1" title="原文 : The config system supports using environment variables as a config source, and is enabled by default.">構成システムは、構成ソースとしての環境変数の使用をサポートしており、デフォルトで有効になっています。</span> <span class="merged" id="all.3pOXpF.spl2" title="原文 : Since environment variable names are normally restricted to alphanumeric characters and underscore, this config source adds aliases that enable setting or overriding config entries with dotted and/or hyphenated keys.">環境変数名は通常、英数字とアンダースコアに制限されているため、この構成ソースは、ドット付きキーまたはハイフン付きキー(あるいはその両方)を使用して構成エントリを設定またはオーバーライドできるようにする別名を<em>「追加」</em>します。</span> </p>

<p><span class="merged" id="all.2OKSD8" title="原文 : The mapping makes it possible to set or override a config entry with a key of &quot;foo.bar&quot; using an environment variable named &quot;FOO_BAR&quot; and &quot;foo.bar-baz&quot; using &quot;FOO_BAR_dash_BAZ&quot;.">このマッピングにより、<code>"FOO_BAR_dash_BAZ"</code>を使用して<code>"FOO_BAR"</code>および<code>"foo.bar-baz"</code>という名前の環境変数を使用して、<code>"foo.bar"</code>のキーで構成エントリを設定またはオーバーライドできます。</span></p>

<p><span class="merged" id="all.2znG8j.spl1" title="原文 : One use case for this mapping is config overrides in containers, where passing environment variables directly or via Kubernetes Secrets/ConfigMaps is common.">このマッピングのユースケースの1つは、環境変数を直接渡すか、Kubernetes Secrets/ConfigMapsを介して渡すことが一般的な、コンテナ内の構成オーバーライドです。</span> <span class="merged" id="all.2znG8j.spl2" title="原文 : Scripts that solve the mapping problem by explicitly converting variables to system properties can also be simplified.">変数をシステム・プロパティに明示的に変換することでマッピングの問題を解決するスクリプトも簡略化できます。</span> </p>

<p><span class="merged" id="all.wevi7" title="原文 : Aliases are produced for any environment variable name that matches all of the following:">別名は、次の<em>「すべて」</em>と一致する環境変数名に対して生産されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.39Z1mv" title="原文 : does not begin or end with a &apos;_&apos; character"><code>'_'</code>文字で始まらないか、または終わらない</span>

</li>
<li>
<span class="merged" id="all.3phbS9" title="原文 : does not contain &quot;__&quot;"><code>"__"</code>を含まない</span>

</li>
<li>
<span class="merged" id="all.ZMN92" title="原文 : contains one or more &apos;_&apos; characters">1つ以上の<code>'_'</code>文字が含まれます</span>

</li>
</ol>
<p><span class="merged" id="all.4Z7HFr" title="原文 : For each such name, two aliases are added with the names mapped as follows:">このような名前ごとに、次のように名前がマップされた状態で2つの別名が追加されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1HVMqk" title="原文 : Replace any &quot;_dash_&quot; or &quot;_DASH_&quot; substrings with &quot;-&quot;, e.g. &quot;APP_PAGE_dash_SIZE&quot; becomes &quot;APP_PAGE-SIZE&quot;."><code>"_dash_"</code>または<code>"_DASH_"</code>の部分文字列を<code>"-"</code>に置き換えます。たとえば、<code>"APP_PAGE_dash_SIZE"</code>は<code>"APP_PAGE-SIZE"</code>になります。</span>

</li>
<li>
<span class="merged" id="all.gmKDl.spl1" title="原文 : Replace &apos;_&apos; with &apos;.&apos; and add as an alias, e.g. &quot;APP_GREETING&quot; is added as &quot;APP.GREETING&quot; and &quot;APP_PAGE-SIZE&quot; is added as &quot;APP.PAGE-SIZE&quot;."><code>'_'</code>を<code>'.'</code>に置き換え、別名として追加します。たとえば、<code>"APP_GREETING"</code>は<code>"APP.GREETING"</code>として追加され、<code>"APP_PAGE-SIZE"</code>は<code>"APP.PAGE-SIZE"</code>として追加されます。</span> <span class="merged" id="all.gmKDl.spl2" title="原文 : This mapping is added primarily to support mixed case config keys such as &quot;app.someCamelCaseKey&quot;.">このマッピングは、主に<code>"app.someCamelCaseKey"</code>などの大/小文字混在の構成キーをサポートするために追加されます。</span> 

</li>
<li>
<span class="merged" id="all.2LtS2z" title="原文 : Convert the result of step 2 to lowercase and add as an alias, e.g. &quot;APP.GREETING&quot; is added as &quot;app.greeting&quot; and &quot;APP.PAGE-SIZE&quot; is added as &quot;app.page-size&quot;.">ステップ2の結果を小文字に変換し、別名として追加します。たとえば、<code>"APP.GREETING"</code>は<code>"app.greeting"</code>として追加され、<code>"APP.PAGE-SIZE"</code>は<code>"app.page-size"</code>として追加されます。</span>

</li>
</ol>
</div>

<h3 id="_directory_config_source"><span class="merged" id="all.2N8hbu" title="原文 : Directory Config Source">ディレクトリ構成ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.1sXbPx.spl1" title="原文 : The config system supports using a file system directory as a config source.">構成システムは、構成ソースとしてのファイル・システム・ディレクトリの使用をサポートしています。</span> <span class="merged" id="all.1sXbPx.spl2" title="原文 : Each non-directory file in the directory becomes a config entry: the file name is the key and the contents of that file are used as the corresponding config String value.">ディレクトリ内の各<em>「非ディレクトリ」</em>ファイルが構成エントリになります: ファイル名はキーで、そのファイルの内容が対応する構成<code>String</code>値として使用されます。</span> </p>

<p><span class="merged" id="all.4GDMGU" title="原文 : The following example shows, for example, one way to load Kubernetes secrets mounted on the pod&rsquo;s filesystem.">たとえば、次の例では、ポッド・ファイルシステムにマウントされたKubernetesシークレットをロードする方法を示します。</span></p>

<p><span class="merged" id="all.miP9Q" title="原文 : If the directory conf/secrets contains these two files">ディレクトリ<code>conf/secrets</code>に次の2つのファイルが含まれている場合</span></p>

<markup

title="ファイル<code>secrets/username</code>"
>jose</markup>

<markup

title="ファイル<code>secrets/password</code>"
>^ery$ecretP&amp;ssword</markup>

<p><span class="merged" id="all.2ZM8h7" title="原文 : your application can load this as configuration as follows:">アプリケーションでは、これを次のように構成としてロードできます:</span></p>

<markup
lang="java"
title="<code>directory</code>構成ソースの使用"
>Config secrets = Config.withSources(
        ConfigSources.directory("conf/secrets")) <span class="conum" data-value="1" />
        .disableEnvironmentVariablesSource()     <span class="conum" data-value="2" />
        .disableSystemPropertiesSource()         <span class="conum" data-value="2" />
        .build();

assert secrets.get("username")                   <span class="conum" data-value="3" />
        .asString()
        .get()
        .equals("jose");
assert secrets.get("password")                   <span class="conum" data-value="4" />
        .asString()
        .get()
        .equals("^ery$ecretP&amp;ssword");</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1bBejz" title="原文 : Loads all files from the conf/secrets directory."><code>conf/secrets</code>ディレクトリからすべてのファイルをロードします。</span></li>
<li data-value="2"><span class="merged" id="all.3zosq3" title="原文 : No need to use environment variables or system properties as sources in building the Config."><code>Config</code>のビルド時に、ソースとして環境変数またはシステム・プロパティを使用する必要はありません。</span></li>
<li data-value="3"><span class="merged" id="all.3z8cou" title="原文 : The loaded config maps the key username to the value jose…​">ロードされた構成により、キー<code>username</code>が値<code>jose</code>にマップされます…</span></li>
<li data-value="4"><span class="merged" id="all.WZokw" title="原文 : …​and the key password to ^ery$ecretP&amp;ssword.">…および主要な<code>password</code>から<code>^ery$ecretP&amp;ssword</code>へ。</span></li>
</ul>
<p><span class="merged" id="all.Ad9hL.spl1" title="原文 : Remember that your application can process the contents of a given file as configuration.">アプリケーションでは、特定のファイルの内容を構成として処理できることに注意してください。</span> <span class="merged" id="all.Ad9hL.spl2" title="原文 : See the config sources section and the ConfigSources.file JavaDoc."><router-link @click.native="this.scrollFix('#config/02_config-sources.adoc')" to="#config/02_config-sources.adoc">「構成ソース」</router-link>の項および<a href="./apidocs/io.helidon.config/io/helidon/config/ConfigSources.html#file-java.lang.String-" id="" target="_blank" ><code>ConfigSources.file</code></a> JavaDocを参照してください。</span> </p>

</div>

<h3 id="_in_memory_config_sources"><span class="merged" id="all.4fviWm" title="原文 : In-memory Config Sources">インメモリー構成ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.1ykFDL.spl1" title="原文 : The config system provides several ways to create a Config tree from data already in memory.">configシステムには、すでにメモリー内にあるデータから<code>Config</code>ツリーを作成する方法がいくつか用意されています。</span> <span class="merged" id="all.1ykFDL.spl2" title="原文 : See the ConfigSources javadoc for further details.">詳細は、<a href="./apidocs/io.helidon.config/io/helidon/config/ConfigSources.html" id="" target="_blank" ><code>ConfigSources</code> javadoc</a>を参照してください。</span> <span class="merged" id="all.1ykFDL.spl3" title="原文 : The numerous variants of the from method construct ConfigSource or Builder&lt;ConfigSource&gt; instances."><code>from</code>メソッドの様々なバリアントによって、<code>ConfigSource</code>または<code>Builder&lt;ConfigSource></code>インスタンスが構成されます。</span> </p>


<h4 id="_subtree_of_another_config"><span class="merged" id="all.1sCWV2" title="原文 : Subtree of Another Config">別の<code>Config</code>のサブツリー</span></h4>
<div class="section">
<markup
lang="java"

>Config anotherConfig = Config.create(classpath("application.conf"));

Config config = Config.create(
        ConfigSources.create(anotherConfig.get("data")));</markup>

</div>

<h4 id="_properties_object"><span class="merged" id="all.3wM6w3" title="原文 : Properties Object"><code>Properties</code>オブジェクト</span></h4>
<div class="section">
<markup
lang="java"

>Config config = Config.create(
        ConfigSources.create(System.getProperties()).build());                <span class="conum" data-value="1" /></markup>

</div>

<h4 id="_string_of_a_given_media_type"><span class="merged" id="all.1qWh92" title="原文 : String of a Given Media Type">指定されたメディア・タイプの<code>String</code></span></h4>
<div class="section">
<markup
lang="java"

>Config config = Config.create(
        ConfigSources.create("app.greeting = Hi", "text/x-java-properties")); <span class="conum" data-value="2" /></markup>

</div>

<h4 id="_map"><span class="merged" id="all.BKqYI"  title="原文: Map"><code>Map</code></span></h4>
<div class="section">
<markup
lang="java"

>Config config = Config.crate(
        ConfigSources.create(Map.of("app.page-size", "20"))
            .lax()             <span class="conum" data-value="3" />
            .build());         <span class="conum" data-value="1" /></markup>

</div>

<h4 id="_ad_hoc_config_nodes"><span class="merged" id="all.2ejgAf" title="原文 : ad hoc Config Nodes"><em>「アド・ホック」</em>構成ノード</span></h4>
<div class="section">
<markup
lang="java"

>Config config = Config.create(
        ConfigSources.create(ObjectNode.builder()
                                   .addList("app.basic-range", ListNode.builder()
                                           .addValue("-20")
                                           .addValue("20")
                                           .build())
                                   .build()));</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.42EDu4" title="原文 : ConfigSources.create variants for Properties or Map arguments return a ConfigSources.MapBuilder instance."><code>Properties</code>または<code>Map</code>引数の<code>ConfigSources.create</code>バリアントは、<code>ConfigSources.MapBuilder</code>インスタンスを返します。</span></li>
<li data-value="2"><span class="merged" id="all.1r7i7n" title="原文 : A similar create variant accepts a Readable instead of a String.">同様の<code>create</code>バリアントは、<code>String</code>のかわりに<code>Readable</code>を受け入れます。</span></li>
<li data-value="3"><span class="merged" id="all.NWapX.spl1" title="原文 : MapBuilder by default throws an exception if a key appears more than once in the map.">キーがマップに複数回出現する場合、<code>MapBuilder</code>はデフォルトで例外をスローします。</span> <span class="merged" id="all.NWapX.spl2" title="原文 : The lax() method relaxes this; the config system logs a warning instead."><code>lax()</code>メソッドはこれを緩和します。かわりに、構成システムは警告をログに記録します。</span> </li>
</ul>
</div>
</div>

<h3 id="_multi_source_configs_and_composite_config_sources"><span class="merged" id="all.aSV0H" title="原文 : Multi-Source Configs and Composite Config Sources">マルチ・ソース<code>Config</code>およびコンポジット構成ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.4KorjL" title="原文 : Although the examples above use a single source, you can build a single Config from multiple sources.">前述の例では単一のソースを使用していますが、複数のソースから単一の<code>Config</code>をビルドできます。</span></p>


<h4 id="_handling_key_collisions"><span class="merged" id="all.2w9GQR" title="原文 : Handling Key Collisions">キーの衝突の処理</span></h4>
<div class="section">

<h5 id="_prefixed_config_sources"><span class="merged" id="all.2JAY4T" title="原文 : Prefixed Config Sources">プレフィクスが付いた構成ソース</span></h5>
<div class="section">
<p><span class="merged" id="all.1EqyrY" title="原文 : Sometimes you might want to create a single config tree from multiple sources but in a way that keeps the config from different sources in different subtrees.">複数のソースから単一の構成ツリーを作成し、異なるソースからの構成を異なるサブツリーに保持することが必要な場合があります。</span></p>

<p><span class="merged" id="all.2D4tXl.spl1" title="原文 : The config system lets you assign a prefix to all keys from a given source using the ConfigSources.prefixed method.">configシステムでは、<a href="./apidocs/io.helidon.config/io/helidon/config/ConfigSources.html#prefixed-java.lang.String-java.util.function.Supplier-" id="" target="_blank" ><code>ConfigSources.prefixed</code></a>メソッドを使用して、特定のソースのすべてのキーにプレフィクスを割り当てることができます。</span> <span class="merged" id="all.2D4tXl.spl2" title="原文 : The following example shows two YAML files as config sources and the code to load each with a different prefix into a single Config tree:">次の例は、構成ソースとしての2つのYAMLファイルと、それぞれ異なるプレフィクスを持つコードを単一の<code>Config</code>ツリーにロードする方法を示しています:</span> </p>

<markup
lang="hocon"
title="ファイル<code>app.conf</code>"
>greeting = "Hello"
page-size = 20
basic-range = [ -20, 20 ]</markup>

<markup
lang="hocon"
title="ファイル<code>data.conf</code>"
>providers: [
    {
        name = "Provider1"
        class = "this.is.my.Provider1"
    },
    {
        name = "Provider2"
        class = "this.is.my.Provider2"
    }
]</markup>

<markup
lang="java"
title="<code>prefixed</code>構成ソースの使用"
>Config config = Config.create(
        ConfigSources.prefixed("app",                    <span class="conum" data-value="1" />
                               classpath("app.conf")),   <span class="conum" data-value="2" />
        ConfigSources.prefixed("data",                   <span class="conum" data-value="3" />
                               classpath("data.conf"))); <span class="conum" data-value="4" />

assert config.get("app.greeting")                        <span class="conum" data-value="5" />
        .asString()
        .get()
        .equals("Hello");

assert config.get("data.providers.0.name")               <span class="conum" data-value="6" />
        .asString()
        .get()
        .equals("Provider1");</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2epVIC" title="原文 : Specifies the prefix app for the associated source.">関連付けられたソースのプレフィクス<code>app</code>を指定します。</span></li>
<li data-value="2"><span class="merged" id="all.1uVJsy" title="原文 : Supplier&lt;ConfigSource&gt; for the file app.conf loaded from the current classpath.">現在の<code>classpath</code>からロードされたファイル<code>app.conf</code>の<code>Supplier&lt;ConfigSource></code>。</span></li>
<li data-value="3"><span class="merged" id="all.BSGqT" title="原文 : Specifies the prefix data for the associated source.">関連付けられたソースのプレフィクス<code>data</code>を指定します。</span></li>
<li data-value="4"><span class="merged" id="all.3iRjOk" title="原文 : Supplier&lt;ConfigSource&gt; for the file app.conf loaded from the current classpath.">現在の<code>classpath</code>からロードされたファイル<code>app.conf</code>のサプライヤ&lt;ConfigSource>。</span></li>
<li data-value="5"><span class="merged" id="all.3FcHOm" title="原文 : Key app.greeting combines the app prefix and the original key greeting from the app.conf source.">Key <code>app.greeting</code>は、<code>app.conf</code>ソースの<code>app</code>プレフィクスと元のキー<code>greeting</code>を組み合せます。</span></li>
<li data-value="6"><span class="merged" id="all.1g9GuM" title="原文 : Key data.providers.0.name combines the data prefix and the original key providers.0.name property from data.conf source.">Key <code>data.providers.0.name</code>は、<code>data.conf</code>ソースの<code>data</code>プレフィクスと元のキー<code>providers.0.name</code>プロパティを組み合せます。</span></li>
</ul>
<p><span class="merged" id="all.1eI0xw" title="原文 : This technique can be useful, for example, if multiple sources contain keys that might overlap; assigning different prefixes to the keys from different sources gives your application a way to access all config elements distinctly even if their keys would otherwise conflict.">この方法は、複数のソースに重複する可能性のあるキーが含まれている場合などに便利です。異なるソースのキーに異なるプレフィクスを割り当てると、アプリケーションは、それらのキーが競合する場合でも、すべての構成要素に明確にアクセスできます。</span></p>

</div>

<h5 id="_merging_strategies"><span class="merged" id="all.4HBjNd" title="原文 : Merging Strategies">戦略のマージ</span></h5>
<div class="section">
<p><span class="merged" id="all.2kGWWu.spl1" title="原文 : The ConfigSources.create(Supplier&lt;ConfigSource&gt;…​) and ConfigSources.create(List&lt;Supplier&lt;ConfigSource&gt;…​) methods return a CompositeBuilder."><code>ConfigSources.create(Supplier&lt;ConfigSource>…​)</code>および<code>ConfigSources.create(List&lt;Supplier&lt;ConfigSource>…​)</code>メソッドは、<code>CompositeBuilder</code>を返します。</span> <span class="merged" id="all.2kGWWu.spl2" title="原文 : By default, earlier sources in the list have higher priority than later ones, meaning that if the same key appears in two or more sources the source earlier in the list prevails.">デフォルトでは、リスト内の以前のソースは後のソースよりも優先度が高くなります。つまり、同じキーが複数のソースに表示される場合、リスト内の前のソースが優先されます。</span> </p>

<p><span class="merged" id="all.13cKCQ.spl1" title="原文 : Each CompositeConfigSource&apos;s merging strategy actually controls this behavior.">実際には、各<code>CompositeConfigSource</code>の<em>「マージ戦略」</em>がこの動作を制御します。</span> <span class="merged" id="all.13cKCQ.spl2" title="原文 : The config system provides the FallbackMergingStrategy which implements the default, &quot;first wins&quot; algorithm.">構成システムには、デフォルトの「最初に優先」アルゴリズムを実装する<code>FallbackMergingStrategy</code>が用意されています。</span> <span class="merged" id="all.13cKCQ.spl3" title="原文 : You can write your own implementation of ConfigSources.MergingStrategy and use it instead to provide a different algorithm."><a href="./apidocs/io.helidon.config/io/helidon/config/ConfigSources.MergingStrategy.html" id="" target="_blank" ><code>ConfigSources.MergingStrategy</code></a>の独自の実装を作成し、かわりにそれを使用して別のアルゴリズムを提供できます。</span> </p>

<markup
lang="java"
title="コンポジット構成ソースの例"
>Config config = Config.create(                                               <span class="conum" data-value="1" />
        ConfigSources.create(file("conf/dev.properties").optional(),         <span class="conum" data-value="2" />
                           file("conf/config.properties").optional())        <span class="conum" data-value="2" />
                .add(classpath("application.properties"))                    <span class="conum" data-value="3" />
                .mergingStrategy(ConfigSources.MergingStrategy.fallback())); <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2Jnu82" title="原文 : Creates a new Config instance from a single composite config source.">単一のコンポジット構成ソースから新しい<code>Config</code>インスタンスを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.1ienKj" title="原文 : Method ConfigSources.create(sources…​) returns CompositeBuilder instance initialized with two sources (from dev.properties and config.properties files).">Method <code>ConfigSources.create(sources…​)</code>は、(<code>dev.properties</code>および<code>config.properties</code>ファイルから) 2つのソースで初期化された<code>CompositeBuilder</code>インスタンスを返します。</span></li>
<li data-value="3"><span class="merged" id="all.4G9p0P" title="原文 : Adds third config source (application.properties on classpath) to the same CompositeBuilder.">サード・パーティの構成ソース(クラスパス上の<code>application.properties</code>)を同じ<code>CompositeBuilder</code>に追加します。</span></li>
<li data-value="4"><span class="merged" id="all.4I8vuV.spl1" title="原文 : Specifies the merging strategy.">マージ戦略を指定します。</span> <span class="merged" id="all.4I8vuV.spl2" title="原文 : This example uses the default fallback merging strategy.">この例では、デフォルトのフォールバック・マージ戦略を使用します。</span> </li>
</ul>
</div>
</div>
</div>

<h3 id="Config-Advanced-Sources-SuitableParser"><span class="merged" id="all.4RycTH" title="原文 : How Config Chooses Parsers">構成でのパーサーの選択方法</span></h3>
<div class="section">
<p><span class="merged" id="all.ya1jZ" title="原文 : As the config sources and parsers section describes, these two work together to read and translate configuration data from some external form into the corresponding in-memory config tree."><a href="config/02_config-sources.html" id="" target="_blank" >「構成ソースおよびパーサー」</a>セクションで説明されているように、これらの2つは連携して、外部フォームから対応するインメモリー構成ツリーに構成データを読み取って変換します。</span></p>

<p><span class="merged" id="all.2JIKEV.spl1" title="原文 : Although most applications are explicit about the config sources they use in building a Config, the config system often has to figure out what parser to use.">ほとんどのアプリケーションは、<code>Config</code>のビルドに使用する構成ソースについて明示的に記述されていますが、多くの場合、使用するパーサーを特定する必要があります。</span> <span class="merged" id="all.2JIKEV.spl2" title="原文 : It does so by:">これを行うには、次のようにします:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4CH7vh" title="原文 : determining, the best that it can, the media type of the source, and">ソースのメディア・タイプ、および</span>

</li>
<li>
<span class="merged" id="all.3LFocp" title="原文 : locating a parser that can translate that media type.">そのメディア・タイプを変換できるパーサーの検索。</span>

</li>
</ol>

<h4 id="_identifying_the_media_type"><span class="merged" id="all.1c8NoV" title="原文 : Identifying the Media Type">メディア・タイプの識別</span></h4>
<div class="section">

<h5 id="_by_inference"><span class="merged" id="all.3spREA" title="原文 : By Inference">推論別</span></h5>
<div class="section">
<p><span class="merged" id="all.261VKY" title="原文 : Most applications let the config system try to infer the media type of the config source.">ほとんどのアプリケーションでは、構成システムは構成ソースのメディア・タイプを推測しようとします。</span></p>

<p><span class="merged" id="all.1O5AT.spl1" title="原文 : By default config source implementations use the io.helidon.common.media.type.MediaTypes API to infer the source media type from the source, typically (but not always) based on the file type portion of the file path.">デフォルトでは、構成ソース実装は<code>io.helidon.common.media.type.MediaTypes</code> APIを使用して、通常はファイル・パスのファイル・タイプ部分に基づいてソースからソース・メディア・タイプを推測します。</span> <span class="merged" id="all.1O5AT.spl2" title="原文 : Helidon media type module has a predefined set of mappings as configured in common/media-type/src/main/resources/io/helidon/common/media/type/default-media-types.properties, including the Config supported formats: .properties, .yaml, .json and .conf.">Helidonメディア・タイプ・モジュールには、構成でサポートされている形式など、<code>common/media-type/src/main/resources/io/helidon/common/media/type/default-media-types.properties</code>で構成されているマッピングの事前定義済セットがあります: <code>.properties</code>, <code>.yaml</code>, <code>.json</code>および<code>.conf</code>。</span> <span class="merged" id="all.1O5AT.spl3" title="原文 : To handle other formats you can implement and register your own io.helidon.common.media.type.spi.MediaTypeDetector Java Service implementations.">他のフォーマットを処理するには、独自の<code>io.helidon.common.media.type.spi.MediaTypeDetector</code> Java Service実装を実装および登録できます。</span> <span class="merged" id="all.1O5AT.spl4" title="原文 : (Typically you would also write and register a config parser to translate that format; see Locating a Parser below.).">(通常は、その形式を変換するための構成パーサーも記述および登録します。次の<router-link @click.native="this.scrollFix('#locating-parser')" to="#locating-parser">「パーサーの検索」</router-link>を参照してください。)。</span> </p>

</div>

<h5 id="_by_application_directive"><span class="merged" id="all.3AB4hc" title="原文 : By Application Directive">アプリケーション・ディレクティブ別</span></h5>
<div class="section">
<p><span class="merged" id="all.FDH0.spl1" title="原文 : Your application can specify what media type to use in interpreting a config source.">アプリケーションでは、構成ソースの解釈に使用するメディア・タイプを指定できます。</span> <span class="merged" id="all.FDH0.spl2" title="原文 : Use this if your application knows the media type but the system might not be able to infer it correctly, either because no type detector would recognize it or because there might be more than one inferred media type.">これは、アプリケーションがメディア・タイプを認識しているが、タイプ検出で認識されないか、複数の推測メディア・タイプが存在する可能性があるために、システムが正しく推測できない可能性がある場合に使用します。</span> </p>

<markup
lang="java"
title="構成ソースの<code>mediaType</code>を指定"
>Config config = Config.create(classpath("props")                             <span class="conum" data-value="1" />
                                    .mediaType("text/x-java-properties")); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3bgmbp" title="原文 : The config system cannot infer the media type because there is no file type in the path props.">パス<code>props</code>にファイル・タイプがないため、構成システムはメディア・タイプを推測できません。</span></li>
<li data-value="2"><span class="merged" id="all.2qdeg9" title="原文 : The developer knows the file is in Java Properties format so specifies the media type explicitly.">開発者は、ファイルが「Javaプロパティ」形式であることを認識しているため、メディア・タイプを明示的に指定します。</span></li>
</ul>
<p><span class="merged" id="all.1R2tTZ.spl1" title="原文 : Note that a file type detector could be written to also inspect the contents of the file to infer the media type.">ファイル・タイプ検出機能は、ファイルの内容を検査してメディア・タイプを推測するためにも書き込まる<em>かも</em>しれません。</span> <span class="merged" id="all.1R2tTZ.spl2" title="原文 : The detectors provided by Helidon only inspect the suffix in the name of the file.">Helidonによって提供される検出機能は、ファイル名のサフィクスのみを検査します。</span> </p>

</div>
</div>

<h4 id="locating-parser"><span class="merged" id="all.3Yn73I" title="原文 : Locating a Parser">パーサーの検索</span></h4>
<div class="section">

<h5 id="_by_inference_from_media_type"><span class="merged" id="all.NINSf" title="原文 : By Inference from media-type"><code>media-type</code>からの推論別</span></h5>
<div class="section">
<p><span class="merged" id="all.2Ipxlj.spl1" title="原文 : Each config parser reports which media types it handles.">各構成パーサーは、処理するメディア・タイプを報告します。</span> <span class="merged" id="all.2Ipxlj.spl2" title="原文 : Once the config system has determined a source&rsquo;s media type, it searches the config parsers associated with the config builder for one that recognizes that media type.">構成システムは、ソースのメディア・タイプを判別すると、構成ビルダーに関連付けられている構成パーサーで、そのメディア・タイプを認識するものを検索します。</span> <span class="merged" id="all.2Ipxlj.spl3" title="原文 : It then uses that parser to translate the config in the source into the in-memory config tree.">次に、そのパーサーを使用して、ソースの構成をインメモリー構成ツリーに変換します。</span> </p>

<p><span class="merged" id="all.3DVSqh.spl1" title="原文 : The application can add one or more parsers to a Config.Builder using the addParser method.">アプリケーションは、<code>addParser</code>メソッドを使用して、<code>Config.Builder</code>に1つ以上のパーサーを追加できます。</span> <span class="merged" id="all.3DVSqh.spl2" title="原文 : This makes the parser available for use by the config sources associated with that builder, but does not directly tie a given parser to a given source.">これにより、パーサーはそのビルダーに関連付けられた構成ソースで使用できるようになりますが、指定されたパーサーを指定されたソースに直接関連付けることはできません。</span> <span class="merged" id="all.3DVSqh.spl3" title="原文 : The builder uses media-type matching to select one of the parsers registered with the builder for each source.">ビルダーは、メディア・タイプの照合を使用して、各ソースのビルダーに登録されているパーサーのいずれかを選択します。</span> </p>

<p><span class="merged" id="all.3akQbk" title="原文 : If the config system cannot locate a parser that matches the media type of a source, it throws a ConfigException when trying to prepare the configuration.">構成システムがソースのメディア・タイプと一致するパーサーを検出できない場合、構成を準備しようとすると<code>ConfigException</code>がスローされます。</span></p>

</div>

<h5 id="_by_application_directive_2"><span class="merged" id="all.3AB4hc.1" title="原文 : By Application Directive">アプリケーション・ディレクティブ別</span></h5>
<div class="section">
<p><span class="merged" id="all.3KGVjJ.spl1" title="原文 : Your application can specify which parser to use for a config source.">アプリケーションで、構成ソースに使用するパーサーを指定できます。</span> <span class="merged" id="all.3KGVjJ.spl2" title="原文 : The AbstractParsableConfigSource.Builder class exposes the parser method, which accepts the ConfigParser to be used for that source."><code>AbstractParsableConfigSource.Builder</code>クラスは、そのソースに使用される<code>ConfigParser</code>を受け入れる<code>parser</code>メソッドを公開します。</span> <span class="merged" id="all.3KGVjJ.spl3" title="原文 : Several methods on ConfigSources such as classpath, directory, and file return this builder class."><code>classpath</code>、<code>directory</code>、<code>file</code>など、<code>ConfigSources</code>のいくつかのメソッドは、このビルダー・クラスを返します。</span> </p>

<p><span class="merged" id="all.3skS0L.spl1" title="原文 : Generally try to rely on media-type matching rather than specifying a given parser for a given source in the application.">一般に、アプリケーション内の特定のソースに対して特定のパーサーを指定するのではなく、メディア・タイプの照合に依存しようとします。</span> <span class="merged" id="all.3skS0L.spl2" title="原文 : This keeps your application more flexible, both by insulating it from implementation classes and by letting it easily take advantage of improvements in or alternatives to the parsers available for a given media type.">これにより、アプリケーションを実装クラスから分離し、特定のメディア・タイプで使用可能なパーサーの改善または代替を簡単に利用できるようにすることで、アプリケーションの柔軟性が向上します。</span> </p>

<markup
lang="java"
title="構成ソースの<code>parser</code>を指定"
>Config config = Config.create(classpath("props")                            <span class="conum" data-value="1" />
                                    .parser(ConfigParsers.properties())); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3bgmbp.1" title="原文 : The config system cannot infer the media type because there is no file type in the path props.">パス<code>props</code>にファイル・タイプがないため、構成システムはメディア・タイプを推測できません。</span></li>
<li data-value="2"><span class="merged" id="all.3qoOEJ" title="原文 : The developer knows the file is in Java Properties format so specifies the properties parser explicitly.">開発者は、ファイルが「Javaプロパティ」形式であることを認識しているため、プロパティ・パーサーを明示的に指定します。</span></li>
</ul>
</div>
</div>
</div>

<h3 id="_parsing_a_config_value_as_config"><span class="merged" id="all.vqzfm" title="原文 : Parsing a Config Value as Config">構成値の構成としての解析</span></h3>
<div class="section">
<p><span class="merged" id="all.2MOAb4.spl1" title="原文 : A config value node might contain an entire config document in String form, but in a format different from the containing document.">構成値ノードには、<code>String</code>形式の構成ドキュメント全体が含まれる場合がありますが、含まれるドキュメントとは異なる形式になります。</span> <span class="merged" id="all.2MOAb4.spl2" title="原文 : Your application can tell the config system to parse such a node as config in a different format and replace the String value node in the original tree with the config tree that results from parsing that String.">アプリケーションでは、異なる形式の構成などのノードを解析し、元のツリーの<code>String</code>値ノードを、その<code>String</code>の解析結果の構成ツリーに置き換えるように構成システムに指示できます。</span> </p>

<p><span class="merged" id="all.CrC1K" title="原文 : In this example, a YAML document contains a JSON document as a leaf.">この例では、YAMLドキュメントにリーフとしてJSONドキュメントが含まれています。</span></p>

<markup
lang="yaml"
title="JSON形式のプロパティを含むYAMLファイル"
>secrets:
    username: "jose"
    password: "^ery$ecretP&amp;ssword"

app: &gt;                             <span class="conum" data-value="1" />
    {
        "greeting": "Hello",
        "page-size": 20,
        "basic-range": [ -20, 20 ]
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2jkE2m" title="原文 : The property app is itself formatted as a JSON document.">プロパティ<code>app</code>自体は、JSONドキュメントとして書式設定されます。</span></li>
</ul>

<h4 id="_specify_key_to_media_type_mapping"><span class="merged" id="all.36nygh" title="原文 : Specify Key-to-media-type Mapping">キーからメディア・タイプへのマッピングの指定</span></h4>
<div class="section">
<markup
lang="java"
title="JSONをノードのメディア・タイプとして指定"
>Config config = Config.create(
        classpath("application.yaml")
                .mediaTypeMapping(                          <span class="conum" data-value="1" />
                        key -&gt; "app".equals(key.toString()) <span class="conum" data-value="2" />
                                ? "application/json"
                                : null));

assert config.get("secrets.username").asString()            <span class="conum" data-value="3" />
        .get().equals("jose");
assert config.get("secrets.password").asString()            <span class="conum" data-value="3" />
        .get().equals("^ery$ecretP&amp;ssword");

assert config.get("app").type() == Type.OBJECT;             <span class="conum" data-value="4" />

assert config.get("app.greeting")                           <span class="conum" data-value="3" />
        .asString().get().equals("Hello");
assert config.get("app.page-size")                          <span class="conum" data-value="3" />
        .asInt().get() == 20;
assert config.get("app.basic-range.0")                      <span class="conum" data-value="3" />
        .asInt().get() == -20;
assert config.get("app.basic-range.1")                      <span class="conum" data-value="3" />
        .asInt().get() == 20;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4Hvh16" title="原文 : The source builder&rsquo;s mediaTypeMapping method accepts a function which returns the appropriate media types (if any) for config keys.">ソース・ビルダーの<code>mediaTypeMapping</code>メソッドは、構成キーの適切なメディア・タイプ(存在する場合)を返す関数を受け入れます。</span></li>
<li data-value="2"><span class="merged" id="all.1a1hAA" title="原文 : The function says to treat the app property value as a JSON document and leave other nodes unchanged.">このファンクションは、<code>app</code>プロパティ値をJSONドキュメントとして扱い、他のノードは変更しないでおくことを示します。</span></li>
<li data-value="3"><span class="merged" id="all.3O1KHn" title="原文 : Other properties are loaded as expected.">その他のプロパティは予想どおりにロードされます。</span></li>
<li data-value="4"><span class="merged" id="all.13ZYjc" title="原文 : Property app is now an structured object node.">プロパティ<code>app</code>は構造化オブジェクト・ノードになりました。</span></li>
</ul>
<p><span class="merged" id="all.3Mn06H" title="原文 : Because the function passed to mediaTypeMapping identifies the app node as a JSON document, the config system selects the config parser that is registered with the builder which also handles the JSON media type."><code>mediaTypeMapping</code>に渡される関数は<code>app</code>ノードをJSONドキュメントとして識別するため、構成システムは、JSONメディア・タイプも処理するビルダーに登録されている構成パーサーを選択します。</span></p>

<p><span class="merged" id="all.3czFYj" title="原文 : Also, note that the config system replaces the original String value node with an object node resulting from parsing that String value as JSON.">また、構成システムは、元の<code>String</code>値ノードを、その<code>String</code>値をJSONとして解析した結果のオブジェクト・ノードに置き換えます。</span></p>

</div>

<h4 id="_specify_key_to_parser_mapping"><span class="merged" id="all.334qNY" title="原文 : Specify Key-to-parser Mapping">キーからパーサーへのマッピングの指定</span></h4>
<div class="section">
<p><span class="merged" id="all.1hBZMl" title="原文 : Alternatively, your application could map config keys to the specific parsers you want to use for parsing those keys&apos; values.">または、アプリケーションで、これらのキー値の解析に使用する特定のパーサーに構成キーをマップすることもできます。</span></p>

<markup
lang="java"
title="「JSONの指定」形式のプロパティのパーサー・インスタンス"
>Config config = Config.create(
        ConfigSources.classpath("application.yaml")
                .parserMapping(                                           <span class="conum" data-value="1" />
                        key -&gt; "app".equals(key.toString())               <span class="conum" data-value="2" />
                                ? HoconConfigParserBuilder.buildDefault()
                                : null));</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.92QCx" title="原文 : Uses the parserMapping method to map keys to parser instances."><code>parserMapping</code>メソッドを使用して、キーをパーサー・インスタンスにマップします。</span></li>
<li data-value="2"><span class="merged" id="all.3QcZDI.spl1" title="原文 : Tells the config system to use the HOCON parser for translating the String value of the app key."><code>app</code>キーの<code>String</code>値の変換にHOCONパーサーを使用するように構成システムに指示します。</span> <span class="merged" id="all.3QcZDI.spl2" title="原文 : (HCON is a superset of JSON.)">(HCONはJSONのスーパーセットです。)</span> </li>
</ul>
<p><span class="merged" id="all.emmCB" title="原文 : As before, the config system replaces the value node in the containing config tree with the config tree resulting from the additional parse.">前述のように、構成システムは、含まれている構成ツリーの値ノードを、追加の解析の結果として得られた構成ツリーに置き換えます。</span></p>

</div>
</div>

<h3 id="Config-Advanced-metaconfig"><span class="merged" id="all.3WTIvH" title="原文 : Loading Config using Meta-configuration">メタ構成を使用した構成のロード</span></h3>
<div class="section">
<p><span class="merged" id="all.1DoabH" title="原文 : Instead of including code in your application to construct config trees from builders, sources, etc., you can instead prepare meta-configuration in a file that declares the sources to load and their attributes.">ビルダーやソースなどから構成ツリーをビルドするコードをアプリケーションに組み込むかわりに、ロードするソースとその属性を宣言するファイルに<em>meta-configuration</em>を準備できます。</span></p>

<p><span class="merged" id="all.1owXyK" title="原文 : You can either specify the meta-config file in your application or allow the config system to search for and load meta-config from a preset list of possible sources.">アプリケーションでメタ構成ファイルを指定するか、構成システムで使用可能なソースの事前設定済リストからメタ構成を検索してロードできます。</span></p>


<h4 id="Config-Advanced-Sources-MetaSource"><span class="merged" id="all.vp6nT" title="原文 : Loading Config by Specifying a Meta-configuration File">メタ構成ファイルの指定による構成のロード</span></h4>
<div class="section">
<p><span class="merged" id="all.A43F0" title="原文 : Your application loads the configuration specified by a meta-config file by invoking the MetaConfig.config(Config) method, passing a config object read from the meta-config source as the argument;">アプリケーションは、meta-configソースから読み込んだconfigオブジェクトを引数に渡し、<a href="./apidocs/io.helidon.config/io/helidon/config/MetaConfig.html#config-io.helidon.config.Config-" id="" target="_blank" ><code>MetaConfig.config(Config)</code></a>メソッドを呼び出して、meta-configファイルで指定された設定をロードします。</span></p>

<p><span class="merged" id="all.4SKYGQ.spl1" title="原文 : If you desire a Config.Builder instead of a fully built Config instance, you can use the Config.Builder.config(Config) method to update the builder with meta configuration.">完全にビルドされた<code>Config</code>インスタンスではなく<code>Config.Builder</code>が必要な場合は、<code>Config.Builder.config(Config)</code>メソッドを使用して、メタ構成でビルダーを更新できます。</span> <span class="merged" id="all.4SKYGQ.spl2" title="原文 : Your application can further fine-tune this builder before using it to construct a Config tree.">アプリケーションでは、このビルダーを使用して<code>Config</code>ツリーを作成する前に、さらに微調整できます。</span> <span class="merged" id="all.4SKYGQ.spl3" title="原文 : The config system interprets the meta-config as directions for how to build a config tree, rather than as the config data itself.">構成システムは、メタ構成を構成データ自体としてではなく、構成ツリーのビルド方法の指示として解釈します。</span> </p>

</div>

<h4 id="Config-Advanced-Config-MetaConfig"><span class="merged" id="all.3idbFO" title="原文 : Loading Config from an Implicit Meta-configuration File">暗黙的メタ構成ファイルからの構成のロード</span></h4>
<div class="section">
<p><span class="merged" id="all.hAKqH.spl1" title="原文 : The introduction section shows how to use Config.create() to load config from one of several possible default config files."><router-link @click.native="this.scrollFix('#config/01_introduction.adoc')" to="#config/01_introduction.adoc">「概要」</router-link>セクションでは、<code>Config.create()</code>を使用して、使用可能なデフォルトの構成ファイルのいずれかから構成をロードする方法を示します。</span> <span class="merged" id="all.hAKqH.spl2" title="原文 : That same method also searches for one of several possible default meta-config files from which to load config sources to be used for the default config.">この同じメソッドで、デフォルト構成に使用される構成ソースのロード元となる、使用可能なデフォルトのメタ構成ファイルのいずれかも検索されます。</span> </p>

<p><span class="merged" id="all.1tMnSx" title="原文 : The Config.create() method determines the default configuration from the following search:"><code>Config.create()</code>メソッドは、次の検索からデフォルト構成を決定します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1tTrFw" title="原文 : Attempt to load meta-config from at most one of the following files, first on the file system in current directory, then on classpath, checked in this order:">最初に現在のディレクトリのファイル・システム、次にクラスパスで、次のいずれかのファイルから<em>meta-config</em>をロードしようとすると、次の順序でチェックされます:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4Y6bso" title="原文 : meta-config.yaml - meta configuration file in YAML format"><code>meta-config.yaml</code> - YAML形式のメタ構成ファイル</span>

</li>
<li>
<span class="merged" id="all.1gVlAH" title="原文 : meta-config.conf - meta configuration file in HOCON format"><code>meta-config.conf</code> - HOCON形式のメタ構成ファイル</span>

</li>
<li>
<span class="merged" id="all.1hWJls" title="原文 : meta-config.json - meta configuration file in JSON format"><code>meta-config.json</code> - JSON形式のメタ構成ファイル</span>

</li>
<li>
<span class="merged" id="all.1N8jUF" title="原文 : meta-config.properties - meta configuration file in Java Properties format"><code>meta-config.properties</code> - 「Javaプロパティ」形式のメタ構成ファイル</span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.HRa0y" title="原文 : Otherwise, load config from:">それ以外の場合は、次の場所から<em>config</em>をロードします:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.17RCbW" title="原文 : environment variables, and">環境変数</span>

</li>
<li>
<span class="merged" id="all.OfAQU" title="原文 : Java system properties, and">Javaシステム・プロパティ</span>

</li>
<li>
<span class="merged" id="all.FltsI" title="原文 : at most one of the following, checking in this order:">次のいずれかの順序でチェックします:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4Q2nWZ" title="原文 : application.yaml - configuration file in YAML format"><code>application.yaml</code> - YAML形式の構成ファイル</span>

</li>
<li>
<span class="merged" id="all.kK70B" title="原文 : application.conf - configuration file in HOCON format"><code>application.conf</code> - HOCON形式の構成ファイル</span>

</li>
<li>
<span class="merged" id="all.3KHHcM" title="原文 : application.json - configuration file in JSON format"><code>application.json</code> - JSON形式の構成ファイル</span>

</li>
<li>
<span class="merged" id="all.2k5sJX" title="原文 : application.properties - configuration file in Java Properties format"><code>application.properties</code> - 「Javaプロパティ」形式の構成ファイル</span>

</li>
</ol>
</li>
</ol>
</li>
</ol>
<p><span class="merged" id="all.1pDDru.spl1" title="原文 : Remember that the config system will check for these default meta-config and config files only if the classpath includes the corresponding parsers.">構成システムは、クラスパスに対応するパーサーが含まれている場合にのみ、これらのデフォルトのメタ構成ファイルおよび構成ファイルをチェックすることに注意してください。</span> <span class="merged" id="all.1pDDru.spl2" title="原文 : The introduction section on built-in formats section describes this further.">これについては、<router-link @click.native="this.scrollFix('#built-in-formats')" to="#built-in-formats">「組込み形式」</router-link>の項で詳しく説明しています。</span> </p>

</div>

<h4 id="_meta_configuration_file_format"><span class="merged" id="all.25345r" title="原文 : Meta-configuration File Format">メタ構成ファイルの形式</span></h4>
<div class="section">
<p><span class="merged" id="all.3sxkkf" title="原文 : See javadoc Config.Builder.config(Config).">javadoc <a href="./apidocs/io.helidon.config/io/helidon/config/Config.Builder.html#config-io.helidon.config.Config-" id="" target="_blank" ><code>Config.Builder.config(Config)</code></a>を参照してください。</span></p>

<p><span class="merged" id="all.4GpbMU.spl1" title="原文 : Meta configuration can be used to configure various options that are available on configuration builder.">メタ構成を使用して、構成ビルダーで使用可能な様々なオプションを構成できます。</span> <span class="merged" id="all.4GpbMU.spl2" title="原文 : It must contain at least the list of sources to use to load configuration from.">少なくとも、構成のロード元として使用するソースのリストが含まれている必要があります。</span> </p>

<p><span class="merged" id="all.20FMUz.spl1" title="原文 : The root sources property contains an array (ordered) of objects defining each config source to be used.">ルート<code>sources</code>プロパティには、使用する各構成ソースを定義するオブジェクトの配列(順序付き)が含まれます。</span> <span class="merged" id="all.20FMUz.spl2" title="原文 : Each element of the array must contain at least the type property, determining the config source type (such as system-properties, file).">配列の各要素には、構成ソース・タイプ(<code>system-properties</code>、<code>file</code>など)を決定する<code>type</code>プロパティが少なくとも含まれている必要があります。</span> <span class="merged" id="all.20FMUz.spl3" title="原文 : It may also contain a properties property with additional configuration of the config source.">構成ソースの追加構成を含む<code>properties</code>プロパティが含まれている場合もあります。</span> </p>


<h5 id="MetaConfig-built-in-types"><span class="merged" id="all.4YUGHz"  title="原文:: Built-in Types">組込みタイプ</span></h5>
<div class="section">
<p><span class="merged" id="all.3XIkJb" title="原文 : The config system supports these built-in types:">構成システムでは、次の組込みタイプがサポートされます:</span></p>

<div class="block-title"><span class="merged" id="all.1cxTU7" title="原文 : Built-in Meta-configuration Types"><span>組込みメタ構成タイプ</span></span></div>
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
<th><span class="merged" id="all.p0YxL.4"  title="原文:: Type">タイプ</span></th>
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
<td class=""><span class="merged" id="all.3kDdAI.1"  title="原文: url"><code>url</code></span></td>
<td class=""><span class="merged" id="all.2mgL9S" title="原文 : Specified URL is read as a config source">指定されたURLは構成ソースとして読み取られます</span></td>
<td class=""><span class="merged" id="all.1Kiy1J"  title="原文: ConfigSources.url(URL)"><code>ConfigSources.url(URL)</code></span></td>
<td class=""><span class="merged" id="all.3IU67I" title="原文 : url - URL from which to load the config"><code>url</code> - 構成のロード元のURL</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1kBP8j"  title="原文: prefixed"><code>prefixed</code></span></td>
<td class=""><span class="merged" id="all.2fDGO0" title="原文 : Associated config source is loaded with the specified prefix">関連付けられた構成ソースは、指定されたプレフィクスでロードされます</span></td>
<td class=""><span class="merged" id="all.45Zha8"  title="原文: ConfigSources.prefixed(String,Supplier)"><code>ConfigSources.prefixed(String,Supplier)</code></span></td>
<td class=""><doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>

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
<p><span class="merged" id="all.VvHIf.spl1" title="原文 : Except for the system-properties and environment-variables types, the meta-config properties section for a source can also specify any optional settings for the corresponding config source type."><code>system-properties</code>および<code>environment-variables</code>タイプを除き、ソースのメタ構成<code>properties</code>セクションでは、対応する構成ソース・タイプのオプション設定を指定することもできます。</span> <span class="merged" id="all.VvHIf.spl2" title="原文 : The JavaDoc for the related config source type builders lists the supported properties for each type.">関連する構成ソース・タイプ・ビルダーのJavaDocには、各タイプでサポートされるプロパティがリストされています。</span> <span class="merged" id="all.VvHIf.spl3" title="原文 : (For example, FileConfigSource.FileBuilder.)">(たとえば、<a href="./apidocs/io.helidon.config/io/helidon/config/internal/FileConfigSource.FileBuilder.html" id="" target="_blank" ><code>FileConfigSource.FileBuilder</code></a>。)</span> </p>

<p><span class="merged" id="all.3ICR7v.spl1" title="原文 : Here is example meta-configuration in YAML format.">YAML形式のメタ構成の例を次に示します。</span> <span class="merged" id="all.3ICR7v.spl2" title="原文 : Note how the properties sections are at the same level as the type or class within a sources array entry."><code>properties</code>セクションが<code>sources</code>配列エントリ内の<code>type</code>または<code>class</code>と同じレベルにあることに注意してください。</span> </p>

<markup
lang="yaml"
title="クラスパスで使用可能なすべての組込みソースを示すメタ構成<code>meta-config.yaml</code>"
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
      polling-strategy:
        type: "watch"
  - type: "prefixed"
    properties:
      key: "app"
      type: "classpath"
      properties:
        resource: "app.conf"
  - type: "classpath"
    properties:
      resource: "application.conf"</markup>

<p><span class="merged" id="all.11hztY" title="原文 : Note that the example shows how your meta-configuration can configure optional features such as polling strategies and retry policies for config sources.">この例では、構成ソースのポーリング戦略や再試行ポリシーなどのオプション機能をメタ構成でどのように構成できるかを示します。</span></p>

</div>
</div>

<h4 id="_meta_config_for_custom_source_types"><span class="merged" id="all.1o4bRN" title="原文 : Meta-config for Custom Source Types">カスタム・ソース・タイプのメタ構成</span></h4>
<div class="section">
<p><span class="merged" id="all.1iGSEZ" title="原文 : You can use meta-config to set up custom config source types as well as the built-in ones described above.">メタ構成を使用して、カスタム構成ソース・タイプおよび前述の組込みソース・タイプを設定できます。</span></p>

<p><span class="merged" id="all.30CsTq.spl1" title="原文 : A custom config source can easily support meta configuration by implementing the io.helidon.config.spi.ConfigSourceProvider interface and registering it as a Java service loader service.">カスタム構成ソースは、<code>io.helidon.config.spi.ConfigSourceProvider</code>インタフェースを実装し、Javaサービス・ローダー・サービスとして登録することで、メタ構成を簡単にサポートできます。</span> <span class="merged" id="all.30CsTq.spl2" title="原文 : Note that the provider can be used for multiple ConfigSource implementations.">プロバイダは、複数のConfigSource実装に使用できます。</span> </p>

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

title="ファイル<code>META-INF/services/io.helidon.config.spi.ConfigSourceProvider</code>"
>io.helidon.examples.MyConfigSourceProvider</markup>

<p><span class="merged" id="all.xLuod" title="原文 : Now you can use the following meta configuration:">次のメタ構成を使用できるようになりました:</span></p>

<markup
lang="yaml"

>sources:
  - type: "system-properties"
  - type: "environment-variables"
  - type: "my-type"
    properties:
        my-property: "some-value"</markup>

<p><span class="merged" id="all.41lZBQ.spl1" title="原文 : Note that it is the AbstractSource SPI class that provides support for polling strategies and retry policies.">ポーリング戦略および再試行ポリシーをサポートする<code>AbstractSource</code> SPIクラスであることに注意してください。</span> <span class="merged" id="all.41lZBQ.spl2" title="原文 : If you create custom config sources that should also offer this support be sure they extend AbstractSource or one of its subclasses to inherit this behavior.">このサポートも提供するカスタム構成ソースを作成する場合は、<code>AbstractSource</code>またはそのサブクラスのいずれかを拡張してこの動作を継承するようにしてください。</span> </p>

</div>

<h4 id="_loading_config_using_meta_configuration"><span class="merged" id="all.3WTIvH.1" title="原文 : Loading Config using Meta-configuration">メタ構成を使用した構成のロード</span></h4>
<div class="section">
<p><span class="merged" id="all.4N9ZZO" title="原文 : Here is how your application can use meta-configuration in a particular resource on the classpath to load a Config tree:">アプリケーションがクラスパスの特定のリソースでメタ構成を使用して<code>Config</code>ツリーをロードする方法を次に示します:</span></p>

<markup
lang="java"
title="メタ構成を使用した構成のロード"
>Config metaConfig = Config.create(classpath("config-meta-all.conf")); <span class="conum" data-value="1" />
Config config = MetaConfig.config(metaConfig); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2XXxSt" title="原文 : We create a meta configuration from our meta configuration source">メタ構成ソースからメタ構成を作成</span></li>
<li data-value="2"><span class="merged" id="all.2fPqRD" title="原文 : This method populates the config sources from all the actual sources declared in the meta-configuration.">このメソッドは、メタ構成で宣言されたすべての実際のソースから構成ソースを移入します。</span></li>
</ul>
</div>

<h4 id="_meta_config_for_polling_strategies_and_retry_policies"><span class="merged" id="all.1fGbKA" title="原文 : Meta-config for Polling Strategies and Retry Policies">ポーリング戦略および再試行ポリシーのメタ構成</span></h4>
<div class="section">
<p><span class="merged" id="all.1BiK7B.spl1" title="原文 : Your meta-config can include the set-up for polling strategies and retry policies if the config source supports them.">メタ構成には、ポーリング戦略の設定を含めることができ、構成ソースでサポートされている場合はポリシーを再試行できます。</span> <span class="merged" id="all.1BiK7B.spl2" title="原文 : Declare them in a way similar to how you declare the config sources themselves: by type and with accompanying properties.">構成ソース自体の宣言方法と同様の方法で宣言: <code>type</code>および付随する<code>properties</code>による。</span> </p>

<div class="block-title"><span class="merged" id="all.39euUN" title="原文 : Meta-config Support for Built-in Polling Strategies"><span>組込みポーリング戦略のメタ構成サポート</span></span></div>
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
<th><span class="merged" id="all.JUOSC.5"  title="原文:: Usage">使用方法</span></th>
<th><span class="merged" id="all.3fmb7X"  title="原文:: Properties">プロパティ</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2XMivm"  title="原文: regular"><code>regular</code></span></td>
<td class=""><span class="merged" id="all.32kwYw" title="原文 : Periodic polling - See PollingStrategies.regular method">定期的なポーリング - <a href="./apidocs/io.helidon.config/io/helidon/config/PollingStrategies.html#regular-java.time.Duration-" id="" target="_blank" ><code>PollingStrategies.regular</code></a>メソッドを参照</span></td>
<td class=""><span class="merged" id="all.6KG3z" title="原文 : interval (Duration) - indicating how often to poll; e.g., PT15S represents 15 seconds"><code>interval</code> (<code>Duration</code>) - ポーリングの頻度を示す(<code>PT15S</code>は15秒を表すなど)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1KBOVB"  title="原文: watch"><code>watch</code></span></td>
<td class=""><span class="merged" id="all.2j6ql8" title="原文 : Filesystem monitoring - See PollingStrategies.watch method">ファイルシステムのモニタリング - <a href="./apidocs/io.helidon.config/io/helidon/config/PollingStrategies.html#watch-java.nio.file.Path-" id="" target="_blank" ><code>PollingStrategies.watch</code></a>メソッドを参照</span></td>
<td class=""><span class="merged" id="all.3HmBZp" title="原文 : path - file system path to the classpath, file, or directory to monitor"><code>path</code> - モニターする<code>classpath</code>、<code>file</code>または<code>directory</code>へのファイル・システム・パス</span></td>
</tr>
</tbody>
</table>
</div>
<div class="block-title"><span class="merged" id="all.1ugtvz" title="原文 : Meta-config Support for Built-in Retry Policies"><span>組込みの再試行ポリシーに対するメタ構成のサポート</span></span></div>
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
<th><span class="merged" id="all.JUOSC.6"  title="原文:: Usage">使用方法</span></th>
<th><span class="merged" id="all.3fmb7X.1"  title="原文:: Properties">プロパティ</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.13ayqE"  title="原文: repeat"><code>repeat</code></span></td>
<td class=""><span class="merged" id="all.47vhmz" title="原文 : Regularly-scheduled - see RetryPolicies.repeat.">Regularly-scheduled - <a href="./apidocs/io.helidon.config/io/helidon/configRetryPolicies.html#repeat-int-" id="" target="_blank" ><code>RetryPolicies.repeat</code></a>を参照してください。</span></td>
<td class=""><doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>

<p><span class="merged" id="all.1RpcLo" title="原文 : retries (int) - number of retries to perform "><code>retries</code> (<code>int</code>) - 実行する再試行回数<br></span></p>

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
<p><span class="merged" id="all.2aQtfk.spl1" title="原文 : To specify a custom polling strategy or custom retry policy, implement the interface and then implement the io.helidon.config.spi.PollingStrategyProvider or io.helidon.config.spi.RetryPolicyProvider to enable your custom implementations for meta configuration.">カスタム・ポーリング戦略またはカスタム再試行ポリシーを指定するには、インタフェースを実装し、<code>io.helidon.config.spi.PollingStrategyProvider</code>または<code>io.helidon.config.spi.RetryPolicyProvider</code>を実装して、メタ構成のカスタム実装を有効にします。</span> <span class="merged" id="all.2aQtfk.spl2" title="原文 : You can then use any custom properties - these are provided as a Config instance to the create method of the Provider implementation.">その後、任意のカスタム・プロパティを使用できます - これらは、プロバイダ実装の<code>create</code>メソッドに<code>Config</code>インスタンスとして提供されます。</span> </p>

<p><span class="merged" id="all.2gD8mL" title="原文 : See RetryPolicy and PollingStrategy JavaDoc sections."><a href="./apidocs/io.helidon.config/io/helidon/config/spi/RetryPolicy.html" id="" target="_blank" ><code>RetryPolicy</code></a>および<a href="./apidocs/io.helidon.config/io/helidon/config/spi/PollingStrategy.html" id="" target="_blank" ><code>PollingStrategy</code></a> JavaDocのセクションを参照してください。</span></p>

</div>
</div>
</div>

<h2 id="_configuration_key"><span class="merged" id="all.1Ov129.4"  title="原文:: Configuration Key">構成キー</span></h2>
<div class="section">
<p><span class="merged" id="all.1yiGYe.spl1" title="原文 : As described in the hierarchical features section each config node (except the root) has a non-null key."><router-link @click.native="this.scrollFix('#accessByKey')" to="#accessByKey">「階層機能セクション」</router-link>で説明されているように、各構成ノード(ルートを除く)にはnull以外のキーがあります。</span> <span class="merged" id="all.1yiGYe.spl2" title="原文 : Here is the formal definition of what keys can be:">キーの正式な定義は次のとおりです:</span> </p>

<markup
lang="abnf"
title="config keyのABNF構文"
>config-key = *1( key-token *( "." key-token ) )
 key-token = *( unescaped / escaped )
 unescaped = %x00-2D / %x2F-7D / %x7F-10FFFF
           ; %x2E ('.') and %x7E ('~') are excluded from 'unescaped'
   escaped = "~" ( "0" / "1" )
           ; representing '~' and '.', respectively</markup>

<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.1"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.kr1We.spl1" title="原文 : To emphasize, the dot character (&ldquo;.&rdquo;) has special meaning as a name separator in keys.">強調するために、ドット文字(.)はキーの名前セパレータとして特別な意味を持ちます。</span> <span class="merged" id="all.kr1We.spl2" title="原文 : To include a dot as a character in a key escape it as &ldquo;~1&rdquo;.">ドットをキーに文字として含めるには、"~1"としてエスケープします。</span> <span class="merged" id="all.kr1We.spl3" title="原文 : To include a tilda escape it as &ldquo;~0&rdquo;.">ティルダを含めるには、"~0"としてエスケープします。</span> </p>
</p>
</div>
<p><span class="merged" id="all.7LDSR" title="原文 : For example, the following configuration file contains two object nodes with names oracle and oracle.com.">たとえば、次の構成ファイルには、<code>oracle</code>および<code>oracle.com</code>という名前のオブジェクト・ノードが含まれています。</span></p>

<markup
lang="json"
title="キーにドット文字が含まれる<code>application.json</code>の例"
>{
    "oracle" : {
        "com" : true,
        "cz" : false
    },
    "oracle.com" : {
        "secured" : true
    }
}</markup>

<markup
lang="java"
title="ノード名にドット文字を使用した構成の操作"
>Config config = Config.create(classpath("application.json"));

// node `oracle`
assert config.get("oracle.com").asBoolean().get() == true;                   <span class="conum" data-value="1" />
assert config.get("oracle").get("com").asBoolean().get() == true;            <span class="conum" data-value="1" />
assert config.get("oracle.com").type() == Type.VALUE;                        <span class="conum" data-value="2" />
assert config.get("oracle.com").name().equals("com");                        <span class="conum" data-value="3" />
// node `oracle.com`
assert config.get("oracle~1com.secured").asBoolean().get() == true;          <span class="conum" data-value="4" />
assert config.get(Key.escapeName("oracle.com"))                              <span class="conum" data-value="5" />
        .get("secured").asBoolean().get() == true;
assert config.get(Key.escapeName("oracle.com")).type() == Type.OBJECT;       <span class="conum" data-value="6" />
assert config.get(Key.escapeName("oracle.com")).name().equals("oracle.com"); <span class="conum" data-value="7" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.cNBnY.spl1" title="原文 : Work with the first oracle object as usual.">最初の<code>oracle</code>オブジェクトを通常どおり操作します。</span> <span class="merged" id="all.cNBnY.spl2" title="原文 : As always you can use the fully-qualified key oracle.com or chain get(key) calls to access the com property value.">常に、完全修飾キー<code>oracle.com</code>またはチェーン<code>get(key)</code>コールを使用して、<code>com</code>プロパティ値にアクセスできます。</span> </li>
<li data-value="2"><span class="merged" id="all.2C5dNi" title="原文 : Config node &quot;oracle&quot; / &quot;com&quot; is a leaf node (has type VALUE)…​">構成ノード<code>"oracle"</code> / <code>"com"</code>はリーフ・ノード(<code>VALUE</code>タイプ)です…</span></li>
<li data-value="3"><span class="merged" id="all.XrapW" title="原文 : …​ and has the name com (the last token in its key).">…名前は<code>com</code> (キーの最後のトークン)です。</span></li>
<li data-value="4"><span class="merged" id="all.2y3kuO.spl1" title="原文 : The second object has name oracle.com.">もう一方のオブジェクトの名前は<code>oracle.com</code>です。</span> <span class="merged" id="all.2y3kuO.spl2" title="原文 : The code must escape the dot in the node&rsquo;s name using oracle~1com.">コードでは、<code>oracle~1com</code>を使用してノード名のドットをエスケープする必要があります。</span> </li>
<li data-value="5"><span class="merged" id="all.2sc5CZ" title="原文 : Or, use the utility method Config.Key.escapeName(name) to escape dots or tildes that might be in the node&rsquo;s name, in this example in oracle.com.">または、ユーティリティ・メソッド<code>Config.Key.escapeName(name)</code>を使用して、ノード名(この例では<code>oracle.com</code>)に含まれるドットまたはチルダをエスケープします。</span></li>
<li data-value="6"><span class="merged" id="all.2REJZS" title="原文 : The config node &quot;oracle.com&quot; has type OBJECT…​">構成ノード<code>"oracle.com"</code>のタイプは<code>OBJECT</code>…です</span></li>
<li data-value="7"><span class="merged" id="all.AZZn0" title="原文 : …​and name &quot;oracle.com&quot;.">…<code>"oracle.com"</code>に名前を付けます。</span></li>
</ul>
</div>

<h2 id="filters-and-overrides"><span class="merged" id="all.22v2AT" title="原文 : Filter, Overrides, and Token Substitution">フィルタ、オーバーライドおよびトークンの置換</span></h2>
<div class="section">
<p><span class="merged" id="all.1v0Ou7.spl1" title="原文 : When your application retrieves a config value, the config system can transform it before returning the value, according to filters, overrides, and tokens.">アプリケーションが構成値を取得すると、構成システムは、<em>「フィルタ」</em>、<em>「オーバーライド」</em>および<em>「トークン」</em>に従って、値を返す前に構成値を変換できます。</span> <span class="merged" id="all.1v0Ou7.spl2" title="原文 : The config system provides some built-in instances of these you can use, and you can add your own as described in the sections which describe filters and overrides.">構成システムには、使用できるこれらの組込みインスタンスがいくつか用意されており、<router-link @click.native="this.scrollFix('#Config-SPI-ConfigFilter')" to="#Config-SPI-ConfigFilter">filters</router-link>および<router-link @click.native="this.scrollFix('#Config-SPI-OverrideSource')" to="#Config-SPI-OverrideSource">overrides</router-link>について説明する項の説明に従って独自のインスタンスを追加できます。</span> </p>

<p><span class="merged" id="all.35BAj6" title="原文 : Your application can add filters and overrides explicitly to a config builder and the config system by default uses the Java service loader mechanism to locate all available filters and overrides and add them automatically to all config builders (unless your code disables that behavior for a given builder).">アプリケーションは構成ビルダーにフィルタおよびオーバーライドを明示的に追加でき、デフォルトでは、Javaサービス・ローダー・メカニズムを使用して、使用可能なすべてのフィルタおよびオーバーライドを検索し、それらをすべての構成ビルダーに自動的に追加します(コードで特定のビルダーの動作が無効になっていない場合)。</span></p>


<h3 id="_filters"><span class="merged" id="all.3Mg1M9.1"  title="原文:: Filters">フィルタ</span></h3>
<div class="section">
<p><span class="merged" id="all.1gThPD.spl1" title="原文 : Each filter accepts a key and the value as defined in the source, and returns the value to be used.">各フィルタは、ソースで定義されているキーと値を受け入れ、使用する値を返します。</span> <span class="merged" id="all.1gThPD.spl2" title="原文 : The filter can leave the value unchanged or alter it, as it sees fit.">フィルタでは、適合するように値を変更せずにそのままにすることも、変更することもできます。</span> </p>

<p><span class="merged" id="all.2XstqP" title="原文 : The built-in value-resolving filter enables the token substitution described below.">組込み<a href="./apidocs/io.helidon.config/io/helidon/config/ConfigFilters.html#valueResolving--" id="" target="_blank" >value-resolving</a>フィルタを使用すると、次に説明するトークンの置換が可能になります。</span></p>

<p><span class="merged" id="all.2KUD5F" title="原文 : See the ConfigFilter JavaDoc for more information.">詳細は、<a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigFilter.html" id="" target="_blank" ><code>ConfigFilter</code></a> JavaDocを参照してください。</span></p>

</div>

<h3 id="_overrides"><span class="merged" id="all.1L0wHZ"  title="原文:: Overrides">オーバーライド</span></h3>
<div class="section">
<p><span class="merged" id="all.pKZ3f" title="原文 : The overrides feature allows you to create an external document containing key/value pairs which replace the value otherwise returned for the name, and then add that document as an override source to a config builder.">オーバーライド機能を使用すると、キーと値のペアを含む外部ドキュメントを作成して、名前に対して返された値を置き換え、そのドキュメントをオーバーライド・ソースとして構成ビルダーに追加できます。</span></p>

<p><span class="merged" id="all.2P6s5t" title="原文 : There are some key differences between overrides and filters.">オーバーライドとフィルタには、いくつかの重要な違いがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4AsgiC" title="原文 : Because overrides are loaded from sources those sources can change while your application runs and so the overrides they that prescribe can change.">オーバーライドはソースからロードされるため、これらのソースはアプリケーションの実行中に変更される可能性があるため、規定するオーバーライドは変更される可能性があります。</span></p>

</li>
<li>
<p><span class="merged" id="all.37FhtN" title="原文 : The override document can use wildcards in key expressions.">オーバーライド・ドキュメントでは、キー式でワイルドカードを使用できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.Tlm0p" title="原文 : Overrides can affect only keys that already exist in the original source; filters can supply values even if the key is absent from the config source.">オーバーライドは、元のソースにすでに存在するキーにのみ影響します。フィルタは、キーが構成ソースにない場合でも値を提供できます。</span></p>

</li>
</ul>
<p><span class="merged" id="all.1sFNU5.spl1" title="原文 : Each override entry consists of a Java properties-format definition.">各オーバーライド・エントリは、Javaプロパティ形式の定義で構成されます。</span> <span class="merged" id="all.1sFNU5.spl2" title="原文 : The key is an expression (which can use wildcards) to match config keys read from the current config sources, and the override value is the new value for any key matching the key expression from that entry.">キーは、現在の構成ソースから読み取られた構成キーを照合する式(ワイルドカードを使用できます)であり、オーバーライド値は、そのエントリのキー式に一致するすべてのキーの新しい値です。</span> <span class="merged" id="all.1sFNU5.spl3"  title="原文:: Order is important.">順序は重要です。</span> <span class="merged" id="all.1sFNU5.spl4" title="原文 : The config system tests every key expression/value pair one by one in the order they appear in the overrides sources.">configシステムは、オーバーライド・ソースに出現する順序で、すべてのキー式/値のペアを1対ずつテストします。</span> <span class="merged" id="all.1sFNU5.spl5" title="原文 : Once the config system finds an override entry in which the key expression matches the configuration key, the system returns that entry&rsquo;s value for the key being processed.">キー式が構成キーと一致するオーバーライド・エントリが検出されると、処理中のキーに対するそのエントリの値が返されます。</span> </p>

<p><span class="merged" id="all.x5MBj" title="原文 : See the OverrideSource JavaDoc for more detail.">詳細は、<a href="./apidocs/io.helidon.config/io/helidon/config/spi/OverrideSource.html" id="" target="_blank" ><code>OverrideSource</a></code> JavaDocを参照してください。</span></p>

</div>

<h3 id="_tokens"><span class="merged" id="all.3BW5Q8"  title="原文:: Tokens">トークン</span></h3>
<div class="section">
<p><span class="merged" id="all.3dHb6H.spl1" title="原文 : A token reference is a key token starting with $, optionally enclosed between { and }, i.e. $ref, ${ref}.">トークン参照は、<code>$</code>から始まり、オプションで<code>{</code>と<code>}</code> (<code>$ref</code>、<code>${ref}</code>など)で囲まれた主要なトークンです。</span> <span class="merged" id="all.3dHb6H.spl2" title="原文 : Even a key composed of more than one token can be referenced in another key, i.e. ${env.ref}.">複数のトークンで構成されるキーであっても、別のキー(つまり、<code>${env.ref}</code>)で参照できます。</span> </p>

<p><span class="merged" id="all.2hfyvE.spl1" title="原文 : As an example use case, you can use token references to declare the default values (see resolving-tokens.yaml below), while the references may be resolved in another config source, which identifies a current environment (see env.yaml examples below).">ユースケースの例として、トークン参照を使用してデフォルト値を宣言できます(次の<code>resolving-tokens.yaml</code>を参照)。一方、参照は、現在の環境を識別する別の構成ソースで解決できます(次の<code>env.yaml</code>の例を参照)。</span> <span class="merged" id="all.2hfyvE.spl2" title="原文 : You can then use the same overrides for different environments, say test and prod.">その後、異なる環境(<code>test</code>や<code>prod</code>など)に同じオーバーライドを使用できます。</span> <span class="merged" id="all.2hfyvE.spl3" title="原文 : The configuration in each environment is then overridden with a different values using wildcards (see overrides.properties below).">各環境の構成は、ワイルドカードを使用して異なる値でオーバーライドされます(次の<code>overrides.properties</code>を参照)。</span> </p>

<markup
lang="java"
title="<code>overrides.properties</code>ファイルのオーバーライド定義を使用した<code>Config</code>の初期化"
>Config config = Config.builder()
        .overrides(OverrideSources.file("conf/overrides.properties")) <span class="conum" data-value="1" />
        .sources(file("conf/env.yaml"),                               <span class="conum" data-value="2" />
                 classpath("resolving-tokens.yaml"))                  <span class="conum" data-value="3" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1zZBHE" title="原文 : Loads overrides from the specified file.">指定されたファイルから<em>overrides</em>をロードします。</span></li>
<li data-value="2"><span class="merged" id="all.1gGGt9" title="原文 : A deployment-specific environment configuration file.">デプロイメント固有の環境構成ファイル。</span></li>
<li data-value="3"><span class="merged" id="all.2LZCpe" title="原文 : A default configuration containing token references that are resolved using the environment-specific override.">環境固有のオーバーライドを使用して解決されるトークン参照を含むデフォルト構成。</span></li>
</ul>
</div>
</div>

<h2 id="_executors_for_asynchronous_config_activity"><span class="merged" id="all.34n7Y4" title="原文 : Executors for Asynchronous Config Activity">非同期構成アクティビティのエグゼキュータ</span></h2>
<div class="section">
<p><span class="merged" id="all.3YWb1n" title="原文 : Various parts of the config system work asychronously:">構成システムの様々な部分が非同期的に動作します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.14xQtz" title="原文 : polling strategies to detect changes to config sources,">構成ソースへの変更を検出するポーリング戦略</span></p>

</li>
<li>
<p><span class="merged" id="all.ZqVqC" title="原文 : publishers to notify your application when such changes occur,">このような変更が発生したときにアプリケーションに通知するパブリッシャ</span></p>

</li>
<li>
<p><span class="merged" id="all.3kyNHI" title="原文 : Config instances which subscribe to and respond to change notifications for their underlying sources, and">基礎となるソースの変更通知にサブスクライブして応答する<code>Config</code>インスタンス</span></p>

</li>
<li>
<p><span class="merged" id="all.4QNgJs" title="原文 : retry policies (which might wait between retries).">再試行ポリシー(再試行間で待機する可能性があります)。</span></p>

</li>
</ul>
<p><span class="merged" id="all.j6Z2h.spl1" title="原文 : Each of these uses an executor to perform its work.">これらはそれぞれエグゼキュータを使用して作業を実行します。</span> <span class="merged" id="all.j6Z2h.spl2" title="原文 : The config system provides default executors, but your application can specify different ones if necessary.">構成システムにはデフォルトのエグゼキュータが用意されていますが、アプリケーションでは必要に応じて異なるエグゼキュータを指定できます。</span> </p>


<h3 id="_executors_for_polling_strategy"><span class="merged" id="all.3TkTY0" title="原文 : Executors for Polling Strategy">ポーリング戦略のエグゼキュータ</span></h3>
<div class="section">
<p><span class="merged" id="all.DAfkY.spl1" title="原文 : The two methods PollingStrategies.regular(Duration) and PollingStrategies.watch(Path) return builders for their respective strategies.">この2つのメソッドでは、<code>PollingStrategies.regular(Duration)</code>と<code>PollingStrategies.watch(Path)</code>がそれぞれの戦略のビルダーを返します。</span> <span class="merged" id="all.DAfkY.spl2" title="原文 : Both builders expose the executor method which your application can invoke, passing a java.util.concurrent.ScheduledExecutorService instance it wants used for the polling work.">どちらのビルダーも、アプリケーションが起動できる<code>executor</code>メソッドを公開し、ポーリング作業に使用する<code>java.util.concurrent.ScheduledExecutorService</code>インスタンスを渡します。</span> <span class="merged" id="all.DAfkY.spl3" title="原文 : By default each polling strategy instance uses a separate thread pool executor.">デフォルトでは、各ポーリング戦略インスタンスは個別のスレッド・プール・エグゼキュータを使用します。</span> </p>

<p><span class="merged" id="all.2SUVFn" title="原文 : The following example shares the same executor for two different polling strategy instances.">次の例では、2つの異なるポーリング戦略インスタンスに対して同じエグゼキュータを共有します。</span></p>

<markup
lang="java"
title="ポーリング戦略エグゼキュータのカスタマイズ"
>ScheduledExecutorService executor = Executors.newScheduledThreadPool(2); <span class="conum" data-value="1" />

Config config = Config.create(
        ConfigSources.file("conf/dev.properties")
                .pollingStrategy(
                        PollingStrategies.regular(Duration.ofSeconds(2)) <span class="conum" data-value="2" />
                                .executor(executor)),                    <span class="conum" data-value="3" />
        ConfigSources.create("conf/config.properties")
                .pollingStrategy(
                        path -&gt; PollingStrategies.watch(path)            <span class="conum" data-value="4" />
                                .executor(executor)));                   <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.439btr" title="原文 : Prepares a thread pool executor with core pool size set 2 to be shared by all polling strategies.">コア・プール・サイズが<code>2</code>に設定されたスレッド・プール・エグゼキュータがすべてのポーリング戦略で共有されるように準備します。</span></li>
<li data-value="2"><span class="merged" id="all.35ARg2" title="原文 : Selects the built-in periodic polling strategy.">組込みの定期的なポーリング戦略を選択します。</span></li>
<li data-value="3"><span class="merged" id="all.2Ua3a9" title="原文 : Tells the config system to use the specific executor to poll the dev.properties config source.">特定のエグゼキュータを使用して<code>dev.properties</code>構成ソースをポーリングするように構成システムに指示します。</span></li>
<li data-value="4"><span class="merged" id="all.4UPyhF" title="原文 : Uses the Java filesystem WatchService to monitor the specified path.">Javaファイルシステム<code>WatchService</code>を使用して、指定されたパスをモニターします。</span></li>
<li data-value="5"><span class="merged" id="all.1QMHOo" title="原文 : Tells the config system to use the same executor to monitor the path.">同じエグゼキュータを使用してパスをモニターするように構成システムに指示します。</span></li>
</ul>
</div>

<h3 id="_publishers_for_source_change_events"><span class="merged" id="all.4FPewn" title="原文 : Publishers for Source Change Events">ソース変更イベントのパブリッシャ</span></h3>
<div class="section">
<p><span class="merged" id="all.1KosFF.spl1" title="原文 : Recall that when a polling strategy detects a change in a source, it informs interested parties of the changes.">ポーリング戦略でソースの変更が検出されると、その変更が関係者に通知されることを思い出してください。</span> <span class="merged" id="all.1KosFF.spl2" title="原文 : By default each Config.Builder arranges for the resulting Config tree to use a shared executor that reuses available threads from a pool, creating new threads as needed.">デフォルトでは、結果の<code>Config</code>ツリーがプールから使用可能なスレッドを再利用する共有エグゼキュータを使用するように各<code>Config.Builder</code>が配置され、必要に応じて新しいスレッドが作成されます。</span> <span class="merged" id="all.1KosFF.spl3" title="原文 : The same executor is used for actually reloading the source.">実際にソースをリロードする場合は、同じエグゼキュータが使用されます。</span> </p>

<p><span class="merged" id="all.2ww3Vx.spl1" title="原文 : Your application can invoke the polling strategy builder&rsquo;s changesExecutor method to tell the builder to use a different Executor.">アプリケーションでは、ポーリング戦略ビルダーの<code>changesExecutor</code>メソッドを呼び出して、別の<code>Executor</code>を使用するようにビルダーに指示できます。</span> <span class="merged" id="all.2ww3Vx.spl2" title="原文 : (As an aside, your application can also control the size of the buffer used for holding source change events by invoking the builder&rsquo;s changesMaxBuffer method.">(別の方法として、アプリケーションでは、ビルダーの<code>changesMaxBuffer</code>メソッドを起動して、ソース変更イベントの保持に使用されるバッファのサイズを制御することもできます。</span> <span class="merged" id="all.2ww3Vx.spl3"  title="原文:: The default is 256.)">デフォルトは256です。)</span> </p>

<markup
lang="java"
title="構成のカスタマイズおよびソース・エグゼキュータのオーバーライド"
>Executor executor = Executors.newCachedThreadPool();               <span class="conum" data-value="1" />

Config config = Config.builder()
        .overrides(
                OverrideSources.file("conf/overrides.properties")
                        .pollingStrategy(PollingStrategies::watch)
                        .changesExecutor(executor)                 <span class="conum" data-value="2" />
                        .changesMaxBuffer(4))                      <span class="conum" data-value="3" />
        .sources(
                ConfigSources.file("conf/env.yaml")
                        .pollingStrategy(PollingStrategies::watch)
                        .changesExecutor(executor)                 <span class="conum" data-value="4" />
                        .changesMaxBuffer(4))                      <span class="conum" data-value="4" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2j14iO" title="原文 : Prepares a thread pool executor to be shared by selected sources.">選択したソースで共有するスレッド・プール・エグゼキュータを準備します。</span></li>
<li data-value="2"><span class="merged" id="all.42G4y5" title="原文 : Tells the builder that the resulting overrides source should use the specified Executor for notifying interested parties of changes and for reloading the override source.">結果のオーバーライド・ソースが、変更を関係者に通知し、オーバーライド・ソースをリロードするために、指定された<code>Executor</code>を使用する必要があることをビルダーに通知します。</span></li>
<li data-value="3"><span class="merged" id="all.2jf2kx" title="原文 : Specifies an event buffer size of 4.">イベント・バッファ・サイズを4に指定します。</span></li>
<li data-value="4"><span class="merged" id="all.39kX2h" title="原文 : Uses the same Executor and event buffer size for the config source as for the override source above.">前述のオーバーライド・ソースと同じ<code>Executor</code>およびイベント・バッファ・サイズを構成ソースに使用します。</span></li>
</ul>
</div>

<h3 id="_composite_config_source_executor"><span class="merged" id="all.1m1CAA" title="原文 : Composite Config Source Executor">コンポジット構成ソース・エグゼキュータ</span></h3>
<div class="section">
<p><span class="merged" id="all.1oz0LN.spl1" title="原文 : When your application supplies multiple sources to a config builder, as with Config.create(Supplier&lt;ConfigSource&gt;…​) and Config.create(List&lt;Supplier&lt;ConfigSource&gt;&gt;), the config system automatically uses a composite config source which aggregates the separate sources but also listens for changes to any of the individual sources so it can delegate the change notification."><code>Config.create(Supplier&lt;ConfigSource>…​)</code>および<code>Config.create(List&lt;Supplier&lt;ConfigSource>>)</code>と同様に、アプリケーションが構成ビルダーに複数のソースを提供する場合、構成システムは、個別のソースを集計する<em>「コンポジット構成ソース」</em>を自動的に使用しますが、変更通知を委任できるように個々のソースへの変更もリスニングします。</span> <span class="merged" id="all.1oz0LN.spl2" title="原文 : For this change detection and notification the config system, by default, uses an executor with a dedicated thread pool that is shared across all Config instances.">この変更検出および通知のために、構成システムはデフォルトで、すべての<code>Config</code>インスタンス間で共有される専用のスレッド・プールを持つエグゼキュータを使用します。</span> </p>

<p><span class="merged" id="all.3nN9zh.spl1" title="原文 : Your application can invoke the builder&rsquo;s changesExecutor method to use a different ScheduledExecutorService instance.">アプリケーションでは、別の<code>ScheduledExecutorService</code>インスタンスを使用するためにビルダーの<code>changesExecutor</code>メソッドを起動できます。</span> <span class="merged" id="all.3nN9zh.spl2" title="原文 : The builder returned by the from methods mentioned above is a CompositeBuilder which extends Config.Builder.">前述の<code>from</code>メソッドによって返されるビルダーは、<code>Config.Builder</code>を拡張する<a href="./apidocs/io.helidon.config/io/helidon/config/ConfigSources.CompositeBuilder.html" id="" target="_blank" >CompositeBuilder</a>です。</span> </p>

<p><span class="merged" id="all.2JYqtM.spl1" title="原文 : Because a composite source might yield more numerous change events - because of the multiple underlying sources - your application can specify a debounce timeout for the composite source by invoking the CompositeBuilder.changesDebounce(Duration) method.">コンポジット・ソースでは、基礎となる複数のソースが原因で、より多くの変更イベントが発生する可能性があるため、アプリケーションでは、<code>CompositeBuilder.changesDebounce(Duration)</code>メソッドを起動して、コンポジット・ソースの<em>「デバウンス・タイムアウト」</em>を指定できます。</span> <span class="merged" id="all.2JYqtM.spl2" title="原文 : The composite source aggregates multiple change events within this period into a single event and broadcasts that one instead and reloads the sources at that time, not necessarily in response to every single change in any source.">コンポジット・ソースは、この期間内の複数の変更イベントを単一のイベントに集計し、かわりにそのイベントをブロードキャストし、その時点でソースを再ロードします。必ずしもソースのすべての変更に対応するわけではありません。</span> <span class="merged" id="all.2JYqtM.spl3"  title="原文: The default is 100 milliseconds.">デフォルトは<code>100</code>ミリ秒です。</span> </p>

<markup
lang="java"
title="コンポジット・ソース・エグゼキュータのカスタマイズ"
>ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);       <span class="conum" data-value="1" />

Config config = Config.create(
        ConfigSources.create(file("conf/dev.properties")                         <span class="conum" data-value="2" />
                                   .pollingStrategy(PollingStrategies::watch),
                           file("conf/config.properties")                      <span class="conum" data-value="2" />
                                   .pollingStrategy(PollingStrategies::watch))
                .changesExecutor(executor)                                     <span class="conum" data-value="3" />
                .changesMaxBuffer(4)                                           <span class="conum" data-value="4" />
                .changesDebounce(Duration.ofSeconds(1)));                      <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.32hPtW" title="原文 : Prepares a thread pool executor.">スレッド・プール・エグゼキュータを準備します。</span></li>
<li data-value="2"><span class="merged" id="all.2xd82S" title="原文 : ConfigSources.create(Supplier&lt;ConfigSource&gt;…​) creates and returns a CompositeBuilder based on the two sources."><code>ConfigSources.create(Supplier&lt;ConfigSource>…​)</code>は、これらのソースに基づいて<code>CompositeBuilder</code>を作成し、戻します。</span></li>
<li data-value="3"><span class="merged" id="all.bw30r" title="原文 : Specifies a particular executor for monitoring and change event notification.">イベント通知をモニタリングおよび変更するための特定のエグゼキュータを指定します。</span></li>
<li data-value="4"><span class="merged" id="all.ph5XH.spl1" title="原文 : Sets the subscriber&rsquo;s buffer size to 4 events.">サブスクライバのバッファ・サイズを4イベントに設定します。</span> <span class="merged" id="all.ph5XH.spl2" title="原文 : The composite source discards any events not consumed by a subscriber if it needs to create room for more recent events.">最新のイベント用の領域を作成する必要がある場合、コンポジット・ソースはサブスクライバによって消費されていないイベントを破棄します。</span> </li>
<li data-value="5"><span class="merged" id="all.3JaMk4" title="原文 : Change events will not fire more frequently than once per a second.">変更イベントは1秒に1回以上起動しません。</span></li>
</ul>
</div>

<h3 id="_config_custom_executor"><span class="merged" id="all.28eWuR" title="原文 : Config Custom Executor">カスタム・エグゼキュータの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2c6cI0.spl1" title="原文 : A loaded config tree subscribes to change events publishes by its source(s).">ロードされた構成ツリーは、そのソースによって公開された変更イベントをサブスクライブします。</span> <span class="merged" id="all.2c6cI0.spl2" title="原文 : By default, each Config uses an executor which manages a dedicated thread pool reusing previously-created threads when they are available and creating new threads as needed.">デフォルトでは、各<code>Config</code>は、以前に作成されたスレッドが使用可能な場合はそれを再利用し、必要に応じて新しいスレッドを作成する専用のスレッド・プールを管理するエグゼキュータを使用します。</span> <span class="merged" id="all.2c6cI0.spl3" title="原文 : All Config instances share the dedicated thread pool.">すべての<code>Config</code>インスタンスは、専用のスレッド・プールを共有します。</span> </p>

<p><span class="merged" id="all.1Ko25d.spl1" title="原文 : Your application can specify a non-default Executor for a tree to use for accepting and propagating those events by invoking the changesExecutor method on the Config.Builder.">アプリケーションでは、<code>Config.Builder</code>で<code>changesExecutor</code>メソッドを起動することで、これらのイベントの受入れおよび伝播に使用するツリーにデフォルト以外の<code>Executor</code>を指定できます。</span> <span class="merged" id="all.1Ko25d.spl2" title="原文 : Each source subscriber has a dedicated buffer for holding changes events.">各ソース・サブスクライバには、変更イベントを保持するための専用バッファがあります。</span> <span class="merged" id="all.1Ko25d.spl3" title="原文 : This defaults to 256 but you can tailor this value as needed.">これは256にデフォルト設定されますが、必要に応じてこの値を調整できます。</span> </p>

<markup
lang="java"
title="構成エグゼキュータのカスタマイズ"
>Executor executor = Executors.newCachedThreadPool();        <span class="conum" data-value="1" />

Config config = Config.create(
        file("conf/config.properties")
                .pollingStrategy(PollingStrategies::watch))
        .changesExecutor(executor)                          <span class="conum" data-value="2" />
        .changesMaxBuffer(16)                               <span class="conum" data-value="3" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Q7IPD" title="原文 : Prepares a specific thread pool executor.">特定のスレッド・プール・エグゼキュータを準備します。</span></li>
<li data-value="2"><span class="merged" id="all.2lCDlr" title="原文 : Specifies the executor the Config tree will use to listen for and propagate change events."><code>Config</code>ツリーが変更イベントをリスニングおよび伝播するために使用するエグゼキュータを指定します。</span></li>
<li data-value="3"><span class="merged" id="all.1lXNpc" title="原文 : Sets the event subscriber buffer to 16 events.">イベント・サブスクライバ・バッファを<code>16</code>イベントに設定します。</span></li>
</ul>
</div>

<h3 id="_retry_policy_custom_executor"><span class="merged" id="all.2qWcLN" title="原文 : Retry Policy Custom Executor">ポリシー・カスタム・エグゼキュータの再試行</span></h3>
<div class="section">
<p><span class="merged" id="all.1Y963X.spl1" title="原文 : You can control which executor a retry policy should use for its work.">再試行ポリシーで作業に使用するエグゼキュータを制御できます。</span> <span class="merged" id="all.1Y963X.spl2" title="原文 : The RetryPolicies.repeat(int retries) method returns a RetryPolicies.Builder."><code>RetryPolicies.repeat(int retries)</code>メソッドは、<a href="./apidocs/io.helidon.config/io/helidon/config/RetryPolicies.Builder.html" id="" target="_blank" >RetryPolicies.Builder</a>を返します。</span> <span class="merged" id="all.1Y963X.spl3" title="原文 : Your application can invoke the retry policy builder&rsquo;s executor method to specify which ScheduledExecutorService instance it should use to schedule and execute delayed retries.">アプリケーションでは、再試行ポリシー・ビルダーの<code>executor</code>メソッドを起動して、遅延再試行のスケジュールおよび実行に使用する<code>ScheduledExecutorService</code>インスタンスを指定できます。</span> <span class="merged" id="all.1Y963X.spl4" title="原文 : By default the config system uses a separate thread pool executor for each retry policy instance.">デフォルトでは、構成システムは再試行ポリシー・インスタンスごとに個別のスレッド・プール・エグゼキュータを使用します。</span> </p>

<markup
lang="java"
title="再試行ポリシー・エグゼキュータのカスタマイズ"
>ScheduledExecutorService executor = Executors.newScheduledThreadPool(2, myThreadFactory); <span class="conum" data-value="1" />

Config config = Config.create(
        ConfigSources.file("conf/dev.properties")
                .optional()                                                               <span class="conum" data-value="2" />
                .retryPolicy(RetryPolicies.repeat(2)                                      <span class="conum" data-value="3" />
                        .executor(executor)));                                            <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1ryx7Q" title="原文 : Prepares a thread pool executor with core pool size set to 2 and a custom java.util.concurrent.ThreadFactory.">コア・プール・サイズが<code>2</code>およびカスタム<code>java.util.concurrent.ThreadFactory</code>に設定されたスレッド・プール・エグゼキュータを準備します。</span></li>
<li data-value="2"><span class="merged" id="all.4CAAQe" title="原文 : When the source is flagged as optional(), the loading attempt will be repeated as the retry policy defines, but an overall failure will not lead to failing the initial load or preventing the source from being polled if so configured.">ソースに<code>optional()</code>のフラグが付いている場合、ロード試行は再試行ポリシーの定義に従って繰り返されますが、全体的な失敗によって初期ロードが失敗したり、ソースがポーリングされないようになったりすることは<em>ありません</em>(構成されている場合)。</span></li>
<li data-value="3"><span class="merged" id="all.4SQD84" title="原文 : Uses the built-in repeating implementation of RetryPolicy that can be used with any config source, but typically for ones that might suffer brief, intermittent outages.">任意の構成ソースで使用できる<code>RetryPolicy</code>の組込み<em>「繰返し」</em>実装を使用しますが、通常は、短い断続的な停止が発生する可能性のある実装に使用します。</span></li>
<li data-value="4"><span class="merged" id="all.2onfJN" title="原文 : Specifies the executor to use for loading and retries.">ロードおよび再試行に使用するエグゼキュータを指定します。</span></li>
</ul>
</div>
</div>
</doc-view>
