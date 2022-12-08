<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.11"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.9" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.8" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.6" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.8" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t.1" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.9"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3QQh6P" title="原文 : Jedis is a Java client for Redis."><a href="https://github.com/xetorthio/jedis" target="_blank">Jedis</a>は、<a href="https://github.com/redis/redis" target="_blank">Redis</a>のJavaクライアントです。</span></p>

<p><span class="merged" id="all.1l65bZ" title="原文 : This CDI portable extension provides support for injecting Jedis clients in your Helidon MicroProfile applications.">この<a href="https://jakarta.ee/specifications/cdi/3.0/jakarta-cdi-spec-3.0.html#spi" target="_blank">「CDIポータブル拡張機能」</a>は、Helidon MicroProfileアプリケーションにJedisクライアントをインジェクトするためのサポートを提供します。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.9"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2a1vig" title="原文 : To enable Jedis add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Jedisを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-cdi-jedis&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.6"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.4MtiR9.spl1" title="原文 : After you have added the above dependency to your project you can inject a Jedis client in your application.">前述の依存関係をプロジェクトに追加したら、アプリケーションにJedisクライアントをインジェクトできます。</span> <span class="merged" id="all.4MtiR9.spl2" title="原文 : The following examples show how to create and inject a Jedis pool named orders in your application code.">次の例は、<code>orders</code>という名前のJedisプールを作成し、アプリケーション・コードにインジェクトする方法を示しています。</span> </p>

<markup
lang="java"
title="Field-injection example"
> @Inject
 @Named("orders")
 private JedisPool ordersPool;</markup>

<markup
lang="java"
title="Constructor-injection example"
> private final JedisPool ordersPool;
 @Inject
 public YourConstructor(@Named("orders") JedisPool pool) {
   super();
   this.ordersPool = pool;
 }</markup>

<p><span class="merged" id="all.3GyGgh" title="原文 : Helidon implements this injection point by creating a JedisPool object in the application scope.">Helidonは、<a href="https://jakarta.ee/specifications/cdi/3.0/apidocs//jakarta/enterprise/context/ApplicationScoped.html" target="_blank">「アプリケーション・スコープ」</a>に<a href="https://www.javadoc.io/static/redis.clients/jedis/2.9.0/redis/clients/jedis/JedisPool.html" target="_blank">JedisPool</a>オブジェクトを作成して、このインジェクション・ポイントを実装します。</span></p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.9"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2l1PvI.spl1" title="原文 : You can configure the object using MicroProfile config."><router-link to="/mp/config/introduction">「MicroProfile構成」</router-link>を使用してオブジェクトを構成できます。</span> <span class="merged" id="all.2l1PvI.spl2" title="原文 : For example, the Jedis pool created above can be configured as follows:">たとえば、上で作成したJedisプールは次のように構成できます:</span> </p>

<markup
lang="properties"
title="META-INF/microprofile-config.properties"
>redis.clients.jedis.JedisPool.orders.port=6379</markup>

<p><span class="merged" id="all.2tLeAZ" title="原文 : The Jedis client can be configured using the following properties.">Jedisクライアントは、次のプロパティを使用して構成できます。</span></p>

<p><span class="merged" id="all.26179Q.spl1" title="原文 : Property names that start with redis.clients.jedis.JedisPoolConfig.instanceName. are parsed, and the remaining portion of each name is treated as a Java Bean property of JedisPoolConfig."><code>redis.clients.jedis.JedisPoolConfig.instanceName.</code>で始まるプロパティ名は解析され、各名前の残りの部分は<a href="https://www.javadoc.io/static/redis.clients/jedis/2.9.0/redis/clients/jedis/JedisPoolConfig.html" target="_blank"><code>JedisPoolConfig</code></a>のJava Beanプロパティとして扱われます。</span> <span class="merged" id="all.26179Q.spl2" title="原文 : Because the JedisPoolConfig class inherits from Apache commons-pool&rsquo;s GenericObjectPoolConfig class and from Apache commons-pool&rsquo;s BaseObjectPoolConfig class, those writable Java Bean properties are available as well."><code>JedisPoolConfig</code>クラスは<a href="https://commons.apache.org/proper/commons-pool/apidocs/org/apache/commons/pool2/impl/GenericObjectPoolConfig.html" target="_blank">Apache commons-pool <code>GenericObjectPoolConfig</code></a>クラスおよび<a href="https://commons.apache.org/proper/commons-pool/apidocs/org/apache/commons/pool2/impl/BaseObjectPoolConfig.html" target="_blank">Apache commons-pool <code>BaseObjectPoolConfig</code></a>クラスを継承するため、これらの書込み可能なJava Beanプロパティも使用できます。</span> </p>

<p><span class="merged" id="all.CNlix" title="原文 : Accordingly, the JedisPoolConfig Java Bean properties that can be set are as follows, where instanceName should be replaced with the actual name used in application code:">したがって、設定可能な<code>JedisPoolConfig</code> Java Beanプロパティは次のとおりです。ここで、<code>instanceName</code>はアプリケーション・コードで使用される実際の名前に置き換える必要があります:</span></p>


<div class="table__overflow elevation-1  flex md7
">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.psM3P"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.blockWhenExhausted"><code>redis.clients.jedis.JedisPoolConfig.instanceName.blockWhenExhausted</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3GJxcV"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.evictionPolicyClassName"><code>redis.clients.jedis.JedisPoolConfig.instanceName.evictionPolicyClassName</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.451Z4w"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.fairness"><code>redis.clients.jedis.JedisPoolConfig.instanceName.fairness</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2dpOoB"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.jmxEnabled"><code>redis.clients.jedis.JedisPoolConfig.instanceName.jmxEnabled</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3a7O7f"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.jmxNameBase"><code>redis.clients.jedis.JedisPoolConfig.instanceName.jmxNameBase</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eqtHa"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.jmxNamePrefix"><code>redis.clients.jedis.JedisPoolConfig.instanceName.jmxNamePrefix</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DS5d"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.lifo"><code>redis.clients.jedis.JedisPoolConfig.instanceName.lifo</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3KjqCq"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.maxIdle"><code>redis.clients.jedis.JedisPoolConfig.instanceName.maxIdle</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Exrir"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.maxTotal"><code>redis.clients.jedis.JedisPoolConfig.instanceName.maxTotal</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4APqdb"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.maxWaitMillis"><code>redis.clients.jedis.JedisPoolConfig.instanceName.maxWaitMillis</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1KiL4m"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.minEvictableTimeMillis"><code>redis.clients.jedis.JedisPoolConfig.instanceName.minEvictableTimeMillis</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.HGAgn"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.minIdle"><code>redis.clients.jedis.JedisPoolConfig.instanceName.minIdle</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2PkVko"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.numTestsPerEvictionRun"><code>redis.clients.jedis.JedisPoolConfig.instanceName.numTestsPerEvictionRun</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.vqeiD"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.softMinEvictableIdleTimeMillis"><code>redis.clients.jedis.JedisPoolConfig.instanceName.softMinEvictableIdleTimeMillis</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.7LAnT"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.testOnBorrow"><code>redis.clients.jedis.JedisPoolConfig.instanceName.testOnBorrow</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.KTj4X"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.testOnCreate"><code>redis.clients.jedis.JedisPoolConfig.instanceName.testOnCreate</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1z0BEC"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.testOnReturn"><code>redis.clients.jedis.JedisPoolConfig.instanceName.testOnReturn</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jHcDn"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.testWhileIdle"><code>redis.clients.jedis.JedisPoolConfig.instanceName.testWhileIdle</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.kcgIG"  title="原文: redis.clients.jedis.JedisPoolConfig.instanceName.timeBetweenEvictionRunsMillis"><code>redis.clients.jedis.JedisPoolConfig.instanceName.timeBetweenEvictionRunsMillis</code></span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1zWiQs" title="原文 : Any documentation for these properties that exists may be found in the javadocs for the JedisPoolConfig, GenericObjectPoolConfig and BaseObjectPoolConfig classes.">これらのプロパティに関するドキュメントは、<a href="https://www.javadoc.io/static/redis.clients/jedis/2.9.0/redis/clients/jedis/JedisPoolConfig.html" target="_blank"><code>JedisPoolConfig</code></a>、<a href="https://commons.apache.org/proper/commons-pool/apidocs/org/apache/commons/pool2/impl/GenericObjectPoolConfig.html" target="_blank"><code>GenericObjectPoolConfig</code></a>および<a href="https://commons.apache.org/proper/commons-pool/apidocs/org/apache/commons/pool2/impl/BaseObjectPoolConfig.html" target="_blank"><code>BaseObjectPoolConfig</code></a>クラスのjavadocにあります。</span></p>

<p><span class="merged" id="all.2IaBB.spl1" title="原文 : Property names that start with redis.clients.jedis.JedisPool.instanceName. are parsed, and the remaining portion of each name is treated as a Java Bean property of JedisPool, or as a primitive value accepted by its constructor."><code>redis.clients.jedis.JedisPool.instanceName.</code>で始まるプロパティ名は解析され、各名前の残りの部分は<a href="https://www.javadoc.io/static/redis.clients/jedis/2.9.0/redis/clients/jedis/JedisPool.html" target="_blank"><code>JedisPool</code></a>のJava Beanプロパティとして、または<a href="https://www.javadoc.io/static/redis.clients/jedis/2.9.0/redis/clients/jedis/JedisPool.html#JedisPool-org.apache.commons.pool2.impl.GenericObjectPoolConfig-java.lang.String-int-int-java.lang.String-int-boolean-javax.net.ssl.SSLSocketFactory-javax.net.ssl.SSLParameters-javax.net.ssl.HostnameVerifier-" target="_blank">「コンストラクタ」</a>で受け入れられるプリミティブ値として扱われます。</span> <span class="merged" id="all.2IaBB.spl2" title="原文 : Because the JedisPool class inherits from the Pool class, its writable Java Bean properties are available as well."><code>JedisPool</code>クラスは<a href="https://www.javadoc.io/static/redis.clients/jedis/2.9.0/redis/clients/util/Pool.html" target="_blank"><code>Pool</code></a>クラスから継承するため、書込み可能なJava Beanプロパティも使用できます。</span> </p>

<p><span class="merged" id="all.3rLZK7" title="原文 : Accordingly, the JedisPool properties that can be set are as follows, where instanceName should be replaced with the actual named used in application code:">したがって、設定可能な<code>JedisPool</code>プロパティは次のとおりです。<code>instanceName</code>は、アプリケーション・コードで使用されている実際の名前に置き換える必要があります:</span></p>


<div class="table__overflow elevation-1  flex md7
">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1xeonS"  title="原文: redis.clients.jedis.JedisPool.instanceName.clientName"><code>redis.clients.jedis.JedisPool.instanceName.clientName</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Hbzmk"  title="原文: redis.clients.jedis.JedisPool.instanceName.connectionTimeout"><code>redis.clients.jedis.JedisPool.instanceName.connectionTimeout</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2REo1f"  title="原文: redis.clients.jedis.JedisPool.instanceName.database"><code>redis.clients.jedis.JedisPool.instanceName.database</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1RNtdq"  title="原文: redis.clients.jedis.JedisPool.instanceName.host"><code>redis.clients.jedis.JedisPool.instanceName.host</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3kUgm7"  title="原文: redis.clients.jedis.JedisPool.instanceName.password"><code>redis.clients.jedis.JedisPool.instanceName.password</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1QWX2N"  title="原文: redis.clients.jedis.JedisPool.instanceName.port"><code>redis.clients.jedis.JedisPool.instanceName.port</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2bu7Wm"  title="原文: redis.clients.jedis.JedisPool.instanceName.socketTimeout"><code>redis.clients.jedis.JedisPool.instanceName.socketTimeout</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Rb3ZI"  title="原文: redis.clients.jedis.JedisPool.instanceName.ssl"><code>redis.clients.jedis.JedisPool.instanceName.ssl</code></span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1DTRUL" title="原文 : Any documentation for these properties that exists may be found in the javadocs for the JedisPool and Pool classes.">これらのプロパティに関するドキュメントは、<a href="https://www.javadoc.io/static/redis.clients/jedis/2.9.0/redis/clients/jedis/JedisPool.html" target="_blank"><code>JedisPool</code></a>および<a href="https://www.javadoc.io/static/redis.clients/jedis/2.9.0/redis/clients/util/Pool.html" target="_blank"><code>Pool</code></a>クラスのjavadocにあります。</span></p>

<p><span class="merged" id="all.4N0Hxb" title="原文 : Injection without a @Named annotation is also possible:"><code>@Named</code>注釈なしのインジェクションも可能です:</span></p>

<markup
lang="java"

> @Inject
 private JedisPool ordersPool;</markup>

<p><span class="merged" id="all.2kx9aw" title="原文 : In this case, the properties for JedisPoolConfig and JedisPool that can be set will start with redis.clients.jedis.JedisPoolConfig.default and redis.clients.jedis.JedisPool.default respectively.">この場合、設定可能なJedisPoolConfigおよびJedisPoolのプロパティは、それぞれ<code>redis.clients.jedis.JedisPoolConfig.default</code>および<code>redis.clients.jedis.JedisPool.default</code>で始まります。</span></p>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.3"  title="原文:: References">参照</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4NtkdS" title="原文 : Helidon Jedis Example"><a href="https://github.com/oracle/helidon/tree/master/examples/integrations/cdi/jedis" target="_blank">Helidon Jedisの例</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2eqtNr" title="原文 : Jedis Javadoc"><a href="https://www.javadoc.io/static/redis.clients/jedis/2.9.0/redis/clients/jedis/package-summary.html" target="_blank">Jedis Javadoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.mFS0a" title="原文 : Jedis"><a href="https://github.com/xetorthio/jedis" target="_blank">Jedis</a></span></p>

</li>
<li>
<p><span class="merged" id="all.UMo1F"  title="原文:: Redis"><a href="https://github.com/redis/redis" target="_blank">Redis</a></span></p>

</li>
</ul>

</div>

</doc-view>
