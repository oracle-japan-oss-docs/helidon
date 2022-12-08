<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4hyQm" title="原文 : The Configuration Component">構成コンポーネント</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3P1K4s" title="原文 : The config component provides a Java API to load and process configuration properties from various sources into a Config object which the application can use to retrieve config data.">構成コンポーネントには、様々なソースから構成データを取得するためにアプリケーションで使用できる<code>Config</code>オブジェクトに構成プロパティをロードして処理するためのJava APIが用意されています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.36"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.nB3Z8" title="原文 : To enable Config add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">構成を有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-config&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>

</div>

<h2 id="_getting_started"><span class="merged" id="all.J6ASm.4"  title="原文:: Getting Started">開始</span></h2>
<div class="section">

<h3 id="_introducing_the_config_system"><span class="merged" id="all.4BYhFs" title="原文 : Introducing the Config System">構成システムの概要</span></h3>
<div class="section">
<p><span class="merged" id="all.3ABOpr.spl1" title="原文 : A brief overview of the config system helps clarify its different parts and how they work together.">構成システムの簡単な概要は、様々な部分とそれらがどのように連携するかを明確にするのに役立ちます。</span> <span class="merged" id="all.3ABOpr.spl2" title="原文 : Most applications will typically deal with more than one of these parts.">通常、ほとんどのアプリケーションでは、これらの部分を複数処理します。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="構成の概要" src="./images/config/overview.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.IH54a" title="原文 : These are the main parts of the configuration system:">構成システムの主要部分は次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.156Pmt" title="原文 : Config system - allows you to read configuration data in an application"><code>Config</code>システム - アプリケーションの構成データを読み取ることができます</span></p>

</li>
<li>
<p><span class="merged" id="all.3czl8a" title="原文 : A config source - a location containing configuration data (File, Map, Properties etc.)">構成ソース - 構成データ(ファイル、マップ、プロパティなど)を含むロケーション</span></p>

</li>
<li>
<p><span class="merged" id="all.2m3J60" title="原文 : A config parser - a component capable of transforming bytes into configuration data (such as JSON content, YAML etc.)">構成パーサー - バイトを構成データ(JSONコンテンツ、YAMLなど)に変換できるコンポーネント。</span></p>

</li>
</ul>
<p><span class="merged" id="all.uEb9C" title="原文 : The Config system handles configuration data in an in-memory tree that represents the configuration structure and values."><code>Config</code>システムは、構成構造および値を表すメモリー内ツリーで構成データを処理します。</span></p>

<p><span class="merged" id="all.425cWZ" title="原文 : This approach allows us to take any source data, be it a flat properties file or an object structure such as JSON, and transform it into a single tree that allows for overriding of values using heterogeneous config sources.">このアプローチでは、任意のソース・データをフラットなプロパティ・ファイルまたはJSONなどのオブジェクト構造にして、異機種間構成ソースを使用して値をオーバーライドできる単一のツリーに変換できます。</span></p>

<p><span class="merged" id="all.33aMqZ" title="原文 : We are using the . as a separator of tree structure."><code>.</code>をツリー構造のセパレータとして使用しています。</span></p>

<p><span class="merged" id="all.3fH1W8" title="原文 : Example of two config sources that can be used by Config with the same data tree in different formats:">異なる形式の同じデータ・ツリーを使用して<code>Config</code>で使用できる2つの構成ソースの例:</span></p>

<p><span class="merged" id="all.296Wqh" title="原文 : A Properties source:">プロパティ・ソース:</span></p>

<markup
lang="properties"

>web.page-size=25</markup>

<p><span class="merged" id="all.49Sxz8" title="原文 : A YAML source:">YAMLソース:</span></p>

<markup
lang="yaml"

>web:
  page-size: 25</markup>

<p><span class="merged" id="all.2BiSZI" title="原文 : The configuration has the same internal representation in Config and can be accessed using the Config API as follows:">構成は<code>Config</code>で同じ内部表現を持ち、次のように<code>Config</code> APIを使用してアクセスできます:</span></p>

<markup
lang="java"

>int pageSize = config.get("web.page-size")
        .asInt()
        .orElse(20);</markup>

<p><span class="merged" id="all.LFFLX" title="原文 : Or using the tree node approach:">または、ツリー・ノード・アプローチを使用します:</span></p>

<markup
lang="java"

>int pageSize = config
                .get("web")
                .get("page-size")
                .asInt()
                .orElse(20);</markup>

<p><span class="merged" id="all.31wmv1" title="原文 : For this first example we can see the basic features of Config:">この最初の例では、<code>Config</code>の基本機能を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3cSouf" title="原文 : Configuration is a tree of Config nodes">構成は<code>Config</code>ノードのツリーです</span></p>

</li>
<li>
<p><span class="merged" id="all.2lFaXt" title="原文 : You can use . as a tree separator when requesting node values">ノード値をリクエストするときに、<code>.</code>をツリー・セパレータとして使用できます</span></p>

</li>
<li>
<p><span class="merged" id="all.1XL74T" title="原文 : Each config value can be retrieved as a typed object, with shortcut methods for the most commonly used types, such as int, String, long and other">各構成値は、<code>int</code>, <code>String</code>, <code>long</code>などの最も一般的に使用されるタイプのショートカット・メソッドを使用して、型付きオブジェクトとして取得できます</span></p>

</li>
<li>
<p><span class="merged" id="all.2VAmc7" title="原文 : You can immediately provide a default value for the cases the configuration option is not defined in any source">構成オプションがどのソースにも定義されていない場合は、すぐにデフォルト値を指定できます</span></p>

</li>
</ul>
</div>

<h3 id="_overriding_values"><span class="merged" id="all.CiWC4" title="原文 : Overriding Values">値のオーバーライド</span></h3>
<div class="section">
<p><span class="merged" id="all.4aoyeP" title="原文 : The Config system treats config sources as a hierarchy, where the first source that has a specific configuration key &quot;wins&quot; and its value is used, other sources are not even queried for it."><code>Config</code>システムでは、構成ソースは階層として扱われ、特定の構成キーを持つ最初のソースが優先され、その値が使用され、他のソースに対しても問合せが行われません。</span></p>

<p><span class="merged" id="all.3lGYPp" title="原文 : For example the default configuration when you use Config.create() uses the following config sources:">たとえば、<code>Config.create()</code>を使用する場合のデフォルト構成では、次の構成ソースが使用されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.i528T" title="原文 : System properties config source">システム・プロパティ構成ソース</span>

</li>
<li>
<span class="merged" id="all.1IyfoZ" title="原文 : Environment variables config source">環境変数config source</span>

</li>
<li>
<span class="merged" id="all.6T1hV.spl1" title="原文 : A classpath config source called application.? where the ? depends on supported media types currently on the classpath."><code>?</code>が現在クラスパスにあるサポートされているメディア・タイプに依存する、<code>application.?</code>と呼ばれるクラスパス構成ソース。</span> <span class="merged" id="all.6T1hV.spl2" title="原文 : By default it is properties, if you have YAML support on classpath, it would be application.yaml (a ConfigParser may add additional supported suffixes for default file)">デフォルトは<code>properties</code>です。クラスパスでYAMLをサポートしている場合、<code>application.yaml</code>になります(<code>ConfigParser</code>では、デフォルト・ファイルに対してサポートされているサフィクスが追加される場合があります)</span> 

</li>
</ol>
<p><span class="merged" id="all.Tg6se" title="原文 : Let&rsquo;s consider the following keys:">次のキーについて考えてみます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2WhLUn" title="原文 : System property answer=42">システム・プロパティ<code>answer=42</code></span>

</li>
<li>
<span class="merged" id="all.4D5FgS" title="原文 : Environment variable ANSWER=38">環境変数<code>ANSWER=38</code></span>

</li>
<li>
<span class="merged" id="all.1zsXtS" title="原文 : A key in a configuration file answer=36">構成ファイル<code>answer=36</code>内のキー</span>

</li>
</ol>
<p><span class="merged" id="all.2h29MY" title="原文 : When you request config.get(`answer).asInt().orElse(25), you would get `42"><code>config.get(`answer</code> ).asInt().orElse(25) <code>, you would get `42</code>をリクエストする場合</span></p>

<p><span class="merged" id="all.3XXWIt" title="原文 : This allows you to configure environment specific configuration values through system properties, environment variables, or through files available on each environment (be it a physical machine, a Kubernetes pod, or a docker image) without changing your source code.">これにより、システム・プロパティ、環境変数または各環境で使用可能なファイル(物理マシン、Kubernetesポッドまたはdockerイメージ)を使用して、ソース・コードを変更せずに環境固有の構成値を構成できます。</span></p>

</div>

<h3 id="built-in-formats"><span class="merged" id="all.5l3pu" title="原文 : Built-in Support for Config Formats">構成形式の組込みサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.1algop.spl1" title="原文 : If you add additional Helidon config maven artifacts to your dependencies, then the config system can read formats other than Java properties format and the default configuration will search for other application file types in the following order.">追加のHelidon構成mavenアーティファクトを依存関係に追加すると、構成システムはJavaプロパティ・フォーマット以外のフォーマットを読み取ることができ、デフォルト構成は次の順序で他の<code>application</code>ファイル・タイプを検索します。</span> <span class="merged" id="all.1algop.spl2" title="原文 : Note that the default configuration stops once it finds one of the files below; it does not merge all such files it can find.">デフォルトの構成は、以下のファイルのいずれかを見つけると<em>停止</em>することに注意してください。(見つけることができるすべてのファイルをマージ<em>しません</em>。)</span> </p>

<div class="block-title"><span class="merged" id="all.4DDsKj" title="原文 : Default Config Files (most to least important)"><span>デフォルトの構成ファイル(最も重要度の高いものから低いものへ)</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1c5Nmn.1"  title="原文:: Source">ソース</span></th>
<th><span class="merged" id="all.3In5eB" title="原文 : Helidon maven artifact ID (group ID: io.helidon.config)">Helidon mavenアーティファクトID (グループID): <code>io.helidon.config</code> )</span></th>
<th><span class="merged" id="all.3Wy1iS"  title="原文:: Notes">ノート</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Fz2xo"  title="原文: application.yaml"><code>application.yaml</code></span></td>
<td class=""><span class="merged" id="all.1pWSoi"  title="原文: helidon-config-yaml"><code>helidon-config-yaml</code></span></td>
<td class=""><span class="merged" id="all.4BT9uy" title="原文 : YAML format http://yaml.org">YAML形式の<a href="http://yaml.org" id="" target="_blank" >http://yaml.org</a></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Tvujl"  title="原文: application.conf"><code>application.conf</code></span></td>
<td class=""><span class="merged" id="all.R7mzW"  title="原文: helidon-config-hocon"><code>helidon-config-hocon</code></span></td>
<td class=""><span class="merged" id="all.4OC8wO" title="原文 : HOCON format https://github.com/lightbend/config#using-hocon-the-json-superset">HOCON形式<a href="https://github.com/lightbend/config#using-hocon-the-json-superset" id="" target="_blank" >https://github.com/lightbend/config#using-hocon-the-json-superset</a></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2AaIK8"  title="原文: application.json"><code>application.json</code></span></td>
<td class=""><span class="merged" id="all.R7mzW.1"  title="原文: helidon-config-hocon"><code>helidon-config-hocon</code></span></td>
<td class=""><span class="merged" id="all.37H9fk" title="原文 : JSON format https://json.org/">JSON形式の<a href="https://json.org/" id="" target="_blank" >https://json.org/</a></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1OdSRC"  title="原文: application.properties"><code>application.properties</code></span></td>
<td class=""><span class="merged" id="all.3wJks5"  title="原文: helidon-config"><code>helidon-config</code></span></td>
<td class=""><span class="merged" id="all.1STSzW" title="原文 : Java properties format">Javaプロパティの形式</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 id="_config_filters"><span class="merged" id="all.2FNhp7" title="原文 : Config Filters">構成フィルタ</span></h3>
<div class="section">
<p><span class="merged" id="all.173cX3" title="原文 : Config system applies configured config filters on each value when it is requested for the first time.">構成システムは、各値が初めてリクエストされたときに、その値に構成済の<em>「構成フィルタ」</em>を適用します。</span></p>

<p><span class="merged" id="all.4JnUqm" title="原文 : There is a built-in filter called ValueResolvingFilter (enabled by default, can be disabled through API) that resolves references to other keys in values in configuration.">構成内の値の他のキーへの参照を解決する、<code>ValueResolvingFilter</code>と呼ばれる組込みフィルタがあります(デフォルトでは有効になっており、APIを介して無効にできます)。</span></p>

<p><span class="merged" id="all.2jQqvU" title="原文 : Example: Let&rsquo;s consider the following example properties file">Example: 次のプロパティ・ファイルの例を考えてみます</span></p>

<markup
lang="properties"

>host=localhost
first-service.host=${host}/firstservice
second-service.host=${host}/secondservice</markup>

<p><span class="merged" id="all.1ozCq7" title="原文 : The filter resolves the ${host} reference to the localhost value.">このフィルタは、<code>${host}</code>参照を<code>localhost</code>値に解決します。</span></p>

<p><span class="merged" id="all.49B5Ta" title="原文 : This makes it easier to override values in testing and production, as you can just override the host key and leave the URIs same.">これにより、<code>host</code>キーをオーバーライドしてURIを同じままにするだけで済むため、テストおよび本番の値を簡単にオーバーライドできます。</span></p>

</div>

<h3 id="_change_support"><span class="merged" id="all.8hfF6" title="原文 : Change Support">サポートの変更</span></h3>
<div class="section">
<p><span class="merged" id="all.2ClHDC.spl1" title="原文 : Config is an immutable in-memory tree.">Configは不変のインメモリー・ツリーです。</span> <span class="merged" id="all.2ClHDC.spl2" title="原文 : Nevertheless we know that configuration sometimes changes, and we may want to react to such changes.">ただし、構成が変更されることがあり、そのような変更に対応する必要があることがわかっています。</span> </p>

<p><span class="merged" id="all.TfdC" title="原文 : In Config system, you can do this through change support provided by these components:"><code>Config</code>システムでは、次のコンポーネントによって提供される変更サポートを介してこれを実行できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1BLrkx" title="原文 : Config.onChange() API - you can use to add your listener, to be notified of configuration changes"><code>Config.onChange()</code> API - 使用してリスナーを追加し、構成の変更を通知できます</span>

</li>
<li>
<span class="merged" id="all.1IpCwS.spl1" title="原文 : PollingStrategy - a component providing regular events to check if a source has changed."><code>PollingStrategy</code> - ソースが変更されたかどうかをチェックする通常のイベントを提供するコンポーネント。</span> <span class="merged" id="all.1IpCwS.spl2" title="原文 : This requires support in config sources themselves (see PollableSource)">これには、構成ソース自体のサポートが必要です(<code>PollableSource</code>を参照)</span> 

</li>
<li>
<span class="merged" id="all.1BLYuk.spl1" title="原文 : ChangeWatcher - a component watching the underlying source for changes."><code>ChangeWatcher</code> - 基礎となるソースの変更を監視するコンポーネント。</span> <span class="merged" id="all.1BLYuk.spl2" title="原文 : This requires support in config sources themselves (see WatchableSource)">これには、構成ソース自体のサポートが必要です(<code>WatchableSource</code>を参照)</span> 

</li>
<li>
<span class="merged" id="all.4XgnDP" title="原文 : EventConfigSource - an event source that is capable of notifying about changes iteslf"><code>EventConfigSource</code> - 変更について通知できるイベント・ソースiteslf</span>

</li>
</ol>
<p><span class="merged" id="all.3z96eT" title="原文 : If you want to receive onChange events, you must configure your Config with at least one source that is capable of providing changes (having a PollingStrategy or ChangeWatcher configured, or implementing EventConfigSource)"><code>onChange</code>イベントを受信する場合は、変更を提供できるソース(<code>PollingStrategy</code>または<code>ChangeWatcher</code>が構成されているか、<code>EventConfigSource</code>が実装されている)を少なくとも1つ使用して構成を構成する必要があります</span></p>

</div>

<h3 id="_typed_config_values"><span class="merged" id="all.ig4Hs" title="原文 : Typed config values">入力された構成値</span></h3>
<div class="section">
<p><span class="merged" id="all.414z7t" title="原文 : The Config object lets your application retrieve config data as a typed ConfigValue."><code>Config</code>オブジェクトを使用すると、アプリケーションで構成データを型付きConfigValueとして取得できます。</span></p>

<p><span class="merged" id="all.NAcnG" title="原文 : You can retrieve a ConfigValue&lt;T&gt; using the following as methods in Config: * asString() - to get a string config value * asBoolean() and other accessors for primitive types * as(Class) - to get a value for a type that has a mapper configured * as(Generic) - to get a value for a type supporting generics (such as Set&lt;String&gt;) * asMap() - to get a map of key to value pairs * asList(Class) - to get a list of typed values * as(Function&lt;Config,T&gt;) - to get a typed value providing a mapper function"><code>Config</code>で次の<code>as</code>メソッドを使用して、<code>ConfigValue&lt;T></code>を取得できます: * <code>asString()</code> - 文字列構成値*<code>asBoolean()</code>およびプリミティブ*<code>as(Class)</code>型のその他のアクセッサを取得 - マッパーが構成されているタイプの値を取得します*<code>as(Generic)</code> - ジェネリック・スをサポートする型(<code>Set&lt;String></code>など)の値を取得します*<code>asMap()</code> - キーと値のペアのマップを取得* <code>asList(Class)</code> - 型付き値のリストを取得*<code>as(Function&lt;Config,T>)</code> - マッパー関数を提供する型付きの値を取得</span></p>

<p><span class="merged" id="all.25EHBe" title="原文 : ConfigValue&lt;T&gt; can be used to obtain: * an Optional&lt;T&gt; value from a single node, * the T value from a single node interpreted as a basic Java type (primitive or simple object) already known to the config system (such as a boolean or a Double), or * a complex Java type from a subtree of the config tree.">ConfigValue&lt;T>は、以下のように使用できます。* 1つのノードからの<code>Optional&lt;T></code>値、* <em>1つのノードから</em>の<code>T</code>値は、基本的なJava型(プリミティブまたは単純なオブジェクト)として解釈され、コンフィグシステムで既に知られているもの(<code>boolean</code>や<code>Double</code>など)、または* コンフィグ・ツリーの<em>サブツリーから</em>の複雑なJava型として解釈されます。</span></p>

<p><span class="merged" id="all.2GhfCZ" title="原文 : + The config system automatically knows how to return List and Map complex types, and you can provide config mappers to convert a config subtree to whatever Java types your application needs.">+構成システムは、<code>List</code>および<code>Map</code>複合タイプを返す方法を自動的に認識し、構成サブツリーをアプリケーションが必要とするJavaタイプに変換するために<em>「構成マッパー」</em>を提供できます。</span></p>

</div>
</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO.8"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<p><span class="merged" id="all.26ttiP" title="原文 : Although the default configuration is very simple to use, your application can take as much control as it needs over">デフォルトの構成は非常に簡単に使用できますが、アプリケーションでは必要なだけ制御できます</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4QIxQz" title="原文 : loading configuration data,">構成データのロード</span></p>

</li>
<li>
<p><span class="merged" id="all.3nV5da" title="原文 : accessing the data once loaded, and">ロード後のデータへのアクセス、および</span></p>

</li>
<li>
<p><span class="merged" id="all.1rsd0H" title="原文 : extending and modifying the behavior of the config system.">構成システムの動作の拡張および変更。</span></p>

</li>
</ul>
<p><span class="merged" id="all.40Ri6g"  title="原文:: You do this by:">これを行うための手順は、次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4MpmOC" title="原文 : creating and invoking methods on a Config.Builder object to construct a Config instance"><code>Config</code>インスタンスを構築するための<code>Config.Builder</code>オブジェクトでのメソッドの作成および起動</span></p>
<p><span class="merged" id="all.2kzduN.spl1" title="原文 : Using a builder, the application can control everything about how the config system creates the resulting Config instance: config sources, parsers, polling strategy, filters, overrides, mappers, whether or not environment variables and Java system properties serve as config sources.">ビルダーを使用すると、アプリケーションは構成システムが結果の<code>Config</code>インスタンスを作成する方法に関するすべてを制御できます: 構成ソース、パーサー、ポーリング戦略、フィルタ、オーバーライド、マッパー、環境変数およびJavaシステム・プロパティが構成ソースとして機能するかどうか。</span> <span class="merged" id="all.2kzduN.spl2" title="原文 : The JavaDoc explains how to use the Config.Builder.">JavaDocでは、<a href="./apidocs/io.helidon.config/io/helidon/config/Config.Builder.html" id="" target="_blank" ><code>Config.Builder</code></a>の使用方法について説明します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.lx7pV" title="原文 : using a config profile to choose the sources to be used"><router-link to="/se/config/09_config-profiles">「構成プロファイル」</router-link>を使用した、使用するソースの選択</span></p>

</li>
<li>
<p><span class="merged" id="all.1v3kyn" title="原文 : creating a meta-configuration file on the runtime classpath or file system to control how the config system prepares the default configuration.">ランタイム・クラスパスまたはファイル・システムに<router-link :to="{path: '/se/config/06_advanced-configuration', hash: '#Config-Advanced-metaconfig'}">meta-configuration</router-link>ファイルを作成して、構成システムがデフォルト構成を準備する方法を制御します。</span></p>

</li>
</ul>
<p><span class="merged" id="all.4ABUzh.spl1" title="原文 : Once created, the Config object provides many methods the application can use to retrieve config data as various Java types."><code>Config</code>オブジェクトを作成すると、アプリケーションで様々なJavaタイプとして構成データを取得するために使用できる多くのメソッドが提供されます。</span> <span class="merged" id="all.4ABUzh.spl2" title="原文 : See the Config JavaDoc for complete details.">詳細は、<a href="./apidocs/io.helidon.config/io/helidon/config/Config.html" id="" target="_blank" ><code>Config</code></a> JavaDocを参照してください。</span> </p>

<p><span class="merged" id="all.BlLPJ" title="原文 : The links in the following tables lead you to more information about various other config topics.">次の表のリンクをクリックすると、その他の様々な構成トピックの詳細が表示されます。</span></p>

<div class="block-title"><span class="merged" id="all.3RJ9ba" title="原文 : Controlling How Config is Loaded"><span>構成のロード方法の制御</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1h27EV"  title="原文:: Topic">トピック</span></th>
<th><span class="merged" id="all.3WlCMY"  title="原文:: Documentation">ドキュメント</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Y9P6z" title="原文 : Where config comes from">configの取得元</span></td>
<td class=""><span class="merged" id="all.3XVeEX" title="原文 : Config sources,Config Profiles, meta-configuration"><router-link to="/se/config/02_config-sources">「構成ソース」</router-link>, <router-link to="/se/config/09_config-profiles">「構成プロファイル」</router-link>, <router-link :to="{path: '/se/config/06_advanced-configuration', hash: '#Config-Advanced-metaconfig'}">meta-configuration</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.b4eLP" title="原文 : What format config data is expressed in">構成データの表現形式</span></td>
<td class=""><span class="merged" id="all.1eGiNN" title="原文 : Config parsers, supported formats"><router-link :to="{path: '/se/config/02_config-sources', hash: '#parsers'}">「構成パーサー」</router-link>, <router-link to="/se/config/08_supported-formats">「サポートされる形式」</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.PDack" title="原文 : How to filter, override, and dereference values">値をフィルタ、オーバーライドおよび参照解除する方法</span></td>
<td class=""><span class="merged" id="all.2NdR8r" title="原文 : Filters and overrides"><router-link :to="{path: '/se/config/06_advanced-configuration', hash: '#filters-and-overrides'}">フィルタおよびオーバーライド</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WHjPi" title="原文 : What happens when config data changes">構成データが変更された場合の処理</span></td>
<td class=""><span class="merged" id="all.3RE1O3" title="原文 : Config polling"><router-link :to="{path: '/se/config/05_mutability-support', hash: '#polling'}">構成ポーリング</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4AVYfJ" title="原文 : How to deal with loading errors">ロード・エラーの処理方法</span></td>
<td class=""><span class="merged" id="all.25YNAE" title="原文 : Config retry policies"><router-link :to="{path: '/se/config/02_config-sources', hash: '#retry'}">再試行ポリシーの構成</router-link></span></td>
</tr>
</tbody>
</table>
</div>
<div class="block-title"><span class="merged" id="all.3R4JtP" title="原文 : Accessing Configuration Data"><span>構成データへのアクセス</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1h27EV.1"  title="原文:: Topic">トピック</span></th>
<th><span class="merged" id="all.3WlCMY.1"  title="原文:: Documentation">ドキュメント</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2Qz2sI" title="原文 : How config data is translated into Java types">構成データをJavaタイプに変換する方法</span></td>
<td class=""><span class="merged" id="all.1TGnKe" title="原文 : Config mappers"><router-link to="/se/config/04_property-mapping">構成マッパー</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.DFNVK" title="原文 : How to navigate config trees">構成ツリーのナビゲート方法</span></td>
<td class=""><span class="merged" id="all.18a9Tv" title="原文 : Navigation"><router-link to="/se/config/03_hierarchical-features">ナビゲーション</router-link></span></td>
</tr>
</tbody>
</table>
</div>
<div class="block-title"><span class="merged" id="all.1ajcab" title="原文 : Extending and Fine-tuning the Config System"><span>構成システムの拡張および微調整</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1h27EV.2"  title="原文:: Topic">トピック</span></th>
<th><span class="merged" id="all.3WlCMY.2"  title="原文:: Documentation">ドキュメント</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4OlMq3" title="原文 : Writing extensions">拡張機能の書込み</span></td>
<td class=""><span class="merged" id="all.40sFfM" title="原文 : Extensions"><router-link to="/se/config/07_extensions">Extensions</router-link></span></td>
</tr>
</tbody>
</table>
</div>
</div>
</doc-view>
