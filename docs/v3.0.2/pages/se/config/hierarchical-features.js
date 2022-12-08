<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.38"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.36" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.BFKET" title="原文 : Configuration Node Types"><router-link @click.native="this.scrollFix('#_configuration_node_types')" to="#_configuration_node_types">構成ノード・タイプ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4gYsUX" title="原文 : Configuration Key"><router-link @click.native="this.scrollFix('#_configuration_key')" to="#_configuration_key">構成キー</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.wJG2X" title="原文 : In-memory Representation of Configuration"><router-link @click.native="this.scrollFix('#_in_memory_representation_of_configuration')" to="#_in_memory_representation_of_configuration">構成のメモリー内表現</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3iOesR" title="原文 : Access by Key"><router-link @click.native="this.scrollFix('#accessByKey')" to="#accessByKey">キー別アクセス</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Jfmar" title="原文 : Access by General Navigation"><router-link @click.native="this.scrollFix('#_access_by_general_navigation')" to="#_access_by_general_navigation">一般ナビゲーションによるアクセス</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1UwJS5" title="原文 : Detaching a Config Subtree"><router-link @click.native="this.scrollFix('#_detaching_a_config_subtree')" to="#_detaching_a_config_subtree">構成サブツリーのデタッチ</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.52"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2Jf8c0.spl1" title="原文 : The config system represents configuration as a tree in memory.">configシステムは、構成をメモリー内のツリーとして表します。</span> <span class="merged" id="all.2Jf8c0.spl2" title="原文 : Many developers will choose to work directly with config values - values from the leaves in the tree - accessing them by their keys.">多くの開発者は、構成値(ツリー内のリーフからの値)を直接操作することを選択し、キーを使用してそれらにアクセスします。</span> <span class="merged" id="all.2Jf8c0.spl3" title="原文 : You can also navigate explicitly among the nodes of the tree without using keys.">キーを使用せずに、ツリーのノード間を明示的に移動することもできます。</span> <span class="merged" id="all.2Jf8c0.spl4" title="原文 : This section describes what the tree looks like and how you can traverse it.">この項では、ツリーの外観とトラバース方法について説明します。</span> </p>

</div>


<h2 id="_configuration_node_types"><span class="merged" id="all.1fezC7" title="原文 : Configuration Node Types">構成ノード・タイプ</span></h2>
<div class="section">
<p><span class="merged" id="all.3s4G9D" title="原文 : The config system represents configuration in memory using three types of nodes, each a different interface defined within the ConfigNode interface.">configシステムは、<a href="./apidocs/io.helidon.config/io/helidon/config/spi/ConfigNode.html" target="_blank"><code>ConfigNode</code></a>インタフェース内で定義された異なるインタフェースを持つ3つのタイプのノードを使用してメモリー内の構成を表します。</span></p>

<div class="block-title"><span class="merged" id="all.4dFfT6" title="原文 : ConfigNode Types"><span><code>ConfigNode</code>タイプ</span></span></div>
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
<th><span class="merged" id="all.3su0xG"  title="原文:: Java Interface">Javaインタフェース</span></th>
<th><span class="merged" id="all.JUOSC.38"  title="原文:: Usage">使用方法</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.35WCJo"  title="原文:: object">オブジェクト</span></td>
<td class=""><span class="merged" id="all.1NNrxL"  title="原文: ConfigNode.ObjectNode"><code>ConfigNode.ObjectNode</code></span></td>
<td class=""><span class="merged" id="all.2Hh30M.spl1" title="原文 : Represents complex structure (a subtree).">複雑な構造(サブツリー)を表します。</span> <span class="merged" id="all.2Hh30M.spl2" title="原文 : Its child nodes can be of any type.">その子ノードは任意のタイプにできます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1G69gO"  title="原文:: list">list</span></td>
<td class=""><span class="merged" id="all.3eu0u6"  title="原文: ConfigNode.ListNode"><code>ConfigNode.ListNode</code></span></td>
<td class=""><span class="merged" id="all.30ULBa.spl1" title="原文 : Represents a list of nodes.">ノードのリストを表します。</span> <span class="merged" id="all.30ULBa.spl2" title="原文 : Its components can be of any type.">任意のタイプのコンポーネントを使用できます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.XSHmW"  title="原文:: value">value</span></td>
<td class=""><span class="merged" id="all.2msxiS"  title="原文: ConfigNode.ValueNode"><code>ConfigNode.ValueNode</code></span></td>
<td class=""><span class="merged" id="all.n1OAl" title="原文 : Represents a leaf node.">リーフ・ノードを表します。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.bSKsa" title="原文 : A node of any type can have a String value.">どのタイプのノードも<code>String</code>値を持つことができます。</span></p>

<p><span class="merged" id="all.c2nHC" title="原文 : Each config tree in memory will have an object node as its root with child nodes as dictated by the source config data from which the config system built the tree.">メモリー内の各構成ツリーには、ルートとしてオブジェクト・ノードがあり、その子ノードは構成システムがツリーを構築したソース構成データによって指定されます。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.3ajUSg" title="原文 : Missing Config Nodes">構成ノードがありません</span></p>
<p ><p><span class="merged" id="all.3XYRrd" title="原文 : If your application attempts to access a non-existent node, for example using">アプリケーションが存在しないノードにアクセスしようとした場合。たとえば、次を使用</span></p>

<markup
lang="java"

>config.get("key.does.not.exist")</markup>

<p><span class="merged" id="all.2KVC6Y.spl1" title="原文 : the config system returns a Config node object with type MISSING.">configシステムは、<code>MISSING</code>タイプの<code>Config</code>ノード・オブジェクトを返します。</span> <span class="merged" id="all.2KVC6Y.spl2" title="原文 : The in-memory config tree contains nodes only of types OBJECT, LIST, and VALUE.">インメモリー構成ツリーには、タイプが<code>OBJECT</code>、<code>LIST</code>および<code>VALUE</code>のノードのみが含まれます。</span> </p>
</p>
</div>

</div>


<h2 id="_configuration_key"><span class="merged" id="all.1Ov129.3"  title="原文:: Configuration Key">構成キー</span></h2>
<div class="section">
<p><span class="merged" id="all.1ic962.spl1" title="原文 : Each config node (except the root) has a non-null key.">各構成ノード(ルートを除く)には、null以外のキーがあります。</span> <span class="merged" id="all.1ic962.spl2" title="原文 : Here is the formal definition of what keys can be:">キーの正式な定義は次のとおりです:</span> </p>

<markup
lang="abnf"
title="The ABNF syntax of config key"
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

</div>


<h2 id="_in_memory_representation_of_configuration"><span class="merged" id="all.1TKXUC" title="原文 : In-memory Representation of Configuration">構成のメモリー内表現</span></h2>
<div class="section">
<p><span class="merged" id="all.2sqng5.spl1" title="原文 : The following example is in HOCON (human-optimized config object notation) format.">次の例は、<a href="https://github.com/lightbend/config/blob/master/HOCON.md" target="_blank">HOCON</a> (人間が最適化した構成オブジェクト表記)形式です。</span> <span class="merged" id="all.2sqng5.spl2" title="原文 : The config system supports HOCON as an extension module.">構成システムでは、HOCONが<router-link :to="{path: '/se/config/supported-formats', hash: '#Config-ModuleHocon'}">「拡張モジュール」</router-link>としてサポートされます。</span> </p>

<markup
lang="hocon"
title="HOCON <code>application.conf</code> file"
>app {
    greeting = "Hello"
    page-size = 20
    basic-range = [ -20, 20 ]
}
data {
    providers: [
        {
            name = "Provider1"
            class = "this.is.my.Provider1"
        },
        {
            name = "Provider2"
            class = "this.is.my.Provider2"
        }
    ]
}</markup>

<p><span class="merged" id="all.S9erz" title="原文 : The diagram below illustrates the in-memory tree for that configuration.">次の図は、その構成のインメモリー・ツリーを示しています。</span></p>


<div class="block-title"><span class="merged" id="all.28qyTu" title="原文 : Config Nodes structure of application.conf file"><span><code>application.conf</code>ファイルの構成ノード構造</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ロードされた構成ノード構造" src="./images/config/application_conf-nodes.png" /> </v-card-text> </v-card> <v-card flat color="grey lighten-3" class="card__example"> <v-card-text><p><span class="merged" id="all.3Wy1iS"  title="原文:: Notes">ノート</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.480lLn.spl1" title="原文 : Each non-root node has a name which distinguishes it from other nodes with the same parent.">各非ルート・ノードには、同じ親を持つ他のノードと区別する名前があります。</span> <span class="merged" id="all.480lLn.spl2" title="原文 : The interpretation of the name depends on the node type.">名前の解釈は、ノード・タイプによって異なります。</span> 

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.KhTn2"  title="原文:: Node Type">ノード・タイプ</span></th>
<th><span class="merged" id="all.4eTLuy.2"  title="原文:: Name">名前</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.iRHt7" title="原文 : object value">object<br> value</span></td>
<td class=""><span class="merged" id="all.3AtqB8" title="原文 : member name of the node within its parent">親内のノードのメンバー名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1G69gO.1"  title="原文:: list">list</span></td>
<td class=""><span class="merged" id="all.4KwqDz" title="原文 : element index of the node within the containing list">包含リスト内のノードの要素索引</span></td>
</tr>
</tbody>
</table>
</div>

</li>
<li>
<span class="merged" id="all.2XVmjk" title="原文 : Each node&rsquo;s key is the fully-qualified path using dotted names from the root to that node.">各ノードのキーは、ルートからそのノードへのドット表記名を使用した完全修飾パスです。</span>

</li>
<li>
<span class="merged" id="all.4a9FCi" title="原文 : The root has an empty key, empty name, and no value.">ルートに空のキー、空の名前があり、値がありません。</span>

</li>
</ol>
</v-card-text>
</v-card>


<p><span class="merged" id="all.7L0J4" title="原文 : The Config object exposes methods to return the name, key, and type of the node."><code>Config</code>オブジェクトは、ノードの<a href="./apidocs/io.helidon.config/io/helidon/config/Config.html#name--" target="_blank"><code>name</code></a>、<a href="./apidocs/io.helidon.config/io/helidon/config/Config.html#key--" target="_blank"><code>key</code></a>および<a href="./apidocs/io.helidon.config/io/helidon/config/Config.html#type--" target="_blank"><code>type</code></a>を返すメソッドを公開します。</span></p>

</div>


<h2 id="accessByKey"><span class="merged" id="all.3Kxc6O" title="原文 : Access by Key">キー別アクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.34cw7B.spl1" title="原文 : For many applications, accessing configuration values by key will be the simplest approach.">多くのアプリケーションでは、キーによる構成値へのアクセスが最も簡単な方法です。</span> <span class="merged" id="all.34cw7B.spl2" title="原文 : If you write the code with a specific configuration structure in mind, your code can retrieve the value from a specific configuration node very easily.">特定の構成構造を念頭に置いてコードを記述すると、コードで特定の構成ノードから値を簡単に取得できます。</span> </p>

<p><span class="merged" id="all.2SmwA0.spl1" title="原文 : Your application can specify the entire navigation path as the key to a single get invocation, using dotted notation to separate the names of the nodes along the path.">アプリケーションでは、パスに沿ってノードの名前を区切るドット表記法を使用して、単一の<code>get</code>呼出しのキーとしてナビゲーション・パス全体を指定できます。</span> <span class="merged" id="all.2SmwA0.spl2" title="原文 : The code can navigate one level at a time using chained get invocations, each specifying one level of the path to the expected node.">コードでは、連鎖した<code>get</code>呼出しを使用して、あるレベルを一度にナビゲートできます。各レベルでは、予想されるノードへのパスのレベルを指定します。</span> <span class="merged" id="all.2SmwA0.spl3" title="原文 : Or, you can mix the two styles.">または、2つのスタイルを混在させることもできます。</span> </p>

<p><span class="merged" id="all.VKguW" title="原文 : All the following lines retrieve the same Config node.">次のすべての行が同じ<code>Config</code>ノードを取得します。</span></p>

<markup
lang="java"
title="Equivalent Config Retrievals"
>assert config.get("") == config;
Config provName1 = config.get("data.providers.0.name"); <span class="conum" data-value="1" />
Config provName2 = config.get("data.providers.0").get("name"); <span class="conum" data-value="2" />
Config provName3 = config.get("data.providers").get("0.name");
Config provName4 = config.get("data").get("providers.0").get("name");
Config provName5 = config.get("data").get("providers").get("0").get("name"); <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3afNA9" title="原文 : using a single key">単一キーの使用</span></li>
<li data-value="2"><span class="merged" id="all.3G9DMh" title="原文 : mixed style (composite key and single key)">複合スタイル(複合キーと単一キー)</span></li>
<li data-value="3"><span class="merged" id="all.3ePEJy" title="原文 : navigating one level with each get invocation">各<code>get</code>呼出しでのあるレベルへの移動</span></li>
</ul>

<p><span class="merged" id="all.3FMLrN.spl1" title="原文 : The Config.get(key) method always returns a Config object without throwing an exception."><code>Config.get(key)</code>メソッドは常に、例外をスローせずに<code>Config</code>オブジェクトを返します。</span> <span class="merged" id="all.3FMLrN.spl2" title="原文 : If the specified key does not exist the method returns a Config node of type MISSING.">指定されたキーが存在しない場合、メソッドは<code>MISSING</code>タイプの<code>Config</code>ノードを返します。</span> <span class="merged" id="all.3FMLrN.spl3" title="原文 : There are several ways your application can tell whether a given config value exists.">特定の構成値が存在するかどうかをアプリケーションで確認するには、いくつかの方法があります。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1e8dVO.2"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.JUOSC.39"  title="原文:: Usage">使用方法</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.250bPU"  title="原文: exists"><code>exists</code></span></td>
<td class=""><span class="merged" id="all.EjfZy" title="原文 : Returns true or false"><code>true</code>または<code>false</code>を返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24XG4k"  title="原文: ifExists"><code>ifExists</code></span></td>
<td class=""><span class="merged" id="all.4DTkyw" title="原文 : Execute functional operations for present nodes">現在のノードに対する機能操作の実行</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2SYAnU.4"  title="原文: type"><code>type</code></span></td>
<td class=""><span class="merged" id="all.uXFQU" title="原文 : Returns enum value for the Config.Type; Config.Type.MISSING if the node represents a config value that does not exist"><code>Config.Type</code>の列挙値を戻します。ノードが存在<em>しない</em>構成値を表す場合は、<code>Config.Type.MISSING</code>を戻します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.agNdZ"  title="原文: as"><code>as</code></span></td>
<td class=""><span class="merged" id="all.3Yw3k2" title="原文 : Returns the ConfigValue with the correct type that has all methods of Optional and a few additional ones - see ConfigValue interface."><code>Optional</code>のすべてのメソッドといくつかの追加メソッドを持つ正しいタイプの<code>ConfigValue</code>を返します - <a href="./apidocs/io.helidon.config/io/helidon/config/ConfigValue.html" target="_blank"><code>ConfigValue</code></a>インタフェースを参照してください。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2gq1pL" title="原文 : The config system throws a MissingValueException if the application tries to access the value of a missing node by invoking the ConfigValue.get() method.">アプリケーションが<code>ConfigValue.get()</code>メソッドを起動して欠落しているノードの値にアクセスしようとすると、構成システムは<code>MissingValueException</code>をスローします。</span></p>

</div>


<h2 id="_access_by_general_navigation"><span class="merged" id="all.Yk2Lw" title="原文 : Access by General Navigation">一般ナビゲーションによるアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.28sxlQ" title="原文 : Some applications might need to work with configuration without knowing its structure or key names ahead of time, and such applications can use various methods on the Config class to do this.">一部のアプリケーションでは、事前にその構造またはキー名を知らなくても構成を操作する必要があり、そのようなアプリケーションでは、<code>Config</code>クラスの様々なメソッドを使用してこれを行うことができます。</span></p>

<div class="block-title"><span class="merged" id="all.2Kuz40" title="原文 : General Config Node Methods"><span>一般構成ノードのメソッド</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1e8dVO.3"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.JUOSC.40"  title="原文:: Usage">使用方法</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.34Y4Cz"  title="原文: asNodeList()"><code>asNodeList()</code></span></td>
<td class=""><span class="merged" id="all.22x1AF.spl1" title="原文 : Returns a ConfigValue&lt;List&lt;Config&gt;&gt;.">ConfigValue &lt;List&lt;Config> >を返します。</span> <span class="merged" id="all.22x1AF.spl2" title="原文 : For nodes of type OBJECT contains child nodes as a List.">タイプが<code>OBJECT</code>のノードの場合、<code>List</code>として子ノードが含まれます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2oxqfE"  title="原文: hasValue()"><code>hasValue()</code></span></td>
<td class=""><span class="merged" id="all.2bNOcu.spl1" title="原文 : For any node reports if the node has a value.">いずれかのノードについて、ノードに値があるかどうかがレポートされます。</span> <span class="merged" id="all.2bNOcu.spl2" title="原文 : This can be true for any node type except MISSING.">これは、<code>MISSING</code>を除くすべてのノード・タイプに当てはまります。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3BIEsK"  title="原文: isLeaf()"><code>isLeaf()</code></span></td>
<td class=""><span class="merged" id="all.1HXqhu.spl1" title="原文 : Reports whether the node has no child nodes.">ノードに子ノードがないかどうかをレポートします。</span> <span class="merged" id="all.1HXqhu.spl2" title="原文 : Leaf nodes have no children and has a single value.">リーフ・ノードには子がなく、単一の値があります。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3TK5QZ"  title="原文: key()"><code>key()</code></span></td>
<td class=""><span class="merged" id="all.1QLMeM" title="原文 : Returns the fully-qualified path of the node using dotted notation.">ドット表記法を使用してノードの完全修飾パスを返します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3kovlf"  title="原文: name()"><code>name()</code></span></td>
<td class=""><span class="merged" id="all.3CDUSA" title="原文 : Returns the name of the node (the last part of the key).">ノードの名前(キーの最後の部分)を返します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.25j1jw"  title="原文: asNode()"><code>asNode()</code></span></td>
<td class=""><span class="merged" id="all.5EqEM" title="原文 : Returns a ConfigValue&lt;Config&gt; wrapped around the node">ノードの周りにラップされた<code>ConfigValue&lt;Config></code>を戻します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3NjCm4" title="原文 : traverse() traverse(Predicate&lt;Config&gt;)"><code>traverse()</code><br> <code>traverse(Predicate&lt;Config>)</code></span></td>
<td class=""><span class="merged" id="all.3JPaN2" title="原文 : Returns a Stream&lt;Config&gt; as an iterative deepening depth-first traversal of the subtree">サブツリーの反復深度優先トラバースとして<code>Stream&lt;Config></code>を戻します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.o6QbV"  title="原文: type()"><code>type()</code></span></td>
<td class=""><span class="merged" id="all.2ZZGcZ" title="原文 : Returns the Type enum value for the node: OBJECT, LIST, VALUE, or MISSING">ノードの<code>Type</code>列挙値を戻します: <code>OBJECT</code>, <code>LIST</code>, <code>VALUE</code>または<code>MISSING</code></span></td>
</tr>
</tbody>
</table>
</div>

<markup
lang="java"
title="List names of child nodes of an <em>object</em> node"
>List&lt;String&gt; appNodeNames = config.get("app")
            .asNodeList()                              <span class="conum" data-value="1" />
            .map(nodes -&gt; {                            <span class="conum" data-value="2" />
                return nodes
                        .stream()
                        .map(Config::name)
                        .sorted()
                        .collect(Collectors.toList());
            })
            .orElse(Collections.emptyList());          <span class="conum" data-value="3" />


assert appNodeNames.get(0).equals("basic-range"); <span class="conum" data-value="4" />
assert appNodeNames.get(1).equals("greeting");    <span class="conum" data-value="4" />
assert appNodeNames.get(2).equals("page-size");   <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.QBu0a" title="原文 : Get the ConfigValue with child Config instances.">子<code>Config</code>インスタンスを持つConfigValueを取得します。</span></li>
<li data-value="2"><span class="merged" id="all.14bwyi" title="原文 : Map the node list to names using the Java Stream API (if present)">Java Stream API (存在する場合)を使用してノード・リストを名前にマップ</span></li>
<li data-value="3"><span class="merged" id="all.16ymxp" title="原文 : Use an empty list if the &quot;app&quot; node does not exist">"app"ノードが存在しない場合は、空のリストを使用</span></li>
<li data-value="4"><span class="merged" id="all.410YRC" title="原文 : Check that the list contains the expected child names: basic-range, greeting and page-size.">リストに必要な子の名前が含まれていることを確認してください: <code>basic-range</code>、<code>greeting</code>および<code>page-size</code>。</span></li>
</ul>

<markup
lang="java"
title="List child nodes of a <em>list</em> node"
>List&lt;Config&gt; providers = config.get("data.providers")
        .asNodeList().orElse(Collections.emptyList());               <span class="conum" data-value="1" />

assert providers.get(0).key().toString().equals("data.providers.0"); <span class="conum" data-value="2" />
assert providers.get(1).key().toString().equals("data.providers.1"); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2jSe5L" title="原文 : Get child nodes of the data.providers list node as a List of Config instances."><code>data.providers</code><em>「リスト」</em>ノードの子ノードを<code>Config</code>インスタンスの<code>List</code>として取得します。</span></li>
<li data-value="2"><span class="merged" id="all.1FYNEY" title="原文 : Check that the list contains the expected child nodes with keys data.providers.0 and data.providers.1.">リストに、<code>data.providers.0</code>および<code>data.providers.1</code>のキーを持つ予想される子ノードが含まれていることをバリデートします。</span></li>
</ul>

<p><span class="merged" id="all.1OnUnH.spl1" title="原文 : The traverse() method returns a stream of the nodes in the subtree that is rooted at the current configuration node."><code>traverse()</code>メソッドは、現在の構成ノードをルートとするサブツリー内のノードのストリームを返します。</span> <span class="merged" id="all.1OnUnH.spl2" title="原文 : Depending on the structure of the loaded configuration the stream contains a mix of object, list or leaf value nodes.">ロードされた構成の構造に応じて、ストリームにはオブジェクト、リストまたはリーフ値ノードが混在して含まれます。</span> </p>

<markup
lang="java"
title="Traverse subtree below a <em>list</em> node"
>config.get("data.providers")
        .traverse()                                                             <span class="conum" data-value="1" />
        .forEach(node -&gt; System.out.println(node.type() + " \t" + node.key())); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3qElNg" title="原文 : Visit the subtree rooted at the data.providers list node."><code>data.providers</code><em>「リスト」</em>ノードをルートとするサブツリーにアクセスします。</span></li>
<li data-value="2"><span class="merged" id="all.nqWyS" title="原文 : Prints out following list of nodes (type and key):">次のノード(タイプとキー)のリストを出力します:</span></li>
</ul>

<v-card flat color="grey lighten-3" class="card__example"> <v-card-text><div class="listing">
<markup>OBJECT 	data.providers.0
VALUE 	data.providers.0.name
VALUE 	data.providers.0.class
OBJECT 	data.providers.1
VALUE 	data.providers.1.name
VALUE 	data.providers.1.class</markup>
</div>
</v-card-text>
</v-card>


<p><span class="merged" id="all.3iAjsJ" title="原文 : The optional Predicate&lt;Config&gt; argument to the traverse methods allows the application to prune the traversal of a subtree at any point."><code>traverse</code>メソッドのオプションの<code>Predicate&lt;Config></code>引数を使用すると、アプリケーションは、任意の時点でサブツリーのトラバースをプルーニングできます。</span></p>

<markup
lang="java"
title="Traverse <em>root</em> (<em>object</em>) node, skipping the entire <code>data</code> subtree"
>config.traverse(node -&gt; !node.name().equals("data"))                            <span class="conum" data-value="1" />
        .forEach(node -&gt; System.out.println(node.type() + " \t" + node.key())); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.yDV8V" title="原文 : Visit all root sub-nodes, excluding whole data tree structure but including others.">他のノードを含め、<code>data</code>ツリー構造全体を除くすべての<em>root</em>サブノードにアクセスします。</span></li>
<li data-value="2"><span class="merged" id="all.nqWyS.1" title="原文 : Prints out following list of nodes (type and key):">次のノード(タイプとキー)のリストを出力します:</span></li>
</ul>

<v-card flat color="grey lighten-3" class="card__example"> <v-card-text><div class="listing">
<markup>OBJECT 	app
VALUE 	app.page-size
VALUE 	app.greeting
LIST 	app.basic-range
VALUE 	app.basic-range.0
VALUE 	app.basic-range.1</markup>
</div>
</v-card-text>
</v-card>


</div>


<h2 id="_detaching_a_config_subtree"><span class="merged" id="all.3zCTDU" title="原文 : Detaching a Config Subtree">構成サブツリーのデタッチ</span></h2>
<div class="section">
<p><span class="merged" id="all.3Y63pb" title="原文 : Sometimes it can be convenient to write part of your application to deal with configuration without it knowing if or where the relevant configuration is plugged into a larger config tree.">場合によっては、関連する構成がより大きな構成ツリーにプラグインされているかどうか、またはその場所を知らなくても、構成を処理するためにアプリケーションの一部を記述すると便利なことがあります。</span></p>

<p><span class="merged" id="all.HVeqf.spl1" title="原文 : For example, the application.properties from the introduction section contains several settings prefixed with web such as web.page-size.">たとえば、概要セクションの<router-link :to="{path: '/se/config/introduction', hash: '#create-simple-config-props'}"><code>application.properties</code></router-link>には、<code>web.page-size</code>など、<code>web</code>のプレフィクスが付いたいくつかの設定が含まれています。</span> <span class="merged" id="all.HVeqf.spl2" title="原文 : Perhaps in another config source the same information might be stored as server.web.page-size:">別の構成ソースに、同じ情報が<code>server.web.page-size</code>として格納されている場合があります:</span> </p>

<markup
lang="java"
title="Alternate Structure for Web Config"
>server.web.page-size: 40
server.web.debug = true
server.web.ratio = 1.4</markup>

<p><span class="merged" id="all.3TqTeB.spl1" title="原文 : You might want to write the web portion of your app to work with a config subtree with keys that are independent of the subtree&rsquo;s position in a larger tree.">大きいツリーでのサブツリーの位置に依存しないキーを持つ構成サブツリーを操作するように、アプリケーションのweb部分を記述できます。</span> <span class="merged" id="all.3TqTeB.spl2" title="原文 : This would allow you to reuse the web portion of your application without change, regardless of which structure a config source used.">これにより、構成ソースで使用されている構造に関係なく、アプリケーションのweb部分を変更せずに再利用できます。</span> </p>

<p><span class="merged" id="all.3iYgkx.spl1" title="原文 : One easy way to do this is to detach a subtree from a larger config tree.">これを簡単に行うには、より大きな構成ツリーからのサブツリーを<em>「デタッチ」</em>します。</span> <span class="merged" id="all.3iYgkx.spl2" title="原文 : When your application invokes the Config.detach method it gets back a copy of the config node but with no parent.">アプリケーションが<a href="./apidocs/io.helidon.config/io/helidon/config/Config.html#detach--" target="_blank"><code>Config.detach</code></a>メソッドを呼び出すと、親を持たない構成ノードの<em>「コピー」</em>が返されます。</span> <span class="merged" id="all.3iYgkx.spl3" title="原文 : The copy and the original node both point to the same objects for their child nodes (if any).">コピーと元のノードの両方が、子ノード(存在する場合)の同じオブジェクトを指しています。</span> <span class="merged" id="all.3iYgkx.spl4" title="原文 : The original node is unchanged.">元のノードは変更されません。</span> </p>

<markup
lang="java"
title="Detaching a Subtree"
>Config originalRoot = // from the original example `.conf` file
Config alternateRoot = // from the alternate structure above

Config detachedFromOriginal = originalRoot.get("web").detach();
Config detachedFromAlternate = alternateRoot.get("server.web").detach();

assert originalRoot.get("web.debug").equals("true");          <span class="conum" data-value="1" />
assert alternateRoot.get("server.web.debug").equals("true");  <span class="conum" data-value="1" />

assert detachedFromOriginal.get("debug").equals("true");      <span class="conum" data-value="2" />
assert detachedFromAlternate.get("debug").equals("true");     <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1hpT5X" title="原文 : Navigation depends on knowing the full structure of the config and so is different for the two cases.">ナビゲーションは構成の完全な構造の把握に依存するため、2つのケースで異なります。</span></li>
<li data-value="2"><span class="merged" id="all.2JTnDP" title="原文 : Detaching so the web node is the root can use the same key regardless of where the config subtree came from."><code>web</code>ノードがルートになるようにデタッチすると、構成サブツリーの取得元に関係なく、同じキーを使用できます。</span></li>
</ul>

</div>

</doc-view>
