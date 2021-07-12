<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3qJaTi" title="原文 : CDI extension for HikariCP">HikariCPのCDI拡張機能</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2tvU2K" title="原文 : This CDI portable extension provides support for injecting HikariCP data sources in your Helidon MicroProfile applications.">この<a href="https://docs.jboss.org/cdi/spec/2.0/cdi-spec.html#spi" id="" target="_blank" >「CDIポータブル拡張機能」</a>では、Helidon MicroProfileアプリケーションへの<a href="http://brettwooldridge.github.io/HikariCP/" id="" target="_blank" >「HikariCPデータ・ソース」</a>のインジェクトがサポートされています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.3" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.O61CS" title="原文 : To enable HikariCP Support add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">HikariCPサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-cdi-datasource-hikaricp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_injecting_a_hikaricp_data_source"><span class="merged" id="all.LcQID" title="原文 : Injecting a HikariCP data source">HikariCPデータ・ソースのインジェクト</span></h2>
<div class="section">
<p><span class="merged" id="all.11hmzx" title="原文 : The following examples show how to create a DataSource named orders in your application.">次の例は、アプリケーションで<code>orders</code>という名前の<code>DataSource</code>を作成する方法を示しています。</span></p>

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

<p><span class="merged" id="all.1SKktJ" title="原文 : The extension implements this injection point by creating a HikariDataSource object in the application scope.">この拡張機能は、<a href="http://docs.jboss.org/cdi/api/2.0/javax/enterprise/context/ApplicationScoped.html" id="" target="_blank" >「アプリケーション・スコープ」</a>で<a href="https://static.javadoc.io/com.zaxxer/HikariCP/2.7.8/com/zaxxer/hikari/HikariDataSource.html" id="" target="_blank" >HikariDataSource</a>オブジェクトを作成することによって、このインジェクション・ポイントを実装します。</span></p>

<p><span class="merged" id="all.3q3ZGq.spl1" title="原文 : You can configure the object using MicroProfile config."><router-link @click.native="this.scrollFix('#microprofile/02_server-configuration.adoc')" to="#microprofile/02_server-configuration.adoc">「MicroProfile構成」</router-link>を使用してオブジェクトを構成できます。</span> <span class="merged" id="all.3q3ZGq.spl2" title="原文 : For example, the data source created above can be configured as follows:">たとえば、前述の手順で作成したデータ・ソースは次のように構成できます:</span> </p>

<markup
lang="properties"
title="META-INF/microprofile-config.properties"
>javax.sql.DataSource.orders.dataSourceClassName=oracle.jdbc.pool.OracleDataSource
javax.sql.DataSource.orders.dataSource.url = jdbc:oracle:thin:@localhost:1521:ORCL
javax.sql.DataSource.orders.dataSource.user = sys as sysoper
javax.sql.DataSource.orders.dataSource.password = Oracle</markup>

<p><span class="merged" id="all.2eiQb9" title="原文 : Property names that start with javax.sql.DataSource.dataSourceName. are parsed, and the remaining portion of each name is treated as a Hikari connection pool property."><code>javax.sql.DataSource.dataSourceName.</code>で始まるプロパティ名は解析され、各名前の残りの部分は<a href="https://github.com/brettwooldridge/HikariCP/blob/dev/README.md#configuration-knobs-baby" id="" target="_blank" >「Hikari接続プール・プロパティ」</a>として扱われます。</span></p>

</div>
</doc-view>
