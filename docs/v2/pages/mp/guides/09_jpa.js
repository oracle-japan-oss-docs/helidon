<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3Qqjry" title="原文 : Helidon MP JPA Guide">Helidon MP JPAガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.YFmKG" title="原文 : This guide shows how to configure and use the Java Persistence API (JPA) from within a Helidon MP application.">このガイドでは、Helidon MPアプリケーション内から<a href="https://jakarta.ee/specifications/persistence/2.2/" id="" target="_blank" >Java Persistence API (JPA)</a>を構成および使用する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.4"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.wqDOs.3" title="原文 : About 30 minutes">約30分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.9" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Ksx2d" title="原文 : An understanding of named data source support in Helidon MP"><router-link to="/mp/guides/07_datasource">Helidon MPでの名前付きデータ・ソースのサポートの理解</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9oXuc" title="原文 : An understanding of transaction support in Helidon MP"><router-link to="/mp/guides/08_jta">Helidon MPでのトランザクション・サポートの理解</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.32wEIU" title="原文 : An understanding of JPA itself">JPA自体の理解</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_what_youll_do"><span class="merged" id="all.1U0hyr.1" title="原文 : What You&rsquo;ll Do">実行内容</span></h2>
<div class="section">
<p><span class="merged" id="all.40bcsK.spl1" title="原文 : By following this guide, you&rsquo;ll enhance a bare-bones Helidon MP application to use JPA, with automatic transaction support, backed by EclipseLink, to access an in-memory H2 database.">このガイドに従うことで、JPAを使用するようにベア・ボーンHelidon MPアプリケーションが拡張され、<a href="https://www.eclipse.org/eclipselink/#jpa" id="" target="_blank" >EclipseLink</a>でサポートされている自動トランザクションでインメモリー<a href="https://www.h2database.com/html/main.html" id="" target="_blank" >「H2データベース」</a>にアクセスできるようになります。</span> <span class="merged" id="all.40bcsK.spl2" title="原文 : You&rsquo;ll see how to install the relevant dependencies and add JPA-related code to your application.">関連する依存関係をインストールし、JPA関連のコードをアプリケーションに追加する方法について説明します。</span> </p>

</div>

<h2 id="_use_the_maven_archetype_to_generate_a_helidon_mp_application"><span class="merged" id="all.3kO60q.1" title="原文 : Use the Maven Archetype to Generate a Helidon MP Application">Maven Archetypeを使用したHelidon MPアプリケーションの生成</span></h2>
<div class="section">
<p><span class="merged" id="all.vTXp3.1" title="原文 : In a shell, cd into an empty directory and run this:">シェルでは、<code>cd</code>は空のディレクトリに移動し、次を実行します:</span></p>

<markup
lang="bash"

>mvn -U archetype:generate \
    -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-bare-mp \
    -DarchetypeVersion=2.2.1-SNAPSHOT \
    -DgroupId=io.helidon.example \
    -DartifactId=helidon-jpa \
    -Dpackage=io.helidon.example.jpa</markup>

<p><span class="merged" id="all.2OBeya.spl1" title="原文 : Now cd into helidon-jpa.">これで<code>cd</code>が<code>helidon-jpa</code>に追加されました。</span> <span class="merged" id="all.2OBeya.spl2" title="原文 : The rest of this guide will assume all relative paths are relative to this directory.">このガイドの残りの部分では、すべての相対パスがこのディレクトリに対する相対パスであると想定しています。</span> </p>

</div>

<h2 id="_add_the_h2_database_driver_to_the_runtime_classpath"><span class="merged" id="all.4FIoJ.1" title="原文 : Add the H2 Database Driver to the Runtime Classpath">H2データベース・ドライバのランタイム・クラスパスへの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.2mi5Cl.2" title="原文 : Add the following dependency in your pom.xml:"><code>pom.xml</code>に次の依存性を追加します:</span></p>

<markup
lang="xml"
title="<code>pom.xml</code>"
>&lt;dependency&gt;
    &lt;groupId&gt;com.h2database&lt;/groupId&gt;
    &lt;artifactId&gt;h2&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3mRi1P.1" title="原文 : In a production application, you may use a different database, so in that case you may add a different database driver dependency here instead.">本番アプリケーションでは、別のデータベースを使用することもできます。その場合は、かわりにここで別のデータベース・ドライバの依存性を追加できます。</span></p>

</div>

<h2 id="_add_the_hikari_connection_pool_extension_to_the_runtime_classpath"><span class="merged" id="all.3Jsz1M.1" title="原文 : Add the Hikari Connection Pool Extension to the Runtime Classpath">ランタイム・クラスパスへのHikari接続プール拡張機能の追加</span></h2>
<div class="section">
<p><span class="merged" id="all.2mi5Cl.3" title="原文 : Add the following dependency in your pom.xml:"><code>pom.xml</code>に次の依存性を追加します:</span></p>

<markup
lang="xml"
title="<code>pom.xml</code>"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-cdi-datasource-hikaricp&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_add_the_jta_extension_to_the_runtime_classpath"><span class="merged" id="all.26FzI2" title="原文 : Add the JTA Extension to the Runtime Classpath">JTA拡張機能のランタイム・クラスパスへの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.2mi5Cl.4" title="原文 : Add the following dependency in your pom.xml:"><code>pom.xml</code>に次の依存性を追加します:</span></p>

<markup
lang="xml"
title="<code>pom.xml</code>"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-cdi-jta-weld&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_add_the_provider_independent_helidon_jpa_extension_to_the_runtime_classpath"><span class="merged" id="all.4XHXnA" title="原文 : Add the Provider-Independent Helidon JPA Extension to the Runtime Classpath">プロバイダに依存しないHelidon JPA拡張機能のランタイム・クラスパスへの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.2mi5Cl.5" title="原文 : Add the following dependency in your pom.xml:"><code>pom.xml</code>に次の依存性を追加します:</span></p>

<markup
lang="xml"
title="<code>pom.xml</code>"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-cdi-jpa&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_add_the_eclipselink_jpa_extension_to_the_runtime_classpath"><span class="merged" id="all.4XCkd4" title="原文 : Add the EclipseLink JPA Extension to the Runtime Classpath">EclipseLink JPA拡張機能のランタイム・クラスパスへの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.2mi5Cl.6" title="原文 : Add the following dependency in your pom.xml:"><code>pom.xml</code>に次の依存性を追加します:</span></p>

<markup
lang="xml"
title="<code>pom.xml</code>"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-cdi-eclipselink&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_add_the_jta_and_jpa_dependencies_to_the_provided_classpath"><span class="merged" id="all.4LY8VK" title="原文 : Add the JTA and JPA Dependencies to the Provided Classpath">指定したクラスパスへのJTAおよびJPA依存性の追加</span></h2>
<div class="section">
<p><span class="merged" id="all.4fQ6aP" title="原文 : Add the following dependencies in your pom.xml:"><code>pom.xml</code>に次の依存性を追加します:</span></p>

<markup
lang="xml"
title="<code>pom.xml</code>"
>&lt;dependency&gt;
    &lt;groupId&gt;jakarta.persistence&lt;/groupId&gt;
    &lt;artifactId&gt;jakarta.persistence-api&lt;/artifactId&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;jakarta.transaction&lt;/groupId&gt;
    &lt;artifactId&gt;jakarta.transaction-api&lt;/artifactId&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_add_ddl_to_create_the_relevant_database_tables"><span class="merged" id="all.Tng4m" title="原文 : Add DDL to Create the Relevant Database Tables">関連データベース表を作成するためのDDLの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.3a7gSh" title="原文 : Add the following file under src/main/resources:"><code>src/main/resources</code>の下に次のファイルを追加します:</span></p>

<markup
lang="sql"
title="<code>src/main/resources/greeting.ddl</code>"
>CREATE TABLE IF NOT EXISTS GREETING (
    SALUTATION VARCHAR(64) NOT NULL PRIMARY KEY,
    RESPONSE VARCHAR(64) NOT NULL
);

MERGE INTO GREETING (SALUTATION, RESPONSE) VALUES ('Marco', 'Polo');</markup>

</div>

<h2 id="_add_an_application_yaml_file_with_database_connectivity_information"><span class="merged" id="all.xk1tX.1" title="原文 : Add an application.yaml File With Database Connectivity Information">データベース接続情報を含む<code>application.yaml</code>ファイルの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.xV0R.1" title="原文 : Replace the contents of the following file under src/main/resources:"><code>src/main/resources</code>で、次のファイルの内容を置き換えます:</span></p>

<markup
lang="yaml"
title="<code>src/main/resources/application.yaml</code>"
>server:
    port: 8080
javax:
    sql:
        DataSource:
            greetingDataSource:
                dataSourceClassName: org.h2.jdbcx.JdbcDataSource
                dataSource:
                    url: jdbc:h2:mem:greeting;INIT=RUNSCRIPT FROM 'classpath:greeting.ddl' <span class="conum" data-value="1" />
                    user: sa
                    password: ""</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2HjIa8.spl1" title="原文 : The H2 INIT property tells H2 what command to run upon starting up."><a href="http://www.h2database.com/html/features.html#execute_sql_on_connection" id="" target="_blank" >「H2 <code>INIT</code>プロパティ」</a>は、起動時に実行するコマンドをH2に指示します。</span> <span class="merged" id="all.2HjIa8.spl2" title="原文 : In this case, it is going to load and run the DDL mentioned above.">この場合、前述のDDLを<a href="http://www.h2database.com/html/commands.html#runscript" id="" target="_blank" >「ロードおよび実行」</a>に送信します。</span> </li>
</ul>
</div>

<h2 id="_add_a_java_class_to_represent_a_greeting_jpa_entity"><span class="merged" id="all.2apIFG" title="原文 : Add a Java Class to Represent a Greeting JPA Entity">応答JPAエンティティを表すJavaクラスの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.2pf45k" title="原文 : Add the following Java class under src/main/java/io/helidon/example/jpa:"><code>src/main/java/io/helidon/example/jpa</code>の下に次のJavaクラスを追加します:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/jpa/Greeting.java</code>"
>package io.helidon.example.jpa;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Access(value = AccessType.FIELD) <span class="conum" data-value="1" />
@Entity(name = "Greeting") <span class="conum" data-value="2" />
@Table(name = "GREETING") <span class="conum" data-value="3" />
public class Greeting implements Serializable { <span class="conum" data-value="4" />

    @Column(
        insertable = true,
        name = "SALUTATION", <span class="conum" data-value="5" />
        nullable = false,
        updatable = false
    )
    @Id <span class="conum" data-value="6" />
    private String salutation;

    @Basic(optional = false) <span class="conum" data-value="7" />
    @Column(
        insertable = true,
        name = "RESPONSE",
        nullable = false,
        updatable = true
    )
    private String response;

    @Deprecated
    protected Greeting() { <span class="conum" data-value="8" />
        super();
    }

    public Greeting(String salutation, String response) { <span class="conum" data-value="9" />
        super();
        this.salutation = Objects.requireNonNull(salutation);
        this.setResponse(response);
    }

    public String getSalutation() {
        return this.salutation;
    }

    public String getResponse() {
        return this.response;
    }

    public void setResponse(String response) {
        this.response = Objects.requireNonNull(response);
    }

    @Override
    public String toString() {
        return this.getSalutation() + " " + this.getResponse();
    }

}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2t5iqC.spl1" title="原文 : (Some of the annotations in this example, like this one, have sensible defaults, but the example specifies them explicitly for clarity.)">(この例の注釈には、この例と同様に、意味のあるデフォルト値を持つものもありますが、わかりやすくするために明示的に指定しています。)</span> <span class="merged" id="all.2t5iqC.spl2" title="原文 : This Access annotation says that JPA will access this class&apos; fields directly, rather than via getter and setter methods.">この<a href="https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/access" id="" target="_blank" >「<code>Access</code>注釈」</a>は、JPAがgetterおよびsetterメソッドを介してではなく、このクラス・フィールドに直接アクセスすることを示しています。</span> </li>
<li data-value="2"><span class="merged" id="all.2Jf50R.spl1" title="原文 : The Entity annotation identifies this class as a JPA entity."><a href="https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/entity" id="" target="_blank" >「<code>Entity</code>注釈」</a>は、このクラスをJPAエンティティとして識別します。</span> <span class="merged" id="all.2Jf50R.spl2" title="原文 : The name element value can be used in JPQL queries."><a href="https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/entity#name()" id="" target="_blank" >「<code>name</code>要素」</a>値はJPQL問合せで使用できます。</span> </li>
<li data-value="3"><span class="merged" id="all.1wus00" title="原文 : The Table annotation identifies the database table to which this class will be mapped."><a href="https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/table" id="" target="_blank" >「<code>Table</code>注釈」</a>は、このクラスがマップされるデータベース表を識別します。</span></li>
<li data-value="4"><span class="merged" id="all.3xcFFw" title="原文 : JPA entities should be Serializable.">JPAエンティティは<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html" id="" target="_blank" ><code>Serializable</code></a>である必要があります。</span></li>
<li data-value="5"><span class="merged" id="all.1epy4O.spl1" title="原文 : The Column annotation specifies what column in the database the annotated field maps to."><a href="https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/column" id="" target="_blank" >「<code>Column</code>注釈」</a>は、注釈付きフィールドがマップされるデータベース内の列を指定します。</span> <span class="merged" id="all.1epy4O.spl2" title="原文 : The elements of the Column annotation further describe the column."><code>Column</code>注釈の要素は、列をさらに説明します。</span> </li>
<li data-value="6"><span class="merged" id="all.1XjXbh" title="原文 : The Id annotation indicates this field will be mapped to the primary key of the database table."><a href="https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/id" id="" target="_blank" >「<code>Id</code>注釈」</a>は、このフィールドがデータベース表の主キーにマップされることを示します。</span></li>
<li data-value="7"><span class="merged" id="all.1LbmZg" title="原文 : The Basic annotation indicates this field will be mapped to an ordinary (&quot;basic&quot;) column."><a href="https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/basic" id="" target="_blank" >「<code>Basic</code>注釈」</a>は、このフィールドが通常の(基本)列にマップされることを示します。</span></li>
<li data-value="8"><span class="merged" id="all.W0Y8y.spl1" title="原文 : All JPA entities need a zero-argument constructor, but it doesn&rsquo;t have to be public.">すべてのJPAエンティティにはゼロ引数のコンストラクタが必要ですが、<code>public</code>である必要はありません。</span> <span class="merged" id="all.W0Y8y.spl2" title="原文 : This constructor satisfies this requirement.">このコンストラクタは、この要件を満たします。</span> <span class="merged" id="all.W0Y8y.spl3" title="原文 : It is marked Deprecated and is non-public so that normal users have to supply data for the salutation and response fields via the other constructor.">これは<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Deprecated.html" id="" target="_blank" ><code>Deprecated</code></a>とマークされ、通常のユーザーが他のコンストラクタを介して<code>salutation</code>および<code>response</code>フィールドにデータを指定する必要があるように、<code>public</code>以外になっています。</span> </li>
<li data-value="9"><span class="merged" id="all.7UWCk" title="原文 : This is the constructor normal users will use.">これは、通常ユーザーが使用するコンストラクタです。</span></li>
</ul>
</div>

<h2 id="_add_a_meta_infpersistence_xml_descriptor"><span class="merged" id="all.31FiKI" title="原文 : Add a META-INF/persistence.xml Descriptor"><code>META-INF/persistence.xml</code>ディスクリプタの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.2dbMcc" title="原文 : Add the following file under src/main/resources/META-INF:"><code>src/main/resources/META-INF</code>の下に次のファイルを追加します:</span></p>

<markup
lang="xml"
title="<code>src/main/resources/META-INF/persistence.xml</code>"
>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;persistence version="2.2" <span class="conum" data-value="1" />
             xmlns="http://xmlns.jcp.org/xml/ns/persistence"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence
                                 http://xmlns.jcp.org/xml/ns/persistence/persistence_2_2.xsd"&gt;
    &lt;persistence-unit name="greeting" transaction-type="JTA"&gt; <span class="conum" data-value="2" />
        &lt;description&gt;A persistence unit for the greeting example.&lt;/description&gt;
        &lt;jta-data-source&gt;greetingDataSource&lt;/jta-data-source&gt; <span class="conum" data-value="3" />
        &lt;class&gt;io.helidon.example.jpa.Greeting&lt;/class&gt; <span class="conum" data-value="4" />
        &lt;properties&gt; <span class="conum" data-value="5" />
            &lt;property name="eclipselink.deploy-on-startup" value="true"/&gt;
            &lt;property name="eclipselink.jdbc.native-sql" value="true"/&gt;
            &lt;property name="eclipselink.logging.logger" value="JavaLogger"/&gt;
            &lt;property name="eclipselink.logging.parameters" value="true"/&gt;
            &lt;property name="eclipselink.target-database" value="org.eclipse.persistence.platform.database.H2Platform"/&gt; <span class="conum" data-value="6" />
            &lt;property name="eclipselink.target-server" value="io.helidon.integrations.cdi.eclipselink.CDISEPlatform"/&gt; <span class="conum" data-value="7" />
            &lt;property name="eclipselink.weaving" value="false"/&gt; <span class="conum" data-value="8" />
        &lt;/properties&gt;
    &lt;/persistence-unit&gt;
&lt;/persistence&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4DaEgm" title="原文 : Helidon MP&rsquo;s JPA extension supports JPA 2.2.">Helidon MPのJPA拡張機能はJPA 2.2をサポートしています。</span></li>
<li data-value="2"><span class="merged" id="all.2GqYSg.spl1" title="原文 : Note that JTA is the transaction type."><code>JTA</code>がトランザクション・タイプであることに注意してください。</span> <span class="merged" id="all.2GqYSg.spl2" title="原文 : JTA transactions are fully supported.">JTAトランザクションは完全にサポートされています。</span> </li>
<li data-value="3"><span class="merged" id="all.4JjigN" title="原文 : Note that the name of the data source is the one configured in the application.yaml file described earlier.">データ・ソースの名前は、前述の<code>application.yaml</code>ファイルで構成されている名前です。</span></li>
<li data-value="4"><span class="merged" id="all.2p6jgN" title="原文 : The Greeting class you created is listed here.">作成した<code>Greeting</code>クラスがここにリストされます。</span></li>
<li data-value="5"><span class="merged" id="all.3fZKx9.spl1" title="原文 : The properties listed here are in general EclipseLink properties.">ここにリストされているプロパティは、一般的な<a href="https://www.eclipse.org/eclipselink/documentation/2.7/jpa/extensions/persistenceproperties_ref.htm" id="" target="_blank" >「EclipseLinkのプロパティ」</a>です。</span> <span class="merged" id="all.3fZKx9.spl2" title="原文 : Many are optional, but a few (detailed below) are required.">多くはオプションですが、いくつか(詳細は後述)が必要です。</span> </li>
<li data-value="6"><span class="merged" id="all.3NgQmL.spl1" title="原文 : This property is required when EclipseLink is the JPA provider.">EclipseLinkがJPAプロバイダの場合、<a href="https://www.eclipse.org/eclipselink/documentation/2.7/jpa/extensions/persistenceproperties_ref.htm#target-database" id="" target="_blank" >「このプロパティ」</a>が必要です。</span> <span class="merged" id="all.3NgQmL.spl2" title="原文 : It is set to org.eclipse.persistence.platform.database.H2Platform because this example uses the H2 database.">この例ではH2データベースを使用するため、<code>org.eclipse.persistence.platform.database.H2Platform</code>に設定されています。</span> </li>
<li data-value="7"><span class="merged" id="all.qiAFs" title="原文 : This property is required, and when EclipseLink is the JPA provider must have the value io.helidon.integrations.cdi.eclipselink.CDISEPlatform."><a href="https://www.eclipse.org/eclipselink/documentation/2.7/jpa/extensions/persistenceproperties_ref.htm#target-server" id="" target="_blank" >「このプロパティ」</a>が必要であり、EclipseLinkがJPAプロバイダの場合、値は<code>io.helidon.integrations.cdi.eclipselink.CDISEPlatform</code>である必要があります。</span></li>
<li data-value="8"><span class="merged" id="all.7JJiz" title="原文 : This property is required when EclipseLink is the JPA provider and must be set to false."><a href="https://www.eclipse.org/eclipselink/documentation/2.7/jpa/extensions/persistenceproperties_ref.htm#weaving" id="" target="_blank" >「このプロパティ」</a>は、EclipseLinkがJPAプロバイダの場合に必要であり、<code>false</code>に設定する必要があります。</span></li>
</ul>
</div>

<h2 id="_modify_the_pom_xml_file_to_support_static_weaving"><span class="merged" id="all.4a8bwB" title="原文 : Modify the pom.xml File To Support Static Weaving">静的ウィービングをサポートするための<code>pom.xml</code>ファイルの変更</span></h2>
<div class="section">
<p><span class="merged" id="all.40cgcz.spl1" title="原文 : Weaving is the term that describes the bytecode manipulation that JPA providers perform upon your simple Java entity classes (like the Greeting class you created above)."><em>「ウィービング」</em>は、JPAプロバイダが単純なJavaエンティティ・クラス(前述の手順で作成した<code>Greeting</code>クラスなど)に対して実行するバイトコード操作を表す用語です。</span> <span class="merged" id="all.40cgcz.spl2" title="原文 : In Helidon MicroProfile&rsquo;s JPA extension, weaving must be performed statically (at build time).">Helidon MicroProfileのJPA拡張では、ウィービングは静的に(ビルド時に)実行する必要があります。</span> <span class="merged" id="all.40cgcz.spl3" title="原文 : Here we modify the pom.xml to make that happen.">このために、<code>pom.xml</code>を変更します。</span> </p>

<p><span class="merged" id="all.2CaKw7" title="原文 : Add the following plugin configuration in your pom.xml:">次のプラグイン構成を<code>pom.xml</code>に追加します:</span></p>

<markup
lang="xml"
title="<code>pom.xml</code>"
>&lt;plugin&gt;
    &lt;groupId&gt;com.ethlo.persistence.tools&lt;/groupId&gt;
    &lt;artifactId&gt;eclipselink-maven-plugin&lt;/artifactId&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;id&gt;weave&lt;/id&gt;
            &lt;phase&gt;process-classes&lt;/phase&gt;
            &lt;goals&gt;
                &lt;goal&gt;weave&lt;/goal&gt; <span class="conum" data-value="1" />
            &lt;/goals&gt;
        &lt;/execution&gt;
        &lt;execution&gt;
            &lt;id&gt;modelgen&lt;/id&gt;
            &lt;phase&gt;generate-sources&lt;/phase&gt;
            &lt;goals&gt;
                &lt;goal&gt;modelgen&lt;/goal&gt; <span class="conum" data-value="2" />
            &lt;/goals&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
&lt;/plugin&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4BHMDg" title="原文 : Static weaving is performed on compiled classes in place.">静的ウィービングは、コンパイルされたクラスに対してインプレースで実行されます。</span></li>
<li data-value="2"><span class="merged" id="all.3qUAa2" title="原文 : The JPA static metamodel is generated by this goal."><a href="https://javaee.github.io/tutorial/persistence-criteria002.html#GJIUP" id="" target="_blank" >「JPA静的メタ・モデル」</a>は、このゴールによって生成されます。</span></li>
</ul>
</div>

<h2 id="_inject_a_container_managed_entitymanager"><span class="merged" id="all.1vxpKN" title="原文 : Inject a Container-Managed EntityManager">コンテナ管理の<code>EntityManager</code>のインジェクト</span></h2>
<div class="section">
<p><span class="merged" id="all.1pKOQe" title="原文 : In the src/main/java/io/helidon/example/jpa/GreetResource.java file, add the following imports:"><code>src/main/java/io/helidon/example/jpa/GreetResource.java</code>ファイルに、次のインポートを追加します:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/jpa/GreetResource.java</code>"
>import javax.enterprise.context.Dependent;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;</markup>

<p><span class="merged" id="all.1tDtVY.1" title="原文 : Annotate the resource class declaration with @Dependent:"><code>@Dependent</code>を使用してリソース・クラス宣言に注釈を付けます:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/jpa/GreetResource.java</code>"
>@Dependent <span class="conum" data-value="1" />
public class GreetResource {</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.cioQa" title="原文 : This ensures that io.helidon.example.jpa.GreetResource is a discoverable CDI bean, because it is an example of a bean-defining annotation.">これは<a href="https://jakarta.ee/specifications/cdi/2.0/cdi-spec-2.0.html#bean_defining_annotations" id="" target="_blank" >「Bean定義の注釈」</a>の例であるため、<code>io.helidon.example.jpa.GreetResource</code>は検出可能なCDI beanになります。</span></li>
</ul>
<p><span class="merged" id="all.25yRGZ.1" title="原文 : Then add the following annotated field declaration:">次に、次の注釈付きフィールド宣言を追加します:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/jpa/GreetResource.java</code>"
>@PersistenceContext <span class="conum" data-value="1" />
private EntityManager em;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3CmXZf" title="原文 : The @PersistenceContext annotation indicates that you want an EntityManager injected here."><a href="https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/persistencecontext" id="" target="_blank" >「<code>@PersistenceContext</code>注釈」</a>は、ここに<a href="https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/entitymanager" id="" target="_blank" ><code>EntityManager</code></a>をインジェクトすることを示しています。</span></li>
</ul>
</div>

<h2 id="_use_the_injected_entitymanager"><span class="merged" id="all.1dOlVB" title="原文 : Use the Injected EntityManager">インジェクトされた<code>EntityManager</code>の使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3vBZzB" title="原文 : In the src/main/java/io/helidon/example/jpa/GreetResource.java file, add the following import:"><code>src/main/java/io/helidon/example/jpa/GreetResource.java</code>ファイルに、次のインポートを追加します:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/jpa/GreetResource.java</code>"
>import javax.transaction.Transactional;
import javax.ws.rs.PathParam;</markup>

<p><span class="merged" id="all.36O6Xd" title="原文 : Add the following resource method to the GreetResource class:">次のリソース・メソッドを<code>GreetResource</code>クラスに追加します:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/jpa/GreetResource.java</code>"
>@GET
@Path("response/{salutation}")
@Produces("text/plain")
@Transactional <span class="conum" data-value="1" />
public String getResponse(@PathParam("salutation") String salutation) {
    final Greeting greeting = this.em.find(Greeting.class, salutation);
    final String returnValue;
    if (greeting == null) {
        returnValue = null;
    } else {
        returnValue = greeting.getResponse();
    }
    return returnValue;
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2I937V.spl1" title="原文 : A JTA transaction will be automatically started at the beginning of this method when it is invoked as a result of an incoming HTTP request, and committed or rolled back when the method terminates normally or exceptionally.">JTAトランザクションは、受信HTTPリクエストの結果として呼び出されたときにこのメソッドの先頭で自動的に開始され、メソッドが正常終了または例外終了時にコミットまたはロールバックされます。</span> <span class="merged" id="all.2I937V.spl2" title="原文 : The injected EntityManager will join the transaction automatically.">インジェクトされた<code>EntityManager</code>は、自動的にトランザクションに参加します。</span> </li>
</ul>
</div>

<h2 id="_add_logging"><span class="merged" id="all.3bbkyd" title="原文 : Add Logging">ロギングの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.1etIKD" title="原文 : Add the following content to the logging.properties file under src/main/resources:">次のコンテンツを<code>src/main/resources</code>の下の<code>logging.properties</code>ファイルに追加します:</span></p>

<markup
lang="properties"
title="<code>src/main/resources/logging.properties</code>"
>com.zaxxer.hikari.level=INFO
h2database.level=WARNING
io.netty.level=INFO
org.eclipse.persistence.level=FINE
org.glassfish.jersey.server.level=CONFIG</markup>

</div>

<h2 id="_build_the_application"><span class="merged" id="all.2sc1No.1" title="原文 : Build the Application">アプリケーションのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.2dDAwc.2" title="原文 : Execute the following from the root directory of your application:">アプリケーションのルート・ディレクトリから次のコマンドを実行します:</span></p>

<markup
lang="bash"

>mvn package</markup>

</div>

<h2 id="_run_the_application"><span class="merged" id="all.2WCg9p.1"  title="原文:: Run the Application">アプリケーションの実行</span></h2>
<div class="section">
<p><span class="merged" id="all.2dDAwc.3" title="原文 : Execute the following from the root directory of your application:">アプリケーションのルート・ディレクトリから次のコマンドを実行します:</span></p>

<markup
lang="bash"

>java -jar target/helidon-jpa.jar</markup>

</div>

<h2 id="_test_the_application"><span class="merged" id="all.2hLqhJ.1"  title="原文:: Test the Application">アプリケーションのテスト</span></h2>
<div class="section">
<p><span class="merged" id="all.1ISuhH.1"  title="原文:: Execute the following:">次を実行します。</span></p>

<markup
lang="bash"

>curl http://localhost:8080/greet/response/Marco</markup>

<p><span class="merged" id="all.1tjkjb" title="原文 : Observe that Polo is returned."><code>Polo</code>が返されることを確認します。</span></p>

</div>
</doc-view>
