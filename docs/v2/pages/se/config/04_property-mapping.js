<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3TYb55.1"  title="原文:: Property Mapping">プロパティ・マッピング</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2ZvyyR.spl1" title="原文 : Although config values are originally text, you can use the config system&rsquo;s built-in conversions or add your own to translate text into Java primitive types and simple objects (such as Double) and to express parts of the config tree as complex types (List, Map, and custom types specific to your application).">構成値は最初はテキストですが、構成システムの組込み変換を使用するか、独自の変換を追加してテキストをJavaプリミティブ・タイプおよび単純なオブジェクト(<code>Double</code>など)に変換し、構成ツリーの一部を複合タイプ(<code>List</code>、<code>Map</code>およびアプリケーション固有のカスタム・タイプ)として表すことができます。</span> <span class="merged" id="all.2ZvyyR.spl2" title="原文 : This section introduces how to use the built-in mappings and your own custom ones to convert to simple and complex types.">この項では、組込みマッピングおよび独自のカスタム・マッピングを使用して単純型および複合型に変換する方法について説明します。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_converting_configuration_to_simple_types"><span class="merged" id="all.NlDbI" title="原文 : Converting Configuration to Simple Types">単純型への構成の変換</span></h2>
<div class="section">
<p><span class="merged" id="all.W1iHM.spl1" title="原文 : The Config class itself provides many conversions to Java types."><a href="./apidocs/io.helidon.config/io/helidon/config/Config.html" id="" target="_blank" ><code>Config</code></a>クラス自体は、Java型への多数の変換を提供します。</span> <span class="merged" id="all.W1iHM.spl2" title="原文 : See the JavaDoc for the complete list.">完全なリストは、JavaDocを参照してください。</span> </p>

<p><span class="merged" id="all.3LpqnB.spl1" title="原文 : The methods which support Java primitive types and their related classes follow a common pattern.">Javaプリミティブ型とその関連クラスをサポートするメソッドは、共通パターンに従います。</span> <span class="merged" id="all.3LpqnB.spl2" title="原文 : The examples in the table below deal with conversion to a boolean but the same pattern applies to many data types listed in the JavaDoc.">次の表の例では、ブールへの変換を扱いますが、JavaDocにリストされている多くのデータ型に同じパターンが適用されます。</span> </p>

<p><span class="merged" id="all.2kiKmK" title="原文 : Assume a local variable has been assigned something like">ローカル変数が次のように割り当てられているとします</span></p>

<markup
lang="java"

>Config config = Config.get("someKey");
// shortcut method
ConfigValue&lt;Boolean&gt; value = config.asBoolean();
// generic method (for any type)
ConfigValue&lt;Boolean&gt; value2 = config.as(Boolean.class);</markup>

<div class="block-title"><span class="merged" id="all.1Dsl4G" title="原文 : Built-in Conversions to Simple Types (e.g., boolean)"><span>組込みの単純型への変換(ブールなど)</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2fU2gv"  title="原文:: Java type">Javaタイプ</span></th>
<th><span class="merged" id="all.2h4dlc"  title="原文:: Example usage 1">使用例 <sup>1</sup></span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3rIZB4"  title="原文: boolean"><code>boolean</code></span></td>
<td class=""><span class="merged" id="all.zPFl8" title="原文 : boolean b = value.get(); 2"><code>boolean b = value.get();</code> <sup>2</sup></span></td><td class=""><span class="merged" id="all.2noffV" title="原文 : boolean defaultedB = value.orElse(true); 3"><code>boolean defaultedB = value.orElse(true);</code> <sup>3</sup></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4bT7ei"  title="原文: Optional&lt;Boolean&gt;"><code>Optional&lt;Boolean></code></span></td>
<td class=""><span class="merged" id="all.CoN38.spl1" title="原文 : ConfigValue already has all methods of an Optional.">ConfigValueには、すでにOptionalのすべてのメソッドがあります。</span> <span class="merged" id="all.CoN38.spl2" title="原文 : If actual optional is needed: Optional&lt;Boolean&gt; b = value.asOptional(); 4">実際のオプションが必要な場合: <code>Optional&lt;Boolean> b = value.asOptional();</code> <sup>4</sup></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15m3Ot"  title="原文: Supplier&lt;Boolean&gt;"><code>Supplier&lt;Boolean></code></span></td>
<td class=""><span class="merged" id="all.3nIRrj"  title="原文: Boolean b = value.supplier().get();"><code>Boolean b = value.supplier().get();</code></span></td><td class=""><span class="merged" id="all.WzzrL"  title="原文: boolean defaultedB = value.supplier(true).get();"><code>boolean defaultedB = value.supplier(true).get();</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2DcnzY"  title="原文: Supplier&lt;Optional&lt;Boolean&gt;&gt;"><code>Supplier&lt;Optional&lt;Boolean>></code></span></td>
<td class=""><span class="merged" id="all.3X8qB4"  title="原文: Boolean b = value.optionalSupplier().get().orElse(Boolean.TRUE);"><code>Boolean b = value.optionalSupplier().get().orElse(Boolean.TRUE);</code></span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.1BxYj2" title="原文 : Notes on Built-in Conversions to Simple Types">組込みの単純型への変換に関するノート</span></p>

<v-card flat color="grey lighten-3" class="card__example"> <v-card-text><p><span class="merged" id="all.rUC0E" title="原文 : 1 All conversions can throw MissingValueException (if no value exists at the requested key and no default is provided) and ConfigMappingException (if some error occurred while performing the data mapping)."><sup>1</sup> すべての変換で、<code>MissingValueException</code> (リクエストされたキーに値が存在せず、デフォルトが指定されていない場合)および<code>ConfigMappingException</code> (データ・マッピングの実行中にエラーが発生した場合)をスローできます。</span></p>

<p><span class="merged" id="all.1Rcnx3" title="原文 : 2 The Config.asXXX methods internally use the Java-provided XXX.parseXXX methods, so here a missing or unparseable string gives false because that is how Boolean.parseBoolean behaves."><sup>2</sup> <code>Config.asXXX</code>メソッドは、Java提供の<code>XXX.parseXXX</code>メソッドを内部的に使用するため、ここでは<code>Boolean.parseBoolean</code>の動作方法が<code>false</code>であるため、欠落している文字列または解析できない文字列を使用します。</span></p>

<p><span class="merged" id="all.2jyCDG" title="原文 : 3 User code defaults the value to true."><sup>3</sup> ユーザー・コードのデフォルト値は<code>true</code>です。</span></p>

<p><span class="merged" id="all.le16c" title="原文 : 4 User code defaults the value to Boolean.TRUE if absent; otherwise parses the value using Boolean.parseBoolean."><sup>4</sup> ユーザー・コードがない場合、値はデフォルトで<code>Boolean.TRUE</code>に設定されます。それ以外の場合は、<code>Boolean.parseBoolean</code>を使用して値が解析されます。</span></p>
</v-card-text>
</v-card>


<p><span class="merged" id="all.NQSxR.spl1" title="原文 : The numerous conversions defined on the Config class for other types (integers, doubles, etc.) will satisfy many of your application&rsquo;s needs.">他の型(integer、doubleなど)に対して<code>Config</code>クラスで定義されている多数の変換は、アプリケーションのニーズの多くを満たします。</span> <span class="merged" id="all.NQSxR.spl2" title="原文 : The ConfigMappers class includes other related mappings from String (rather than from Config) to Java types (described in the JavaDoc)."><a href="./apidocs/io.helidon.config/io/helidon/config/ConfigMappers.html" id="" target="_blank" ><code>ConfigMappers</code></a>クラスには、<code>String</code> (<code>Config</code>ではなく)からJavaタイプ(JavaDocで説明されている)へのその他の関連マッピングが含まれています。</span> </p>

<p><span class="merged" id="all.1zal3f" title="原文 : For additional type mapping, you can use these methods defined on Config:">追加の型マッピングには、<code>Config</code>で定義されている次のメソッドを使用できます:</span></p>

<markup
lang="java"

>T as(Class&lt;? extends T&gt; type);
T as(Function&lt;Config, T&gt; mapper);
T as(GenericType&lt;T&gt; genericType);</markup>

<p><span class="merged" id="all.2ljU1E" title="原文 : which maps the current node to a type.">現在のノードを型にマップします。</span></p>

<p><span class="merged" id="all.1Z5lXn.spl1" title="原文 : The next example, and later ones below showing complex type mapping, use the example application.properties configuration from the config introduction.">次の例および以降の例では、複合型マッピングを示します。構成の概要の<router-link @click.native="this.scrollFix('#app-properties')" to="#app-properties"><code>application.properties</code></router-link>構成の例を使用してください。</span> <span class="merged" id="all.1Z5lXn.spl2" title="原文 : Part of that example includes this line:">この例の一部には、次の行が含まれています:</span> </p>

<markup


>bl.initial-id = 10000000000</markup>

<p><span class="merged" id="all.3PaeeM" title="原文 : Your application can use Config.as to interpret the value as a BigDecimal:">アプリケーションでは、<code>Config.as</code>を使用して値を<code>BigDecimal</code>として解釈できます:</span></p>

<markup
lang="java"

>BigDecimal initialId = config.get("bl.initial-id").as(BigDecimal.class);</markup>

</div>

<h2 id="_converting_configuration_to_complex_types"><span class="merged" id="all.2zI1MP" title="原文 : Converting Configuration to Complex Types">複合型への構成の変換</span></h2>
<div class="section">
<p><span class="merged" id="all.1sQAN8.spl1" title="原文 : The hierarchical features section describes the tree structure used to represent config data."><router-link @click.native="this.scrollFix('#config/03_hierarchical-features.adoc')" to="#config/03_hierarchical-features.adoc">「階層機能」</router-link>セクションでは、構成データを表すために使用されるツリー構造について説明します。</span> <span class="merged" id="all.1sQAN8.spl2" title="原文 : The config system can map subtrees of a config tree to complex Java types.">構成システムは、構成ツリーのサブツリーを複雑なJavaタイプにマップできます。</span> </p>


<h3 id="_built_in_conversions_to_list_and_map"><span class="merged" id="all.4Po7kb" title="原文 : Built-in Conversions to List and Map"><code>List</code>および<code>Map</code>への組込み変換</span></h3>
<div class="section">
<p><span class="merged" id="all.y641O.spl1" title="原文 : The Config class exposes several methods for mapping a structured config node to a Java List or Map."><code>Config</code>クラスは、構造化構成ノードをJava <code>List</code>または<code>Map</code>にマッピングするためのいくつかのメソッドを公開しています。</span> <span class="merged" id="all.y641O.spl2" title="原文 : The JavaDoc contains complete details, but briefly your application can convert a structured Config node into:"><a href="./apidocs/io.helidon.config/io/helidon/config/Config.html" id="" target="_blank" >JavaDoc</a>には完全な詳細が含まれていますが、アプリケーションで構造化<code>Config</code>ノードを次のように簡単に変換できます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.JhrGg" title="原文 : a List&lt;T&gt; of a given type">指定された型の<code>List&lt;T></code></span></p>

</li>
<li>
<p><span class="merged" id="all.oyBl1" title="原文 : a Map&lt;String, String&gt; in which each key is the fully-qualified key String for a config entry and the value is its String value">各キーが構成エントリの完全修飾キー<code>String</code>であり、値がその<code>String</code>値である<code>Map&lt;String, String></code></span></p>

</li>
</ul>
</div>

<h3 id="_custom_conversions"><span class="merged" id="all.3pYgJB" title="原文 : Custom Conversions">カスタム変換</span></h3>
<div class="section">
<p><span class="merged" id="all.3IB6nS.spl1" title="原文 : Often your code will be simpler if you can treat parts of the configuration as custom, application-specific Java objects, rather than as a group of String keys and values.">多くの場合、構成の一部を<code>String</code>キーおよび値のグループとしてではなく、カスタムのアプリケーション固有のJavaオブジェクトとして扱うことができると、コードがより簡単になります。</span> <span class="merged" id="all.3IB6nS.spl2" title="原文 : You will need customized conversions to do so.">これを行うには、カスタマイズされた変換が必要です。</span> </p>

<p><span class="merged" id="all.46N3M2" title="原文 : The config system provides many ways to accomplish this, described in the io.helidon.config package JavaDoc.">構成システムは、<a href="./apidocs/io.helidon.config/io/helidon/config/package-summary.html#conversions" id="" target="_blank" >「<code>io.helidon.config</code>パッケージJavaDoc」</a>で説明されているように、これを実現するための多くの方法を提供します。</span></p>

<p><span class="merged" id="all.gvdY8.spl1" title="原文 : Some of those approaches require that the target class - the class to which you want to convert the configuration data - have certain characteristics or that you add a method to the class to help do the mapping.">これらのアプローチの中には、ターゲット・クラス(構成データの変換先のクラス)に特定の特性があるか、マッピングを支援するメソッドをクラスに追加する必要があるものがあります。</span> <span class="merged" id="all.gvdY8.spl2" title="原文 : You might want to avoid changing the target class or you might not even be able to if you do not control its source.">ターゲット・クラスを変更しないようにしたり、ソースを制御しない場合でも変更できないことがあります。</span> </p>

<p><span class="merged" id="all.rJy7H.spl1" title="原文 : Here are two approaches that will always work without requiring changes to the target class.">ここでは、ターゲット・クラスを変更せずに常に機能するアプローチを2つ示します。</span> <span class="merged" id="all.rJy7H.spl2" title="原文 : For both approaches, you write your own conversion function.">どちらの方法でも、独自の変換ファンクションを記述します。</span> <span class="merged" id="all.rJy7H.spl3" title="原文 : The difference is in how your application triggers the use of that mapper.">違いは、アプリケーションがそのマッパーの使用をトリガーする方法です。</span> </p>


<h4 id="_use_custom_mapper_explicitly_config_as_method"><span class="merged" id="all.3wKMv5" title="原文 : Use Custom Mapper Explicitly: Config.as method">カスタム・マッパーの明示的な使用: <code>Config.as</code>メソッド</span></h4>
<div class="section">
<p><span class="merged" id="all.1I3Lg7" title="原文 : Any time your application has a Config instance to map to the target class it invokes Config.as passing an instance of the corresponding conversion function:">アプリケーションにターゲット・クラスにマップする<code>Config</code>インスタンスがある場合は常に、対応する変換ファンクションのインスタンスを渡す<code>Config.as</code>が起動されます:</span></p>

<markup
lang="java"

>Config config = Config.get("web");
ConfigValue&lt;WebConfig&gt; web = config.as(WebConfigMapper::map);</markup>

<p><span class="merged" id="all.46bRRe" title="原文 : You do not necessarily need a new instance of the mapper every time you want to use it.">マッパーを使用するたびに新しいインスタンスが必要になるとはかぎりません。</span></p>

<p><span class="merged" id="all.11ZpaL.spl1" title="原文 : In this approach, everywhere your application needs to perform this conversion it specifies the mapper to use.">この方法では、アプリケーションでこの変換を実行する必要があるすべての場所で、使用するマッパーを指定します。</span> <span class="merged" id="all.11ZpaL.spl2" title="原文 : If you decided to change which mapper to use you would need to update each of those places in your application.">使用するマッパーを変更する場合は、アプリケーションの各場所を更新する必要があります。</span> </p>

</div>

<h4 id="_register_custom_mapper_once_use_implicitly_config_as_method"><span class="merged" id="all.W5LRT" title="原文 : Register Custom Mapper Once, Use Implicitly: Config.as method">カスタム・マッパーを一度登録すると、暗黙的に使用: <code>Config.as</code>メソッド</span></h4>
<div class="section">
<p><span class="merged" id="all.2DLyIS" title="原文 : In this approach, your application:">このアプローチでは、アプリケーションは次のことを行います:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4Ltr06" title="原文 : Tells each Config.Builder that needs to know about the custom mapper by either:">次のいずれかの方法で、カスタム・マッパーについて知っておく必要がある各<code>Config.Builder</code>に指示します:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.209DbQ" title="原文 : registering an instance of your mapper by invoking Config.Builder.addMapper, or"><code>Config.Builder.addMapper</code>を起動してマッパーのインスタンスを登録</span>

</li>
<li>
<span class="merged" id="all.4FDjIv.spl1" title="原文 : implementing ConfigMapperProvider so it returns an instance of your mapper (see the JavaDoc for complete information) and creating or editing the file io.helidon.config.spi.ConfigMapperProvider so it contains a line with the fully-qualified class name of your ConfigMapperProvider.">マッパーのインスタンスを返すように<a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigMapperProvider.html" id="" target="_blank" ><code>ConfigMapperProvider</code></a>を実装し(詳細はJavaDocを参照)、<code>ConfigMapperProvider</code>の完全修飾クラス名の行が含まれるように<code>io.helidon.config.spi.ConfigMapperProvider</code>ファイルを作成または編集します。</span> <span class="merged" id="all.4FDjIv.spl2" title="原文 : The config system will use the Java service loader to find and invoke all ConfigMapperProvider classes listed and add the mappers they provide to each Config.Builder automatically.">構成システムは、Javaサービス・ローダーを使用して、リストされているすべての<code>ConfigMapperProvider</code>クラスを検索して呼び出し、提供されているマッパーを各<code>Config.Builder</code>に自動的に追加します。</span> 

</li>
</ol>
</li>
<li>
<span class="merged" id="all.23lN0J" title="原文 : Converts using the mapper by invoking the Config.as method which accepts the target type to convert to, not the mapper itself that does the conversion.">変換を実行するマッパー自体では<em>「なく」</em>、変換先のターゲット・タイプを受け入れる<code>Config.as</code>メソッドを起動することで、マッパーを使用して変換します。</span>

</li>
</ol>
<p><span class="merged" id="all.1XvrVX" title="原文 : If your application converts to the same target type in several places in the code, this approach allows you to change which mapper it uses by changing only the registration of the mapper, not each use of it.">アプリケーションがコード内の複数の場所で同じターゲット・タイプに変換する場合、この方法では、マッパーを使用するたびにではなく、マッパーの<em>「登録」</em>のみを変更することで、使用するマッパーを変更できます。</span></p>

</div>

<h4 id="WebConfig"><span class="merged" id="all.1CXq7M" title="原文 : Continuing the Web Example"><code>Web</code>サンプルの続行</span></h4>
<div class="section">
<p><span class="merged" id="all.1acN3A" title="原文 : The following examples build on the example configuration from the application.properties example file in the introduction.">次の例は、概要の<router-link @click.native="this.scrollFix('#create-simple-config-props')" to="#create-simple-config-props"><code>application.properties</code></router-link>サンプル・ファイルの構成例に基づいています。</span></p>

<markup
lang="java"
title="<code>web</code>プロパティ構成を保持するJava POJO"
>public class WebConfig {
    private boolean debug;
    private int pageSize;
    private double ratio;

    public WebConfig(boolean debug, int pageSize, double ratio) {
        this.debug = debug;
        this.pageSize = pageSize;
        this.ratio = ratio;
    }

    public boolean isDebug() {
        return debug;
    }

    public int getPageSize() {
        return pageSize;
    }

    public double getRatio() {
        return ratio;
    }
}</markup>

<markup
lang="java"
title="カスタム・マッパー・クラス"
>public class WebConfigMapper implements Function&lt;Config, WebConfig&gt; {

        @Override
        public WebConfig apply(Config config) throws ConfigMappingException, MissingValueException {
            return new WebConfig(
                    config.get("debug").asBoolean().orElse(false),
                    config.get("page-size").asInt().orElse(10),
                    config.get("ratio").asDouble().orElse(1.0)
            );
        }
    }</markup>

<markup
lang="java"
title="マッパーの明示的な使用"
>...
    Config config = Config.create(classpath("application.properties"));

    WebConfig web = config.get("web")
        .as(new WebConfigMapper())
        .get();</markup>

<markup
lang="java"
title="マッパーの登録および暗黙的な使用"
>...
    Config config = Config.builder(classpath("application.properties"))
        .addMapper(WebConfig.class, new WebConfigMapper())
        .build();

    WebConfig web = config.get("web")
        .as(WebConfig.class)
        .get();</markup>

<p><span class="merged" id="all.Zhb1s" title="原文 : Either of the two approaches just described will always work without requiring you to change the POJO class.">前述のいずれの方法でも、POJOクラスを変更しなくても<em>常に</em>動作します。</span></p>

</div>
</div>
</div>

<h2 id="_advanced_conversions_using_explicit_mapping_logic"><span class="merged" id="all.4E8Mk4" title="原文 : Advanced Conversions using Explicit Mapping Logic">明示的なマッピング・ロジックを使用した拡張変換</span></h2>
<div class="section">
<p><span class="merged" id="all.3BtuxT.spl1" title="原文 : If the target Java class you want to use meets certain conditions - or if you can change it to meet one of those conditions - you might not need to write a separate mapper class.">使用するターゲットJavaクラスが特定の条件を満たす場合、またはこれらの条件のいずれかを満たすように変更できる場合は、別のマッパー・クラスを記述する必要はありません。</span> <span class="merged" id="all.3BtuxT.spl2" title="原文 : Instead, you add the mapping logic to the POJO itself in one of several ways and the config system uses Java reflection to search for those ways to perform the mapping.">かわりに、いくつかの方法のいずれかでマッピング・ロジックをPOJO自体に追加すると、構成システムはJavaリフレクションを使用してマッピングを実行する方法を検索します。</span> </p>

<p><span class="merged" id="all.2gngw6" title="原文 : Your application facilitates this implicit mapping either by adding to the POJO class or by providing a builder class for it.">アプリケーションでは、POJOクラスに追加するか、そのビルダー・クラスを指定することで、この暗黙的なマッピングが容易になります。</span></p>

<p><span class="merged" id="all.3Ve0F9.spl1" title="原文 : This feature is available in Object mapping module, and is added through Java ServiceLoader mechanism.">この機能はオブジェクト・マッピング・モジュールで使用可能で、Java <code>ServiceLoader</code>メカニズムを介して追加されます。</span> <span class="merged" id="all.3Ve0F9.spl2" title="原文 : This is no longer part of core Config module, as it depends on reflection and introduces a lot of magic (see the list of supported mapping methods below, also uses reflection to invoke the methods and to map configuration values to fields/methods etc.).">これは、リフレクションに依存し、多数のマジックを導入するため、コア構成モジュールの一部ではなくなりました(次のサポートされているマッピング方法のリストを参照してください。また、リフレクションを使用してメソッドを呼び出し、構成値をフィールド/メソッドなどにマップします)。</span> </p>

<markup
lang="xml"
title="<code>pom.xml</code>でのオブジェクト・マッピング依存関係の構成"
>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-config-object-mapping&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>


<h3 id="_adding_the_mapping_to_the_pojo"><span class="merged" id="all.1J2xRp" title="原文 : Adding the Mapping to the POJO">POJOへのマッピングの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.3FZxKe" title="原文 : If you can change the target class you can add any one of the following methods or constructors to the POJO class which the config system will find and use for mapping.">ターゲット・クラスを変更できる場合は、構成システムがマッピングに使用するPOJOクラスに次のいずれかのメソッドまたはコンストラクタを追加できます。</span></p>

<p><span class="merged" id="all.3Fz5DN" title="原文 : Continuing with the WebConfig example introduced earlier:">前述の<router-link @click.native="this.scrollFix('#WebConfig')" to="#WebConfig">WebConfig</router-link>の例を続行します:</span></p>

<div class="block-title"><span class="merged" id="all.47MF0R" title="原文 : Methods Supporting Auto-mapping"><span>自動マッピングをサポートするメソッド</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2HdITt"  title="原文: static WebConfig create(Config);"><code>static WebConfig create(Config);</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2qZDsv"  title="原文: static WebConfig from(Config);"><code>static WebConfig from(Config);</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2PGze0"  title="原文: static WebConfig from(String);"><code>static WebConfig from(String);</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49CtmK"  title="原文: static WebConfig of(Config);"><code>static WebConfig of(Config);</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4aMLvh"  title="原文: static WebConfig of(String);"><code>static WebConfig of(String);</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42ly37"  title="原文: static WebConfig valueOf(Config);"><code>static WebConfig valueOf(Config);</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3aiRWO"  title="原文: static WebConfig valueOf(String);"><code>static WebConfig valueOf(String);</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FNeDp"  title="原文: static WebConfig fromConfig(Config);"><code>static WebConfig fromConfig(Config);</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.12TNfE"  title="原文: static WebConfig fromString(String);"><code>static WebConfig fromString(String);</code></span></td>
</tr>
</tbody>
</table>
</div>
<div class="block-title"><span class="merged" id="all.1TmeUJ" title="原文 : Constructors Supporting Auto-mapping"><span>自動マッピングをサポートするコンストラクタ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.dsHiu"  title="原文: WebConfig(Config);"><code>WebConfig(Config);</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.160EET"  title="原文: WebConfig(String);"><code>WebConfig(String);</code></span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.4e81bE" title="原文 : If the config system finds any of these methods or constructors when the application invokes">アプリケーションの起動時に構成システムがこれらのメソッドまたはコンストラクタのいずれかを検出した場合</span></p>

<markup
lang="java"

>WebConfig wc = config.as(WebConfig.class).get();</markup>

<p><span class="merged" id="all.2hHgWA.spl1" title="原文 : it will invoke the one it found to map the config data to a new instance of the target class.">ターゲット・クラスの新しいインスタンスに構成データをマップするために検出されたものが起動されます。</span> <span class="merged" id="all.2hHgWA.spl2" title="原文 : You do not need to write a separate class to do the mapping or register it with the Config.Builder for the config instance.">マッピングを実行するために別のクラスを記述したり、構成インスタンスの<code>Config.Builder</code>に登録する必要はありません。</span> </p>

</div>

<h3 id="_writing_a_builder_method_and_class_for_the_pojo"><span class="merged" id="all.3IpZ0s" title="原文 : Writing a Builder Method and Class for the POJO">POJOのビルダー・メソッドおよびクラスの記述</span></h3>
<div class="section">
<p><span class="merged" id="all.6BwZ1" title="原文 : You can limit the changes to the POJO class by adding a single builder method to the POJO which returns a builder class for the POJO:">POJOのビルダー・クラスを返す単一の<code>builder</code>メソッドをPOJOに追加することで、POJOクラスへの変更を制限できます:</span></p>

<markup
lang="java"

>public class WebConfig {
...
    static WebConfigBuilder builder() {
        return new WebConfigBuilder();
    }
...
}</markup>

<p><span class="merged" id="all.31wEAA" title="原文 : The builder class WebConfigBuilder is expected to be a Java Bean with">ビルダー・クラス<code>WebConfigBuilder</code>は、次を含むJava Beanである必要があります</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3s36iC" title="原文 : bean properties named for the config properties of interest, and">対象となる構成プロパティの名前が付けられたBeanプロパティ</span>

</li>
<li>
<span class="merged" id="all.26987i" title="原文 : a method WebConfig build() which creates the mapped instance from the builder&rsquo;s own bean properties.">ビルダー独自のBeanプロパティからマップされたインスタンスを作成するメソッド<code>WebConfig build()</code>。</span>

</li>
</ol>
<p><span class="merged" id="all.XDnWb" title="原文 : When your application invokes config.as(WebConfig.class) the config system">アプリケーションが<code>config.as(WebConfig.class)</code>を起動するときの構成システム</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2nPZcJ" title="原文 : finds and invokes the WebConfig.builder() method,"><code>WebConfig.builder()</code>メソッドを検索して呼び出します。</span>

</li>
<li>
<span class="merged" id="all.3Y8KWT" title="原文 : assigns the bean properties on the returned builder from the config subtree rooted at config, and"><code>config</code>をルートとする構成サブツリーから、返されたビルダーにBeanプロパティを割り当てます</span>

</li>
<li>
<span class="merged" id="all.lNJ8E" title="原文 : invokes the builder&rsquo;s build() method yielding the resulting WebConfig instance.">ビルダーの<code>build()</code>メソッドを呼び出して、結果の<code>WebConfig</code>インスタンスを生成します。</span>

</li>
</ol>
</div>
</div>

<h2 id="_conversions_using_javabean_deserialization"><span class="merged" id="all.JxBB6" title="原文 : Conversions using JavaBean Deserialization">JavaBean直列化復元を使用した変換</span></h2>
<div class="section">
<p><span class="merged" id="all.2oeczc" title="原文 : The config system can also interpret your classes as JavaBeans and use the normal bean naming conventions to map configuration data to your POJO classes, using one of these patterns:">構成システムでは、次のいずれかのパターンを使用して、クラスをJavaBeansとして解釈し、通常のBeanネーミング規則を使用して構成データをPOJOクラスにマップすることもできます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4g78Xu" title="原文 : POJO as JavaBean - The config system treats the target class itself as a JavaBean, assigning values from the config to the bean properties of the POJO class."><router-link @click.native="this.scrollFix('#pojoAsJavaBean')" to="#pojoAsJavaBean">「JavaBeanとしてのPOJO」</router-link> - 構成システムは、ターゲット・クラス自体をJavaBeanとして扱い、構成の値をPOJOクラスのBeanプロパティに割り当てます。</span>

</li>
<li>
<span class="merged" id="all.2vz8IE" title="原文 : builder as JavaBean - The config system invokes the POJO&rsquo;s builder() method to obtain a builder for that POJO type and treats the builder class as a JavaBean, assigning values from the config to the builder&rsquo;s bean properties and then invoking the builder&rsquo;s build method to create an instance of the target POJO class."><router-link @click.native="this.scrollFix('#builderAsJavaBean')" to="#builderAsJavaBean">「JavaBeanとしてのビルダー」</router-link> - 構成システムはPOJO <code>builder()</code>メソッドを呼び出してそのPOJOタイプのビルダーを取得し、<em>「ビルダー」</em>クラスをJavaBeanとして処理し、構成からビルダーBeanのプロパティに値を割り当ててから、ビルダーの<code>build</code>メソッドを呼び出してターゲットPOJOクラスのインスタンスを作成します。</span>

</li>
<li>
<span class="merged" id="all.3AYHHr.spl1" title="原文 : POJO with factory method or decorated constructor - The config system finds a from method or a constructor on the POJO class itself which accepts annotated arguments, then invokes that method or constructor passing the specified arguments based on the config."><router-link @click.native="this.scrollFix('#pojoWithFactoryMethodOrConstructor')" to="#pojoWithFactoryMethodOrConstructor">「ファクトリ・メソッドまたは修飾コンストラクタを持つPOJO」</router-link> - 構成システムは、注釈付き引数を受け入れるPOJOクラス自体で<code>from</code>メソッドまたはコンストラクタを検索し、そのメソッドまたはコンストラクタを呼び出して、構成に基づいて指定された引数を渡します。</span> <span class="merged" id="all.3AYHHr.spl2" title="原文 : The from method returns an instance of the POJO class initialized with the values passed as arguments."><code>from</code>メソッドは、引数として渡された値で初期化されたPOJOクラスのインスタンスを返します。</span> 

</li>
</ol>
<p><span class="merged" id="all.3NGxAb" title="原文 : The following sections describe these patterns in more detail.">次の各項では、これらのパターンについて詳しく説明します。</span></p>

<p><span class="merged" id="all.2T3wSR.spl1" title="原文 : This feature is available in Object mapping module, and is added through Java ServiceLoader mechanism.">この機能はオブジェクト・マッピング・モジュールで使用可能で、Java <code>ServiceLoader</code>メカニズムを介して追加されます。</span> <span class="merged" id="all.2T3wSR.spl2" title="原文 : This is no longer part of core Config module, as it depends on reflection.">これは、リフレクションに依存するため、コア構成モジュールの一部ではなくなりました。</span> </p>

<markup
lang="xml"
title="<code>pom.xml</code>でのオブジェクト・マッピング依存関係の構成"
>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-config-object-mapping&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>


<h3 id="pojoAsJavaBean"><span class="merged" id="all.46kfhE" title="原文 : POJO as JavaBean">JavaBeanとしてのPOJO</span></h3>
<div class="section">
<p><span class="merged" id="all.3yvXKp" title="原文 : If your POJO target class is already a JavaBean - or you can modify it to become one - you might be able to avoid writing any explicit mapping code yourself.">POJOターゲット・クラスがすでにJavaBeanである場合、またはそれがそれになるように変更できる場合は、明示的なマッピング・コードを自分で記述しなくてもかまいません。</span></p>

<p><span class="merged" id="all.4GM9d2.spl1" title="原文 : The config system invokes the no-args constructor on the target class to create a new instance.">configシステムは、ターゲット・クラスで引数なしのコンストラクタを呼び出して、新しいインスタンスを作成します。</span> <span class="merged" id="all.4GM9d2.spl2" title="原文 : It treats each public setter method and each public non-final field as a JavaBean property.">これは、各public setterメソッドと各public非finalフィールドをJavaBeanプロパティとして扱います。</span> <span class="merged" id="all.4GM9d2.spl3" title="原文 : The config system processes any non-primitive property recursively as a JavaBean.">構成システムは、非プリミティブ・プロパティをJavaBeanとして再帰的に処理します。</span> <span class="merged" id="all.4GM9d2.spl4" title="原文 : In this way the config system builds up the target object from the config data.">これにより、構成システムは構成データからターゲット・オブジェクトをビルドします。</span> </p>

<p><span class="merged" id="all.3Oru9" title="原文 : By default, the system matches potential JavaBean property names with config keys in the configuration.">デフォルトでは、システムは潜在的なJavaBeanプロパティ名を構成内の構成鍵と照合します。</span></p>

<p><span class="merged" id="all.18EOig" title="原文 : Use the Value annnotation to control some of the JavaBean processing for a given property."><a href="./apidocs/io.helidon.config/io/helidon/config/Value.html" id="" target="_blank" ><code>Value</code></a>注釈を使用して、特定のプロパティのJavaBean処理の一部を制御します。</span></p>

<div class="block-title"><span class="merged" id="all.vDvMN" title="原文 : Value Annotation"><span><code>Value</code>注釈</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2CrnVw"  title="原文:: Attribute">属性</span></th>
<th><span class="merged" id="all.JUOSC.4"  title="原文:: Usage">使用方法</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.ALBpW"  title="原文: key"><code>key</code></span></td>
<td class=""><span class="merged" id="all.PherR" title="原文 : Indicates which config key should match this JavaBean property">このJavaBeanプロパティに一致する必要がある構成キーを示します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.wx49z"  title="原文: withDefault"><code>withDefault</code></span></td>
<td class=""><span class="merged" id="all.4VhCOw" title="原文 : String used for the bean property default value if none is set in the config">構成に何も設定されていない場合にBeanプロパティのデフォルト値に使用される<code>String</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GdRiC"  title="原文: withDefaultSupplier"><code>withDefaultSupplier</code></span></td>
<td class=""><span class="merged" id="all.QZ1gY" title="原文 : Supplier of the default bean property value if nont is set in the config">構成で非設定が設定されている場合のデフォルトのBeanプロパティ値の<code>Supplier</code></span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.g23tM" title="原文 : To exclude a bean property from the config system bean processing annotate it with Config.Transient.">Beanプロパティを構成システムから除外するには、Beanプロパティに<a href="./apidocs/io.helidon.config/io/helidon/config/Config.Transient.html" id="" target="_blank" ><code>Config.Transient</code></a>の注釈を付けます。</span></p>

<p><span class="merged" id="all.34xZWY" title="原文 : Here is an example using the app portion of the example configuration from the introduction.">次に、概要の構成例の<code>app</code>部分を使用した例を示します。</span></p>

<markup
lang="java"
title="setterを介して<code>app</code>プロパティをロードするJava bean"
>public class AppConfig {
    private Instant timestamp;
    private String greeting;
    private int pageSize;
    private List&lt;Integer&gt; basicRange;

    public AppConfig() {                                          <span class="conum" data-value="1" />
    }

    public void setGreeting(String greeting) {                    <span class="conum" data-value="2" />
        this.greeting = greeting;
    }
    public String getGreeting() {
        return greeting;
    }

    @Value(key = "page-size",                              <span class="conum" data-value="3" />
                  withDefault = "10")                             <span class="conum" data-value="4" />
    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
    public int getPageSize() {
        return pageSize;
    }

    @Value(key = "basic-range",                            <span class="conum" data-value="5" />
                  withDefaultSupplier = BasicRangeSupplier.class) <span class="conum" data-value="6" />
    public void setBasicRange(List&lt;Integer&gt; basicRange) {
        this.basicRange = basicRange;
    }
    public List&lt;Integer&gt; getBasicRange() {
        return basicRange;
    }

    @Config.Transient                                             <span class="conum" data-value="7" />
    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }
    public Instant getTimestamp() {
        return timestamp;
    }

    public static class BasicRangeSupplier
            implements Supplier&lt;List&lt;Integer&gt;&gt; {                  <span class="conum" data-value="8" />
        @Override
        public List&lt;Integer&gt; get() {
            return List.of(-10, 10);
        }
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.xdLzM" title="原文 : Public no-parameter constructor.">パブリックのパラメータなしコンストラクタです。</span></li>
<li data-value="2"><span class="merged" id="all.2wiqkw" title="原文 : Property greeting is not customized and will be set from the config node with the key greeting, if present in the config.">プロパティ<code>greeting</code>はカスタマイズされておらず、構成ノードからキー<code>greeting</code>を使用して設定されます(構成に存在する場合)。</span></li>
<li data-value="3"><span class="merged" id="all.1QEJ2W" title="原文 : Property pageSize is matched to the config key page-size.">プロパティ<code>pageSize</code>は、構成キー<code>page-size</code>と照合されます。</span></li>
<li data-value="4"><span class="merged" id="all.Ww21N" title="原文 : If the page-size config node does not exist, the pageSize bean property defaults to 10."><code>page-size</code>構成ノードが存在しない場合、<code>pageSize</code> beanプロパティはデフォルトで<code>10</code>に設定されます。</span></li>
<li data-value="5"><span class="merged" id="all.4e7hkg" title="原文 : Property basicRange is matched to the config key basic-range.">プロパティ<code>basicRange</code>は、構成キー<code>basic-range</code>と照合されます。</span></li>
<li data-value="6"><span class="merged" id="all.3JDGHf" title="原文 : If the basic-range config node does not exist, a BasicRangeSupplier instance will provide the default value."><code>basic-range</code>構成ノードが存在しない場合、<code>BasicRangeSupplier</code>インスタンスがデフォルト値を提供します。</span></li>
<li data-value="7"><span class="merged" id="all.2Wukjm" title="原文 : The timestamp bean property is never set, even if the config contains a node with the key timestamp.">構成にキーが<code>timestamp</code>のノードが含まれている場合でも、<code>timestamp</code> beanプロパティは設定されません。</span></li>
<li data-value="8"><span class="merged" id="all.1Xso6e" title="原文 : BasicRangeSupplier is used to supply the List&lt;Integer&gt; default value."><code>BasicRangeSupplier</code>は、<code>List&lt;Integer></code>のデフォルト値を指定するために使用されます。</span></li>
</ul>
<p><span class="merged" id="all.3oywoK" title="原文 : Here is an example of code loading config and mapping part of it to the AppConfig bean above.">次に、コード・ロード構成とその一部の<code>AppConfig</code> beanへのマッピングの例を示します。</span></p>

<markup
lang="java"
title="<code>AppConfig</code>クラスへの<code>app</code>構成ノードのマップ"
>Config config = Config.create(classpath("application.conf"));

AppConfig app = config.get("app")
        .as(AppConfig.class)
        .get();                               <span class="conum" data-value="1" />

//assert that all values are loaded from file
assert app.getGreeting().equals("Hello");
assert app.getPageSize() == 20;
assert app.getBasicRange().size() == 2
        &amp;&amp; app.getBasicRange().get(0) == -20
        &amp;&amp; app.getBasicRange().get(1) == 20;

//assert that Transient property is not set
assert app.getTimestamp() == null;                          <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.43GuU1" title="原文 : The config system finds no registered ConfigMapper for AppConfig and so applies the JavaBean pattern to convert the config to an AppConfig instance.">構成システムは、<code>AppConfig</code>に登録されている<code>ConfigMapper</code>を検出しないため、JavaBeanパターンを適用して構成を<code>AppConfig</code>インスタンスに変換します。</span></li>
<li data-value="2"><span class="merged" id="all.1Uvi7D" title="原文 : Because the bean property timestamp was marked as transient, the config system did not set it.">Beanプロパティ<code>timestamp</code>は一時としてマークされているため、構成システムはこれを設定しませんでした。</span></li>
</ul>
</div>

<h3 id="builderAsJavaBean"><span class="merged" id="all.CldLj" title="原文 : Builder as JavaBean">JavaBeanとしてのビルダー</span></h3>
<div class="section">
<p><span class="merged" id="all.3OGu0f.spl1" title="原文 : If the target class includes the public static method builder() that returns any object, then the config system will make sure that the return type has a method build() which returns an instance of the target class.">ターゲット・クラスに、オブジェクトを返すpublic staticメソッド<code>builder()</code>が含まれている場合、構成システムは、ターゲット・クラスのインスタンスを返すメソッド<code>build()</code>が戻り型にあることを確認します。</span> <span class="merged" id="all.3OGu0f.spl2" title="原文 : If so, the config system treats the builder as a JavaBean and">その場合、構成システムは<em>「ビルダー」</em>をJavaBeanとして処理し、</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3dZrho" title="原文 : invokes the builder() method to instantiate the builder class,"><code>builder()</code>メソッドを起動してビルダー・クラスをインスタンス化します。</span>

</li>
<li>
<span class="merged" id="all.5bjFf" title="原文 : treats the builder as a JavaBean and maps the Config subtree to it,"><em>「ビルダー」</em>をJavaBeanとして処理し、<code>Config</code>サブツリーをマップ</span>

</li>
<li>
<span class="merged" id="all.11BeRM" title="原文 : invokes the builder&rsquo;s build() method to create the new instance of the target class.">ビルダーの<code>build()</code>メソッドを呼び出して、ターゲット・クラスの新しいインスタンスを作成します。</span>

</li>
</ol>
<p><span class="merged" id="all.2Z0eWT" title="原文 : You can augment the target class with the public static builder() method:">パブリック静的<code>builder()</code>メソッドを使用してターゲット・クラスを拡張できます:</span></p>

<markup
lang="java"
title="<code>Builder</code>を介したJavaBean for <code>app</code>のプロパティ"
>public class AppConfig {
    private String greeting;
    private int pageSize;
    private List&lt;Integer&gt; basicRange;

    private AppConfig(String greeting, int pageSize, List&lt;Integer&gt; basicRange) { <span class="conum" data-value="1" />
        this.greeting = greeting;
        this.pageSize = pageSize;
        this.basicRange = basicRange;
    }

    public String getGreeting() {
        return greeting;
    }

    public int getPageSize() {
        return pageSize;
    }

    public List&lt;Integer&gt; getBasicRange() {
        return basicRange;
    }

    public static Builder builder() {                                            <span class="conum" data-value="2" />
        return new Builder();
    }

    public static class Builder {                                                <span class="conum" data-value="3" />
        private String greeting;
        private int pageSize;
        private List&lt;Integer&gt; basicRange;

        private Builder() {
        }

        public void setGreeting(String greeting) {                               <span class="conum" data-value="4" />
            this.greeting = greeting;
        }

        @Value(key = "page-size",
                      withDefault = "10")
        public void setPageSize(int pageSize) {                                  <span class="conum" data-value="5" />
            this.pageSize = pageSize;
        }

        @Value(key = "basic-range",
                      withDefaultSupplier = BasicRangeSupplier.class)
        public void setBasicRange(List&lt;Integer&gt; basicRange) {                    <span class="conum" data-value="6" />
            this.basicRange = basicRange;
        }

        public AppConfig build() {                                               <span class="conum" data-value="7" />
            return new AppConfig(greeting, pageSize, basicRange);
        }
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2hGiFR" title="原文 : The target class&rsquo;s constructor can be private in this case because new instances are created from the inner class Builder which has access to `AppConfig&rsquo;s private members.">この場合、`AppConfigのprivateメンバーにアクセスできる内部クラス<code>Builder</code>から新しいインスタンスが作成されるため、ターゲット・クラスのコンストラクタを<code>private</code>にできます。</span></li>
<li data-value="2"><span class="merged" id="all.f4J7f" title="原文 : The target class contains public static method builder() which returns an object that itself exposes the method AppConfig build(), so the config system recognizes it.">ターゲット・クラスには、それ自体が<code>AppConfig build()</code>メソッドを公開するオブジェクトを返す<code>public static</code>メソッド<code>builder()</code>が含まれているため、構成システムはそれを認識します。</span></li>
<li data-value="3"><span class="merged" id="all.3r2pyI" title="原文 : The config system treats the AppConfig.Builder (not the enclosing target class) as a JavaBean.">構成システムは、<code>AppConfig.Builder</code> (包含するターゲット・クラスではない)をJavaBeanとして扱います。</span></li>
<li data-value="4"><span class="merged" id="all.AMRj9" title="原文 : The builder&rsquo;s property greeting is not customized and is set from config node with greeting key, if one exists.">ビルダーのプロパティ<code>greeting</code>はカスタマイズされず、<code>greeting</code>キーを持つ構成ノードから設定されます(存在する場合)。</span></li>
<li data-value="5"><span class="merged" id="all.4dzTur" title="原文 : The builder&rsquo;s property pageSize maps to the config key page-size and defaults to 10 if absent.">ビルダーのプロパティ<code>pageSize</code>は構成キー<code>page-size</code>にマップされ、存在しない場合はデフォルトで<code>10</code>に設定されます。</span></li>
<li data-value="6"><span class="merged" id="all.1pAurD" title="原文 : The builder&rsquo;s property basicRange maps to the config key basic-range and uses a BasicRangeSupplier instance to get a default value if needed.">ビルダーのプロパティ<code>basicRange</code>は構成キー<code>basic-range</code>にマップされ、必要に応じて<code>BasicRangeSupplier</code>インスタンスを使用してデフォルト値を取得します。</span></li>
<li data-value="7"><span class="merged" id="all.TQnEx" title="原文 : Finally, the config system invokes the builder&rsquo;s public method build(), creating the new instance of AppConfig for use by the application.">最後に、構成システムはビルダーのパブリック・メソッド<code>build()</code>を呼び出し、アプリケーションで使用する<code>AppConfig</code>の新しいインスタンスを作成します。</span></li>
</ul>
</div>

<h3 id="pojoWithFactoryMethodOrConstructor"><span class="merged" id="all.wg8Jf" title="原文 : Target Class with Annotated Factory Method or Constructor">注釈付きファクトリ・メソッドまたはコンストラクタを持つターゲット・クラス</span></h3>
<div class="section">
<p><span class="merged" id="all.2PFNsj.spl1" title="原文 : Another option is to annotate the parameters to a factory method or to a constructor on the target class.">別のオプションは、<em>「ファクトリ・メソッド」</em>またはターゲット・クラスのコンストラクタにパラメータに注釈を付けることです。</span> <span class="merged" id="all.2PFNsj.spl2" title="原文 : You can add a factory method to the target class, a public static method from with parameters annotated to link them to the corresponding config keys.">対応する構成キーにリンクするために注釈が付けられたパラメータを使用して、<em>「ファクトリ・メソッド」</em>をターゲット・クラス(<code>public static</code>メソッド<code>from</code>)に追加できます。</span> <span class="merged" id="all.2PFNsj.spl3" title="原文 : Or you can add or modify a constructor with parameters, similarly annotated to form the link from each parameter to the corresponding config key.">または、各パラメータから対応する構成キーへのリンクを形成するように注釈を付けて、パラメータを含むコンストラクタを追加または変更できます。</span> </p>

<div class="admonition warning">
<p class="admonition-textlabel"><span class="merged" id="all.2dRYIU"  title="原文:: Warning">警告</span></p>
<p ><p><span class="merged" id="all.x8dNu.spl1" title="原文 : Be sure to annotate each parameter of the from method or constructor with @Value and specify the key to use for the mapping."><code>from</code>メソッドまたはコンストラクタの各パラメータに<code>@Value</code>の注釈を付け、マッピングに使用するキーを指定してください。</span> <span class="merged" id="all.x8dNu.spl2" title="原文 : The parameter names in the Java code are not always available at runtime to map to config keys.">Javaコード内のパラメータ名は、構成キーにマップするために実行時に常に使用できるわけではありません。</span> <span class="merged" id="all.x8dNu.spl3" title="原文 : (They might be arg0, arg1, etc.)">(<code>arg0</code>、<code>arg1</code>など。)</span> </p>
</p>
</div>
<markup
lang="java"
title="ファクトリ・メソッド<code>from</code>を持つターゲット・クラス"
>public class AppConfig {
    private final String greeting;
    private final int pageSize;
    private final List&lt;Integer&gt; basicRange;

    private AppConfig(String greeting, int pageSize, List&lt;Integer&gt; basicRange) { <span class="conum" data-value="1" />
        this.greeting = greeting;
        this.pageSize = pageSize;
        this.basicRange = basicRange;
    }

    public String getGreeting() {
        return greeting;
    }

    public int getPageSize() {
        return pageSize;
    }

    public List&lt;Integer&gt; getBasicRange() {
        return basicRange;
    }

    public static AppConfig from(                                                <span class="conum" data-value="2" />
            @Value(key = "greeting")
                    String greeting,                                             <span class="conum" data-value="3" />
            @Value(key = "page-size",
                          withDefault = "10")
                    int pageSize,
            @Value(key = "basic-range",
                          withDefaultSupplier = BasicRangeSupplier.class)
                    List&lt;Integer&gt; basicRange) {
        return new AppConfig(greeting, pageSize, basicRange);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.T8Je9" title="原文 : The target class constructor can be private because the factory method on the same class has access to it.">ターゲット・クラスのコンストラクタは、同じクラスのファクトリ・メソッドがアクセスできるため、<code>private</code>にすることができます。</span></li>
<li data-value="2"><span class="merged" id="all.3eaKbx.spl1" title="原文 : The config system invokes the factory method from(…​), passing arguments it has fetched from the correspondingly-named config subtrees.">configシステムはファクトリ・メソッド<code>from(…​)</code>を呼び出し、対応する名前のconfigサブツリーからフェッチした引数を渡します。</span> <span class="merged" id="all.3eaKbx.spl2" title="原文 : The factory method returns the new initialized AppConfig instance.">ファクトリ・メソッドは、初期化された新しい<code>AppConfig</code>インスタンスを返します。</span> <span class="merged" id="all.3eaKbx.spl3" title="原文 : Note the consistent use of @Value(key = &quot;…​&quot;) on each parameter.">各パラメータでの<code>@Value(key = "…​")</code>の一貫した使用方法に注意してください。</span> </li>
<li data-value="3"><span class="merged" id="all.1pSuGb.spl1" title="原文 : Because the property greeting does not specify a default value the property is mandatory and must appear in the configuration source.">プロパティ<code>greeting</code>ではデフォルト値が指定されないため、プロパティは<strong>必須</strong>であり、構成ソースに表示される必要があります。</span> <span class="merged" id="all.1pSuGb.spl2" title="原文 : Otherwise the config system throws a ConfigMappingException.">それ以外の場合、構成システムは<code>ConfigMappingException</code>をスローします。</span> </li>
</ul>
<p><span class="merged" id="all.ZEJ85.spl1" title="原文 : Alternatively, you can use an annotated constructor instead of a static factory method.">または、staticファクトリ・メソッドのかわりに注釈付きコンストラクタを使用することもできます。</span> <span class="merged" id="all.ZEJ85.spl2" title="原文 : Revising the example above, make the constructor public, annotate its parameters, and remove the now-unneeded from factory method.">前述の例を修正し、コンストラクタをpublicにし、そのパラメータに注釈を付け、不要な<code>from</code>ファクトリ・メソッドを削除します。</span> </p>

<markup
lang="java"
title="注釈付きpublicコンストラクタを持つターゲット・クラス"
>public class AppConfig {
    ...
    public AppConfig( <span class="conum" data-value="1" />
        @Value(key = "greeting") <span class="conum" data-value="2" />
                String greeting,
        @Value(key = "page-size",
                          withDefault = "10")
                int pageSize,
        @Value(key = "basic-range",
                          withDefaultSupplier = BasicRangeSupplier.class)
                List&lt;Integer&gt; basicRange) {
        this.greeting = greeting;
        this.pageSize = pageSize;
        this.basicRange = basicRange;
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.11U5eo" title="原文 : Constructor is public.">コンストラクタは<code>public</code>です。</span></li>
<li data-value="2"><span class="merged" id="all.3KAAKl" title="原文 : Each parameter has the ConfigValue annotation to at least specify the config key name.">各パラメータには、少なくとも構成キー名を指定するための<code>ConfigValue</code>注釈があります。</span></li>
</ul>
<p><span class="merged" id="all.1PnmXB" title="原文 : When the application invokes config.as(AppConfig.class), the config system locates the public annotated constructor and invokes it, passing as arguments the data it fetches from the configuration matching the annotation key names with the configuration keys.">アプリケーションが<code>config.as(AppConfig.class)</code>を呼び出すと、構成システムはpublic注釈付きコンストラクタを検索して呼び出し、注釈<code>key</code>名と構成キーが一致する構成からフェッチしたデータを引数として渡します。</span></p>

</div>
</div>
</doc-view>
