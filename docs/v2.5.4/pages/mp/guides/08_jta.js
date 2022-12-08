<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.19nkOi" title="原文 : Helidon MP JTA Guide">Helidon MP JTAガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1Y6mcF" title="原文 : This guide shows how to configure and use Java Transaction API (JTA)-compliant transactions in your Helidon MP application.">このガイドでは、Helidon MPアプリケーションで<a href="https://jakarta.ee/specifications/transactions/1.3/" id="" target="_blank" >Java Transaction API (JTA)</a>準拠のトランザクションを構成および使用する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.9"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.2vag3o" title="原文 : For this 10 minute tutorial, you will need the following:">この10分間のチュートリアルでは、次のものが必要です:</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1hKNxI.6" title="原文 : A Helidon {upper-case-flavor} Application">Helidon {upper-case-flavor} アプリケーション</span></td>
<td class=""><span class="merged" id="all.3jMlMY.6" title="原文 : You can use your own application or use the Helidon {upper-case-flavor} Quickstart to create a sample application.">独自のアプリケーションを使用するか、<a href="https://helidon.io/docs/v2/#/{lower-case-flavor}/guides/02_quickstart" id="" target="_blank" >「Helidon {upper-case-flavor} クイックスタート」</a>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UjXGj.7" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java&#160;SE&#160;11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open&#160;JDK&#160;11</a>)</span></td>
<td class=""><span class="merged" id="all.3e6V0X.7" title="原文 : Helidon requires Java 11+.">HelidonにはJava 11以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh.9" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.7" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HtX9I.8"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.7" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48aNQe.8"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1tjPJQ.7" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop).">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタ(<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>も可)が必要です。</span></td>
</tr>
</tbody>
</table>
</div>
<markup
lang="bash"
title="Verify Prerequisites"
>java -version
mvn --version
docker --version
kubectl version --short</markup>

<markup
lang="bash"
title="Setting JAVA_HOME"
># On Mac
export JAVA_HOME=`/usr/libexec/java_home -v 11`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-11</markup>

</div>

<h2 id="_add_the_helidon_jta_integration_to_your_applications_runtime_classpath"><span class="merged" id="all.28BlHL" title="原文 : Add the Helidon JTA Integration to Your Application&rsquo;s Runtime Classpath">アプリケーションのランタイム・クラスパスへのHelidon JTA統合の追加</span></h2>
<div class="section">
<p><span class="merged" id="all.31Gjlq.spl1" title="原文 : To bring JTA transactions to your Helidon MP application, you&rsquo;ll need to add the relevant extension.">JTAトランザクションをHelidon MPアプリケーションに取り込むには、関連する拡張機能を追加する必要があります。</span> <span class="merged" id="all.31Gjlq.spl2" title="原文 : Specifically, you&rsquo;ll need to add an appropriate &lt;dependency&gt; element as a child element of the &lt;dependencies&gt; element in your pom.xml, referencing the Helidon JTA extension:">具体的には、Helidon JTA拡張機能を参照して、適切な<code>&lt;dependency></code>要素を<code>pom.xml</code>の<code>&lt;dependencies></code>要素の子要素として追加する必要があります:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-cdi-jta-weld&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt; <span class="conum" data-value="1" />
&lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.TrPl" title="原文 : Note the scope is runtime.">スコープは<code>runtime</code>であることに注意してください。</span></li>
</ul>
</div>

<h2 id="_add_jta_to_your_applications_compilation_classpath"><span class="merged" id="all.rOfhv" title="原文 : Add JTA to Your Application&rsquo;s Compilation Classpath">アプリケーションのコンパイル・クラスパスへのJTAの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.3NaiJu.spl1" title="原文 : To actually use the Java Transaction API in your code, you&rsquo;ll need to ensure a library defining the classes and interfaces mandated by the specification is present on your compilation classpath.">コードでJava Transaction APIを実際に使用するには、仕様で規定されているクラスおよびインタフェースを定義するライブラリがコンパイル・クラスパスに存在することを確認する必要があります。</span> <span class="merged" id="all.3NaiJu.spl2" title="原文 : (Note that this library is separate from any given vendor&rsquo;s actual implementation of the specification by way of these classes and interfaces.)">(このライブラリは、特定のベンダーの仕様の実際の実装とは、これらのクラスおよびインタフェースを介して分離されています。)</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;jakarta.transaction&lt;/groupId&gt;
    &lt;artifactId&gt;jakarta.transaction-api&lt;/artifactId&gt;
    &lt;scope&gt;provided&lt;/scope&gt; <span class="conum" data-value="1" />
&lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.Nvr5D" title="原文 : The scope is provided to allow the JTA implementation runtime to provide its own implementation of the API jar if necessary.">スコープは、JTA実装ランタイムが必要に応じて独自のAPI jarの実装を提供できるようにする<code>provided</code>です。</span></li>
</ul>
</div>

<h2 id="_annotate_a_method_with_transactional"><span class="merged" id="all.4VwuPu" title="原文 : Annotate a Method With @Transactional"><a href="https://jakarta.ee/specifications/transactions/1.3/apidocs/javax/transaction/transactional" id="" target="_blank" ><code>@Transactional</code></a>を使用したメソッドの注釈付け</span></h2>
<div class="section">
<p><span class="merged" id="all.3ds4zY" title="原文 : Choose a method that you wish to have a certain kind of transactional behavior, and annotate it with the @Transactional annotation.">特定の種類のトランザクション動作が必要なメソッドを選択し、<a href="https://jakarta.ee/specifications/transactions/1.3/apidocs/javax/transaction/transactional" id="" target="_blank" ><code>@Transactional</code></a>注釈を付けます。</span></p>

<p><span class="merged" id="all.3afbkh.spl1" title="原文 : The method in question will need to be a business method of some kind: a method that is invoked by the Helidon MP server machinery, not directly by the user.">問題のメソッドは、なんらかの種類のビジネス・メソッドである必要があります: ユーザーによって直接呼び出されるのではなく、Helidon MPサーバー・マシンによって呼び出されるメソッド。</span> <span class="merged" id="all.3afbkh.spl2" title="原文 : This is because normally the behavior that @Transactional requests is provided by interceptor functionality.">これは、通常、<code>@Transactional</code>リクエストの動作がインターセプタ機能によって提供されるためです。</span> <span class="merged" id="all.3afbkh.spl3" title="原文 : More concretely, in Helidon MP you can annotate a JAX-RS resource method, or a method on a CDI bean that itself is injected in your application somewhere.">具体的には、Helidon MPで、アプリケーション内のどこかに自身がインジェクトされているCDI beanのメソッドまたは<a href="https://javaee.github.io/tutorial/jaxrs002.html#GILQB" id="" target="_blank" >「JAX-RSリソース・メソッド」</a>に注釈を付けることができます。</span> </p>

<p><span class="merged" id="all.3CxSxM" title="原文 : For example, a method on a hypothetical PersonDAO class that saves a hypothetical Person object to a database, starting a new JTA transaction if necessary, might look like this:">たとえば、仮想<code>Person</code>オブジェクトをデータベースに保存し、必要に応じて新しいJTAトランザクションを開始する仮想<code>PersonDAO</code>クラスのメソッドは、次のようになります:</span></p>

<markup
lang="java"
title="<code>PersonDAO.java</code>"
>import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

@Transactional(TxType.REQUIRED) <span class="conum" data-value="1" />
public void savePerson(Person person) {
    // Use JPA or another JTA-aware framework to save the Person object <span class="conum" data-value="2" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.p3esY.spl1" title="原文 : The Transactional annotation indicates the kind of transactional behavior you would like this method to have."><code>Transactional</code>注釈は、このメソッドで実行するトランザクション動作の種類を示します。</span> <span class="merged" id="all.p3esY.spl2" title="原文 : In this example, we explicitly set the kind of behavior to be REQUIRED (which also happens to be the default if you do not specify an explicit TxType).">この例では、動作の種類を明示的に<a href="https://jakarta.ee/specifications/transactions/1.3/apidocs/javax/transaction/transactional.txtype#REQUIRED" id="" target="_blank" ><code>REQUIRED</code></a>に設定します(明示的な<a href="https://jakarta.ee/specifications/transactions/1.3/apidocs/javax/transaction/transactional.txtype" id="" target="_blank" ><code>TxType</code></a>を指定しない場合も、これがデフォルトになります)。</span> </li>
<li data-value="2"><span class="merged" id="all.2rtBQ9.spl1" title="原文 : Annotating a method with @Transactional demarcates a JTA transaction, but it is up to individual JTA-aware frameworks and libraries to actually do something when the transaction is implicitly started."><code>@Transactional</code>を使用してメソッドに注釈を付けるとJTAトランザクションの境界が設定されますが、トランザクションが暗黙的に開始されたときに実際に何かを行うかは、個々のJTA対応フレームワークおよびライブラリによって決まります。</span> <span class="merged" id="all.2rtBQ9.spl2" title="原文 : JPA is an example of a framework that is JTA aware.">JPAはJTA対応のフレームワークの例です。</span> </li>
</ul>
</div>
</doc-view>
