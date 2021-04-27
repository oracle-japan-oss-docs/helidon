<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3sWfv" title="原文 : CDI extension for Oracle UCP">Oracle UCPのCDI拡張機能</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3N47ZR" title="原文 : This CDI portable extension provides support for injecting Oracle Universal Connection Pool data sources in your Helidon MicroProfile applications.">この<a href="https://docs.jboss.org/cdi/spec/2.0/cdi-spec.html#spi" id="" target="_blank" >「CDIポータブル拡張機能」</a>では、Helidon MicroProfileアプリケーションへの<a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/jjucp/index.html" id="" target="_blank" >「Oracle Universal Connection Poolデータ・ソース」</a>のインジェクトがサポートされています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.2"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.4JnU1V.1" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存性を宣言します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-cdi-datasource-ucp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_injecting_an_oracle_universal_connection_pool_data_source"><span class="merged" id="all.4Lz0qN" title="原文 : Injecting an Oracle Universal Connection Pool data source">Oracle Universal Connection Poolデータ・ソースのインジェクト</span></h2>
<div class="section">
<p><span class="merged" id="all.11hmzx.1" title="原文 : The following examples show how to create a DataSource named orders in your application.">次の例は、アプリケーションで<code>orders</code>という名前の<code>DataSource</code>を作成する方法を示しています。</span></p>

<markup
lang="java"
title="フィールド・インジェクションの例"
> @Inject
 @Named("orders")
 private DataSource ordersDataSource;</markup>

<markup
lang="java"
title="コンストラクタ・インジェクションの例"
> private final DataSource ds;
 @Inject
 public YourConstructor(@Named("orders") DataSource ds) {
   super();
   this.ds = ds;
 }</markup>

<p><span class="merged" id="all.4L9Pd0" title="原文 : The extension implements this injection point by creating a PoolDataSource object in the application scope.">この拡張機能は、<a href="http://docs.jboss.org/cdi/api/2.0/javax/enterprise/context/ApplicationScoped.html" id="" target="_blank" >「アプリケーション・スコープ」</a>で<a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/jjuar/oracle/ucp/jdbc/PoolDataSource.html" id="" target="_blank" ><code>PoolDataSource</code></a>オブジェクトを作成することによって、このインジェクション・ポイントを実装します。</span></p>

<p><span class="merged" id="all.3q3ZGq.1.spl1" title="原文 : You can configure the object using MicroProfile config."><router-link @click.native="this.scrollFix('#microprofile/02_server-configuration.adoc')" to="#microprofile/02_server-configuration.adoc">「MicroProfile構成」</router-link>を使用してオブジェクトを構成できます。</span> <span class="merged" id="all.3q3ZGq.1.spl2" title="原文 : For example, the data source created above can be configured as follows:">たとえば、前述の手順で作成したデータ・ソースは次のように構成できます:</span> </p>

<markup
lang="properties"
title="META-INF/microprofile-config.properties"
>javax.sql.DataSource.orders.connectionFactoryClassName = oracle.jdbc.pool.OracleDataSource
javax.sql.DataSource.orders.URL = jdbc:oracle:thin:@localhost:1521:ORCL
javax.sql.DataSource.orders.user = sys as sysoper
javax.sql.DataSource.orders.password = Oracle</markup>

<p><span class="merged" id="all.2ktKCK" title="原文 : Property names that start with javax.sql.DataSource.dataSourceName. are parsed, and the remaining portion of each name is treated as a Java Bean property of the oracle.ucp.jdbc.PoolDataSource class."><code>javax.sql.DataSource.dataSourceName.</code>で始まるプロパティ名は解析され、各名前の残りの部分は<a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/jjuar/oracle/ucp/jdbc/PoolDataSource.html" id="" target="_blank" ><code>oracle.ucp.jdbc.PoolDataSource</code></a>クラスの<a href="https://docs.oracle.com/javase/tutorial/javabeans/writing/properties.html" id="" target="_blank" >「Java Beanプロパティ」</a>として扱われます。</span></p>

</div>
</doc-view>
