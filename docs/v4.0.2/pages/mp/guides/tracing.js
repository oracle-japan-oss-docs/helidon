<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1XMSTd" title="原文 : Helidon MP Tracing Guide">Helidon MPトレース・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1arwup" title="原文 : This guide describes how to create a sample MicroProfile (MP) project that can be used to run some basic examples using tracing with Helidon MP.">このガイドでは、Helidon MPでトレースを使用していくつかの基本的な例を実行するために使用できるサンプルMicroProfile (MP)プロジェクトの作成方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.13"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.4BUptU.2" title="原文 : For this 30 minute tutorial, you will need the following:">この30分のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3J4a7U.11" title="原文 : A Helidon MP Application">Helidon MPアプリケーション</span></td>
<td class=""><span class="merged" id="all.13muNj.11" title="原文 : You can use your own application or use the Helidon MP Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/mp/guides/quickstart">「Helidon MPクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17vEm3.14" title="原文 : Java&#160;SE&#160;21 (Open&#160;JDK&#160;21)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java SE 21</a> (<a href="http://jdk.java.net" target="_blank">JDK 21を開く</a>)</span></td>
<td class=""><span class="merged" id="all.3uVV7D.14" title="原文 : Helidon requires Java 21+.">HelidonにはJava 21+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UWTyd.14" title="原文 : Maven 3.8+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.8+</a></span></td>
<td class=""><span class="merged" id="all.47RJEf.14" title="原文 : Helidon requires Maven 3.8+.">HelidonにはMaven 3.8+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.14"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.14" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.14"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.14" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
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
export JAVA_HOME=`/usr/libexec/java_home -v 21`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-21</markup>

</div>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.9"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.v5kfU.spl1" title="原文 : Distributed tracing is a critical feature of micro-service based applications, since it traces workflow both within a service and across multiple services.">分散トレースは、サービス内と複数のサービス間の両方でワークフローをトレースするため、マイクロサービス・ベースのアプリケーションの重要な機能です。</span> <span class="merged" id="all.v5kfU.spl2" title="原文 : This provides insight to sequence and timing data for specific blocks of work, which helps you identify performance and operational issues.">これにより、特定の作業ブロックのデータを順序付けおよびタイミング化するための洞察が得られ、パフォーマンスおよび操作上の問題を識別するのに役立ちます。</span> <span class="merged" id="all.v5kfU.spl3" title="原文 : Helidon MP includes support for distributed tracing through the OpenTracing API.">Helidon MPには、<a href="https://opentracing.io" target="_blank">OpenTracing API</a>を介した分散トレースのサポートが含まれます。</span> <span class="merged" id="all.v5kfU.spl4" title="原文 : Tracing is integrated with WebServer and Security using either the Zipkin or Jaeger tracers.">トレースは、<a href="https://zipkin.io" target="_blank">Zipkin</a>または<a href="https://www.jaegertracing.io" target="_blank">Jaeger</a>トレーサを使用して、WebServerおよびセキュリティと統合されます。</span> </p>


<h3 id="_tracing_concepts"><span class="merged" id="all.PijGb" title="原文 : Tracing Concepts">トレースの概念</span></h3>
<div class="section">
<p><span class="merged" id="all.3VvilM" title="原文 : This section explains a few concepts that you need to understand before you get started with tracing.">この項では、トレースを開始する前に理解しておく必要がある概念について説明します。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.34nTNg" title="原文 : In the context of this document, a service is synonymous with an application.">このドキュメントのコンテキストでは、<em>「サービス」</em>はアプリケーションと同義です。</span></p>

</li>
<li>
<p><span class="merged" id="all.CIY3X.spl1" title="原文 : A span is the basic unit of work done within a single service, on a single host."><em>「スパン」</em>は、単一のホスト上の単一のサービス内で実行される基本的な作業単位です。</span> <span class="merged" id="all.CIY3X.spl2" title="原文 : Every span has a name, starting timestamp, and duration.">すべてのスパンには、名前、開始タイムスタンプおよび期間があります。</span> <span class="merged" id="all.CIY3X.spl3" title="原文 : For example, the work done by a REST endpoint is a span.">たとえば、RESTエンドポイントによって実行される作業はスパンです。</span> <span class="merged" id="all.CIY3X.spl4" title="原文 : A span is associated to a single service, but its descendants can belong to different services and hosts.">スパンは単一のサービスに関連付けられますが、その子孫は異なるサービスおよびホストに属することができます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.4745D5.spl1" title="原文 : A trace contains a collection of spans from one or more services, running on one or more hosts."><em>「トレース」</em>には、1つ以上のホストで実行されている、1つ以上のサービスからのスパンのコレクションが含まれています。</span> <span class="merged" id="all.4745D5.spl2" title="原文 : For example, if you trace a service endpoint that calls another service, then the trace would contain spans from both services.">たとえば、別のサービスを呼び出すサービス・エンドポイントをトレースする場合、トレースには両方のサービスのスパンが含まれます。</span> <span class="merged" id="all.4745D5.spl3" title="原文 : Within a trace, spans are organized as a directed acyclic graph (DAG) and can belong to multiple services, running on multiple hosts.">トレース内では、スパンはDirected Acyclic Graph (DAG)として編成され、複数のホストで実行されている複数のサービスに属することができます。</span> <span class="merged" id="all.4745D5.spl4" title="原文 : The OpenTracing Data Model describes the details at The OpenTracing Semantic Specification."><em>「OpenTracingデータ・モデル」</em>の詳細は、<a href="https://opentracing.io/specification" target="_blank">「OpenTracingセマンティック仕様」</a>を参照してください。</span> <span class="merged" id="all.4745D5.spl5" title="原文 : Spans are automatically created by Helidon as needed during execution of the REST request.">スパンは、RESTリクエストの実行時に、必要に応じてHelidonによって自動的に作成されます。</span> </p>

</li>
</ul>

</div>

</div>


<h2 id="_getting_started_with_tracing"><span class="merged" id="all.3A1SV5" title="原文 : Getting Started with Tracing">トレースの開始</span></h2>
<div class="section">
<p><span class="merged" id="all.nHGME.spl1" title="原文 : The examples in this guide demonstrate how to integrate tracing with Helidon, how to view traces, how to trace across multiple services, and how to integrate tracing with Kubernetes.">このガイドの例では、トレースをHelidonと統合する方法、トレースを表示する方法、複数のサービス間でトレースする方法、およびトレースをKubernetesと統合する方法を示します。</span> <span class="merged" id="all.nHGME.spl2" title="原文 : All examples use Jaeger and traces will be viewed using Jaeger UI.">すべての例はJaegerを使用し、トレースはJaeger UIを使用して表示されます。</span> </p>


<h3 id="_create_a_sample_helidon_mp_project"><span class="merged" id="all.4cfc7B" title="原文 : Create a Sample Helidon MP project">サンプルHelidon MPプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2oWHvo.2" title="原文 : Use the Helidon MP Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon MP Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Run the Maven archetype:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=4.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

<markup
lang="bash"
title="The project will be built and run from the <code>helidon-quickstart-mp</code> directory:"
>cd helidon-quickstart-mp</markup>

</div>


<h3 id="_set_up_jaeger"><span class="merged" id="all.19I6pn" title="原文 : Set up Jaeger">Jaegerの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3bTUZi.spl1" title="原文 : First, you need to run the Jaeger tracer.">まず、Jaegerトレーサを実行する必要があります。</span> <span class="merged" id="all.3bTUZi.spl2" title="原文 : Helidon will communicate with this tracer at runtime.">Helidonは、実行時にこのトレーサと通信します。</span> </p>

<markup
lang="bash"
title="Run Jaeger within a docker container, then check the Jaeger server working:"
>docker run -d --name jaeger \                  <span class="conum" data-value="1" />
  -e COLLECTOR_OTLP_ENABLED=true \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 14250:14250 \
  -p 14268:14268 \
  -p 14269:14269 \
  -p 9411:9411 \
  jaegertracing/all-in-one:1.50</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3uWfHi" title="原文 : Run the Jaeger docker image.">Jaeger dockerイメージを実行します。</span></li>
</ul>

<markup
lang="bash"
title="Check the Jaeger server by opening in browser:"
>http://localhost:16686/search</markup>

</div>


<h3 id="_enable_tracing_in_the_helidon_application"><span class="merged" id="all.4QlQk3" title="原文 : Enable Tracing in the Helidon Application">Helidonアプリケーションでのトレースの有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.3zaPSv.spl1" title="原文 : Update the pom.xml file and add the following Jaeger dependency to the &lt;dependencies&gt; section (not &lt;dependencyManagement&gt;).">pom.xmlファイルを更新し、次のJaeger依存関係を<code>&lt;dependencies></code>セクション(<code>&lt;dependencyManagement></code>ではなく)に追加します。</span> <span class="merged" id="all.3zaPSv.spl2" title="原文 : This will enable Helidon to use Jaeger at the default host and port, localhost:14250.">これにより、Helidonがデフォルトのホストおよびポート<code>localhost:14250</code>でJaegerを使用できるようになります。</span> </p>

<markup
lang="xml"
title="Add the following dependency to <code>pom.xml</code>:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.43hod.spl1" title="原文 : All spans sent by Helidon to Jaeger need to be associated with a service.">HelidonによってJaegerに送信されるすべてのスパンをサービスに関連付ける必要があります。</span> <span class="merged" id="all.43hod.spl2" title="原文 : Specify the service name below.">次のサービス名を指定します。</span> </p>

<markup
lang="bash"
title="Add the following line to <code>META-INF/microprofile-config.properties</code>:"
>tracing.service=helidon-mp-1</markup>

<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-mp.jar</markup>

<markup
lang="bash"
title="Run the curl command in a new terminal window and check the response:"
>curl http://localhost:8080/greet</markup>

<markup
lang="json"

>{
  "message": "Hello World!"
}</markup>

</div>


<h3 id="_view_tracing_using_jaeger_ui"><span class="merged" id="all.3NHGVA" title="原文 : View Tracing Using Jaeger UI">Jaeger UIを使用したトレースの表示</span></h3>
<div class="section">
<p><span class="merged" id="all.3Qanz6.spl1" title="原文 : The tracing output data is verbose and can be difficult to interpret using the REST API, especially since it represents a structure of spans.">トレース出力データは冗長であり、特にスパンの構造を表すため、REST APIを使用した解釈が困難な場合があります。</span> <span class="merged" id="all.3Qanz6.spl2" title="原文 : Jaeger provides a web-based UI at http://localhost:16686/search, where you can see a visual representation of the same data and the relationship between spans within a trace.">Jaegerは、<a class="bare" href="http://localhost:16686/search" target="_blank">http://localhost:16686/search</a>でwebベースのUIを提供します。このUIでは、同じデータの視覚的な表現と、トレース内のスパン間の関係を確認できます。</span> <span class="merged" id="all.3Qanz6.spl3" title="原文 : If you see a Lens UI button at the top center then click on it and it will take you to the specific UI used by this guide.">上部中央に<code>Lens UI</code>ボタンが表示されている場合は、それをクリックすると、このガイドで使用する特定のUIに移動します。</span> </p>

<p><span class="merged" id="all.2zGPId" title="原文 : Click on the UI Find traces button (the search icon) as shown in the image below.">次のイメージに示すように、UIの「トレースの検索」ボタン(検索アイコン)をクリックします。</span></p>


<div class="block-title"><span class="merged" id="all.4YE75N"  title="原文:: Jaeger UI"><span>Jaeger UI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="リフレッシュのトレース" src="images/guides/12_tracing_refresh.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.fAXZr.spl1" title="原文 : The image below shows the trace summary, including start time and duration of each trace.">次の図は、各トレースの開始時間および継続時間を含むトレース・サマリーを示しています。</span> <span class="merged" id="all.fAXZr.spl2" title="原文 : There are several traces, each one generated in response to a curl http://localhost:8080/greet invocation.">複数のトレースがあり、それぞれが<code>curl <a class="bare" href="http://localhost:8080/greet" target="_blank">http://localhost:8080/greet</a></code>呼出しにレスポンスして生成されます。</span> <span class="merged" id="all.fAXZr.spl3" title="原文 : The oldest trace will have a much longer duration since there is one-time initialization that occurs.">1回限りの初期化が行われるため、最も古いトレースの継続時間が大幅に長くなります。</span> </p>


<div class="block-title"><span class="merged" id="all.SxAZs" title="原文 : Tracing list view"><span>トレース・リスト・ビュー</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース" src="images/guides/12_tracing_top.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.1E1EsL.spl1" title="原文 : Click on a trace and you will see the trace detail page where the spans are listed.">トレースをクリックすると、スパンがリストされたトレース詳細ページが表示されます。</span> <span class="merged" id="all.1E1EsL.spl2" title="原文 : You can clearly see the root span and the relationship among all the spans in the trace, along with timing information.">ルート・スパンおよびトレース内のすべてのスパン間の関係をタイミング情報とともに明確に確認できます。</span> </p>


<div class="block-title"><span class="merged" id="all.3R0m3q" title="原文 : Trace detail page"><span>トレース詳細ページ</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース詳細" src="images/guides/12_tracing_detail.png" /> </v-card-text> </v-card>


<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4MTz8C.spl1" title="原文 : A parent span might not depend on the result of the child.">親スパンは、子の結果に依存しない場合があります。</span> <span class="merged" id="all.4MTz8C.spl2" title="原文 : This is called a FollowsFrom reference, see Open Tracing Semantic Spec.">これは<code>FollowsFrom</code>参照と呼ばれます。<a href="https://github.com/opentracing/specification/blob/master/specification.md" target="_blank">「トレース・セマンティクス仕様のオープン」</a>を参照してください。</span> <span class="merged" id="all.4MTz8C.spl3" title="原文 : Note that the last span that writes the response after the root span ends falls into this category.">ルート・スパン終了後にレスポンスを書き込む最後のスパンがこのカテゴリに分類されることに注意してください。</span> </p>
</div>

<p><span class="merged" id="all.4PfvW0.spl1" title="原文 : You can examine span details by clicking on the span row.">スパン行をクリックすると、スパンの詳細を確認できます。</span> <span class="merged" id="all.4PfvW0.spl2" title="原文 : Refer to the image below, which shows the security span details, including timing information.">次の図を参照してください。この図は、タイミング情報を含む<code>security</code>スパンの詳細を示しています。</span> <span class="merged" id="all.4PfvW0.spl3" title="原文 : You can see times for each space relative to the root span.">ルート・スパンに対して相対的な各スペースの時間を表示できます。</span> <span class="merged" id="all.4PfvW0.spl4" title="原文 : These rows are annotated with Server Start and Server Finish, as shown in the third column.">これらの行には、3番目の列に示すように、<code>Server Start</code>および<code>Server Finish</code>の注釈が付けられます。</span> </p>

</div>


<h3 id="_enable_tracing_on_cdi_beans"><span class="merged" id="all.3oQbl6" title="原文 : Enable Tracing on CDI Beans">CDI Beanでのトレースの有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.4KsSVg.spl1" title="原文 : So far in this tutorial, you have used tracing with JAX-RS without needing to annotate.">これまでのところ、このチュートリアルでは、注釈を付けずにJAX-RSでトレースを使用しました。</span> <span class="merged" id="all.4KsSVg.spl2" title="原文 : You can enable tracing on other CDI beans, either at the class level or at the method level, as shown by the following examples.">次の例に示すように、クラス・レベルまたはメソッド・レベルで、他のCDI beanのトレースを有効にできます。</span> </p>


<h4 id="_tracing_at_the_method_level"><span class="merged" id="all.1Rh1C3" title="原文 : Tracing at the Method Level">メソッド・レベルでのトレース</span></h4>
<div class="section">
<p><span class="merged" id="all.HtX83" title="原文 : To trace at the method level, you just annotate a method with @Traced.">メソッド・レベルでトレースするには、メソッドに@Tracedの注釈を付けます。</span></p>

<markup
lang="java"
title="Update the <code>GreetingProvider</code> class; 1) Add a new import and 2) Add the @Traced annotation to the <code>getMessage</code> method:"
>import org.eclipse.microprofile.opentracing.Traced; <span class="conum" data-value="1" />

class MyClass{
    @Traced  <span class="conum" data-value="2" />
    String getMessage() {
        return message.get();
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4FQLAt" title="原文 : Import the Traced annotation."><code>Traced</code>注釈をインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.yBlQ4" title="原文 : Enable tracing for getMessage.">getMessageのトレースを有効にします。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoints and check the response:"
>curl http://localhost:8080/greet</markup>

<p><span class="merged" id="all.3i8tlt.spl1" title="原文 : Click the back button on your browser, then click on the UI refresh button to see the new trace.">ブラウザの戻るボタンをクリックし、UIリフレッシュ・ボタンをクリックして新しいトレースを表示します。</span> <span class="merged" id="all.3i8tlt.spl2" title="原文 : Select the newest trace in the list to see the trace detail page like the one below.">リスト内の最新のトレースを選択すると、次のようなトレース詳細ページが表示されます。</span> <span class="merged" id="all.3i8tlt.spl3" title="原文 : Notice the new span named io.helidon.examples.quickstart.mp.greetingprovider.getmessage."><code>io.helidon.examples.quickstart.mp.greetingprovider.getmessage</code>という名前の新しいスパンに注意してください。</span> </p>

</div>


<h4 id="_tracing_at_the_class_level"><span class="merged" id="all.qVWc4" title="原文 : Tracing at the Class Level">クラス・レベルでのトレース</span></h4>
<div class="section">
<p><span class="merged" id="all.2V1Nxe.spl1" title="原文 : To trace at the class level, annotate the class with @Traced.">クラス・レベルでトレースするには、クラスに@Tracedの注釈を付けます。</span> <span class="merged" id="all.2V1Nxe.spl2" title="原文 : This will enable tracing for all class methods, except for the constructor and private methods.">これにより、コンストラクタおよびprivateメソッドを除くすべてのクラス・メソッドのトレースが有効になります。</span> </p>

<markup
lang="java"
title="Update the <code>GreetingProvider</code> class; 1) Add @Traced to the <code>GreetingProvider</code> class and 2) Remove @Traced from the <code>getMessage</code> method:"
>@Traced <span class="conum" data-value="1" />
@ApplicationScoped
public class GreetingProvider {

    String getMessage() { <span class="conum" data-value="2" />
        return message.get();
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1nGKcQ" title="原文 : This will enable tracing for all class methods, except for the constructor and methods that are private.">これにより、privateのコンストラクタおよびメソッドを除くすべてのクラス・メソッドのトレースが有効になります。</span></li>
<li data-value="2"><span class="merged" id="all.3XEXfP" title="原文 : Remove @Traced for the getMessage method."><code>getMessage</code>メソッドの@Tracedを削除します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoints and check the response:"
>curl http://localhost:8080/greet</markup>

<p><span class="merged" id="all.1sqjV2" title="原文 : You can refresh the UI view and drill down the trace to see the new spans.">UIビューをリフレッシュし、トレースをドリルダウンして新しいスパンを表示できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1mg81Y.spl1" title="原文 : Methods invoked directly by your code are not enabled for tracing, even if you explicitly annotate them with @Traced.">コードによって直接呼び出されたメソッドは、@Tracedで明示的に注釈を付けた場合でも、トレースに対して有効になりません。</span> <span class="merged" id="all.1mg81Y.spl2" title="原文 : Tracing only works for methods invoked on CDI beans.">トレースはCDI beanで呼び出されたメソッドに対してのみ機能します。</span> <span class="merged" id="all.1mg81Y.spl3"  title="原文: See the example below.">次の例を参照してください。</span> </p>
</div>

<markup
lang="java"
title="Update the <code>GreetingProvider</code> class with the following code:"
>@ApplicationScoped
public class GreetingProvider {
    private final AtomicReference&lt;String&gt; message = new AtomicReference&lt;&gt;();

    @Inject
    public GreetingProvider(@ConfigProperty(name = "app.greeting") String message) {
        this.message.set(message);
    }

    @Traced <span class="conum" data-value="1" />
    String getMessage() {
        return getMessage2();
    }

    @Traced  <span class="conum" data-value="2" />
    String getMessage2() {
        return message.get();
    }

    void setMessage(String message) {
        this.message.set(message);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3yoFEa" title="原文 : The getMessage method will be traced since it is externally invoked by GreetResource."><code>getMessage</code>メソッドは、<code>GreetResource</code>によって外部で呼び出されるため、トレースされます。</span></li>
<li data-value="2"><span class="merged" id="all.209jMQ" title="原文 : The getMessage2 method will not be traced, even with the @Traced annotation, since it is called internally by getMessage."><code>getMessage2</code>メソッドは、<code>getMessage</code>によって内部的にコールされるため、@Traced注釈を使用してもトレースされません。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoints:"
>curl http://localhost:8080/greet</markup>

<p><span class="merged" id="all.1qt8PI" title="原文 : Then check the response in the Jaeger UI in the browser.">次に、ブラウザのJaeger UIでレスポンスを確認します。</span></p>

</div>

</div>


<h3 id="_trace_across_services"><span class="merged" id="all.42BMvF" title="原文 : Trace Across Services">サービス間のトレース</span></h3>
<div class="section">
<p><span class="merged" id="all.1FX3Hw.spl1" title="原文 : Helidon automatically traces across services as long as the services use the same tracer, for example, the same instance of Jaeger.">Helidonは、サービスで同じトレーサ(たとえば、Jaegerの同じインスタンス)が使用されているかぎり、サービス全体のトレースを自動的に実行します。</span> <span class="merged" id="all.1FX3Hw.spl2" title="原文 : This means a single trace can include spans from multiple services and hosts.">つまり、単一のトレースに複数のサービスおよびホストからのスパンを含めることができます。</span> <span class="merged" id="all.1FX3Hw.spl3" title="原文 : OpenTracing uses a SpanContext to propagate tracing information across process boundaries.">OpenTracingは、<code>SpanContext</code>を使用して、プロセス境界を越えてトレース情報を伝播します。</span> <span class="merged" id="all.1FX3Hw.spl4" title="原文 : When you make client API calls, Helidon will internally call OpenTracing APIs to propagate the SpanContext.">クライアントAPIコールを行うと、Helidonは内部的にOpenTracing APIをコールして<code>SpanContext</code>を伝播します。</span> <span class="merged" id="all.1FX3Hw.spl5" title="原文 : There is nothing you need to do in your application to make this work.">これを機能させるためにアプリケーションで行う必要があることはありません。</span> </p>

<p><span class="merged" id="all.4NkwkZ.spl1" title="原文 : To demonstrate distributed tracing, you will need to create a second project, where the server listens on port 8081.">分散トレースを示すには、サーバーがポート8081でリスニングする別のプロジェクトを作成する必要があります。</span> <span class="merged" id="all.4NkwkZ.spl2" title="原文 : Create a new root directory to hold this new project, then do the following steps, similar to what you did at the start of this guide:">この新しいプロジェクトを格納する新しいルート・ディレクトリを作成し、このガイドの冒頭で行ったステップと同様に次のステップを実行します:</span> </p>


<h4 id="_create_a_second_service"><span class="merged" id="all.2f2tMU" title="原文 : Create a second service">2つ目のサービスの作成</span></h4>
<div class="section">
<markup
lang="bash"
title="Run the Maven archetype:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=4.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp-2 \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

<markup
lang="bash"
title="The project will be built and run from the <code>helidon-quickstart-mp</code> directory:"
>cd helidon-quickstart-mp-2</markup>

<markup
lang="xml"
title="Add the following dependency to <code>pom.xml</code>:"
>&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-tracing-providers-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="bash"
title="Replace <code>META-INF/microprofile-config.properties</code> with the following:"
>app.greeting=Hello From MP-2
tracing.service=helidon-mp-2

# Microprofile server properties
server.port=8081
server.host=0.0.0.0</markup>

<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-mp-2.jar</markup>

<markup
lang="bash"
title="Run the curl command in a new terminal window and check the response (<strong>notice the port is 8081</strong>) :"
>curl http://localhost:8081/greet</markup>

<markup
lang="json"

>{
  "message": "Hello From MP-2 World!"
}</markup>

</div>


<h4 id="_modify_the_first_service"><span class="merged" id="all.tF0GP" title="原文 : Modify the first service">最初のサービスの変更</span></h4>
<div class="section">
<p><span class="merged" id="all.4Yeqrw" title="原文 : Once you have validated that the second service is running correctly, you need to modify the original application to call it.">2つ目のサービスが正しく実行されていることをバリデートしたら、元のアプリケーションを変更してコールする必要があります。</span></p>

<markup
lang="java"
title="Replace the <code>GreetResource</code> class with the following code:"
>package io.helidon.examples.quickstart.se;

import java.util.Collections;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.MediaType;
import org.glassfish.jersey.server.Uri;

@Path("/greet")
@RequestScoped
public class GreetResource {

  @Uri("http://localhost:8081/greet")
  private WebTarget target; <span class="conum" data-value="1" />

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
  private final GreetingProvider greetingProvider;

  @Inject
  public GreetResource(GreetingProvider greetingConfig) {
    this.greetingProvider = greetingConfig;
  }

  @SuppressWarnings("checkstyle:designforextension")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public JsonObject getDefaultMessage() {
    return createResponse("World");
  }

  @GET
  @Path("/outbound") <span class="conum" data-value="2" />
  public JsonObject outbound() {
    return target.request().accept(MediaType.APPLICATION_JSON_TYPE).get(JsonObject.class);
  }

  private JsonObject createResponse(String who) {
    String msg = String.format("%s %s!", greetingProvider.getMessage(), who);

    return JSON.createObjectBuilder().add("message", msg).build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.tQLtt" title="原文 : This is the WebTarget needed to send a request to the second service at port 8081.">これは、ポート<code>8081</code>で別のサービスにリクエストを送信するために必要な<code>WebTarget</code>です。</span></li>
<li data-value="2"><span class="merged" id="all.1sm130" title="原文 : This is the new endpoint that will call the second service.">これは、2つ目のサービスを呼び出す新しいエンドポイントです。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoint and check the response:"
>curl -i http://localhost:8080/greet/outbound <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.RxuwD" title="原文 : The request went to the service on 8080, which then invoked the service at 8081 to get the greeting.">リクエストは<code>8080</code>のサービスに送信され、そこで応答メッセージを取得するために<code>8081</code>のサービスが呼び出されました。</span></li>
</ul>

<markup
lang="json"

>{
  "message": "Hello From MP-2 World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3MDSsa" title="原文 : Notice the greeting came from the second service.">グリーティングは2番目のサービスから発信されたものです。</span></li>
</ul>

<p><span class="merged" id="all.4Tkex9" title="原文 : Refresh the Jaeger UI trace listing page and notice that there is a trace across two services.">Jaeger UIトレース・リスト・ページをリフレッシュし、2つのサービスにトレースがあることを確認します。</span></p>


<div class="block-title"><span class="merged" id="all.4KFGiL" title="原文 : Tracing across multiple services detail view"><span>複数のサービスの詳細ビューにわたるトレース</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース" src="images/guides/12_tracing_detail_2_services.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.2tC87V.spl1" title="原文 : In the image above, you can see that the trace includes spans from two services.">上の図では、トレースに2つのサービスのスパンが含まれていることがわかります。</span> <span class="merged" id="all.2tC87V.spl2" title="原文 : You will notice there is a gap before the sixth span, which is a get operation.">6つ目のスパン(<code>get</code>操作)の前にギャップがあります。</span> <span class="merged" id="all.2tC87V.spl3" title="原文 : This is a one-time client initialization delay.">これは、ワンタイム・クライアント初期化の遅延です。</span> <span class="merged" id="all.2tC87V.spl4" title="原文 : Run the /outbound curl command again and look at the new trace to see that the delay no longer exists."><code>/outbound</code> curlコマンドを再度実行し、新しいトレースを調べて遅延が存在しないことを確認します。</span> </p>

<p><span class="merged" id="all.OvnG0" title="原文 : You can now stop your second service, it is no longer used in this guide.">これで、2つ目のサービスを停止できます。このガイドでは使用しません。</span></p>

</div>

</div>

</div>


<h2 id="_integration_with_kubernetes"><span class="merged" id="all.4PhaKc.1" title="原文 : Integration with Kubernetes">Kubernetesとの統合</span></h2>
<div class="section">
<p><span class="merged" id="all.4K2yK" title="原文 : The following example demonstrate how to use Jaeger from a Helidon application running in Kubernetes.">次の例では、Kubernetesで実行されているHelidonアプリケーションのJaegerの使用方法を示します。</span></p>

<markup
lang="bash"
title="Add the following line to <code>META-INF/microprofile-config.properties</code>:"
>tracing.host=jaeger</markup>

<markup
lang="bash"
title="Stop the application and build the docker image for your application:"
>docker build -t helidon-tracing-mp .</markup>


<h3 id="_deploy_jaeger_into_kubernetes"><span class="merged" id="all.2ejwi6" title="原文 : Deploy Jaeger into Kubernetes">JaegerをKubernetesにデプロイ</span></h3>
<div class="section">
<markup
lang="yaml"
title="Create the Kubernetes YAML specification, named <code>jaeger.yaml</code>, with the following contents:"
>apiVersion: v1
kind: Service
metadata:
  name: jaeger
spec:
  ports:
    - port: 16686
      protocol: TCP
  selector:
    app: jaeger
---
kind: Pod
apiVersion: v1
metadata:
  name: jaeger
  labels:
    app: jaeger
spec:
  containers:
    - name: jaeger
      image: jaegertracing/all-in-one
      imagePullPolicy: IfNotPresent
      ports:
        - containerPort: 16686</markup>

<markup
lang="bash"
title="Create the Jaeger pod and ClusterIP service:"
>kubectl apply -f ./jaeger.yaml</markup>

<markup
lang="bash"
title="Create a Jaeger external server and expose it on port 9142:"
>kubectl expose pod jaeger --name=jaeger-external --port=16687 --target-port=16686 --type=LoadBalancer <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2o5vKM" title="原文 : Create a service so that you can access the Jaeger UI.">Jaeger UIにアクセスできるようにサービスを作成します。</span></li>
</ul>

<p><span class="merged" id="all.3cxOeb.spl1" title="原文 : Navigate to http://localhost:16687/search to validate that you can access Jaeger running in Kubernetes."><a class="bare" href="http://localhost:16687/search" target="_blank">http://localhost:16687/search</a>にナビゲートして、Kubernetesで実行されているJaegerにアクセスできることをバリデートします。</span> <span class="merged" id="all.3cxOeb.spl2" title="原文 : It may take a few seconds before it is ready.">準備ができるまで数秒かかる場合があります。</span> </p>

</div>


<h3 id="_deploy_your_helidon_application_into_kubernetes"><span class="merged" id="all.1xATXz" title="原文 : Deploy Your Helidon Application into Kubernetes">HelidonアプリケーションのKubernetesへのデプロイ</span></h3>
<div class="section">
<markup
lang="yaml"
title="Create the Kubernetes YAML specification, named <code>tracing.yaml</code>, with the following contents:"
>kind: Service
apiVersion: v1
metadata:
  name: helidon-tracing <span class="conum" data-value="1" />
  labels:
    app: helidon-tracing
spec:
  type: NodePort
  selector:
    app: helidon-tracing
  ports:
    - port: 8080
      targetPort: 8080
      name: http
---
kind: Deployment
apiVersion: apps/v1
metadata:
  name: helidon-tracing
spec:
  replicas: 1 <span class="conum" data-value="2" />
  selector:
    matchLabels:
      app: helidon-tracing
  template:
    metadata:
      labels:
        app: helidon-tracing
        version: v1
    spec:
      containers:
        - name: helidon-tracing
          image: helidon-tracing-mp
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.3" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.3" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
</ul>

<markup
lang="bash"
title="Create and deploy the application into Kubernetes:"
>kubectl apply -f ./tracing.yaml</markup>

</div>


<h3 id="_access_your_application_and_the_jaeger_trace"><span class="merged" id="all.3jiNmC" title="原文 : Access Your Application and the Jaeger Trace">アプリケーションおよびJaegerトレースへのアクセス</span></h3>
<div class="section">
<markup
lang="bash"
title="Get the application service information:"
>kubectl get service/helidon-tracing</markup>

<markup
lang="bash"

>NAME             TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
helidon-tracing   NodePort   10.99.159.2   &lt;none&gt;        8080:31143/TCP   8s <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Q1f91.2" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>

<markup
lang="bash"
title="Verify the tracing endpoint using port <code>31143</code>, your port will likely be different:"
>curl http://localhost:31143/greet</markup>

<markup
lang="json"

>{
  "message": "Hello World!"
}</markup>

<p><span class="merged" id="all.2Z9PEu" title="原文 : Access the Jaeger UI at http://localhost:16687/search and click on the refresh icon to see the trace that was just created."><a class="bare" href="http://localhost:16687/search" target="_blank">http://localhost:16687/search</a>のJaeger UIにアクセスし、リフレッシュ・アイコンをクリックして、作成したトレースを表示します。</span></p>

</div>


<h3 id="_cleanup"><span class="merged" id="all.6lMSz"  title="原文:: Cleanup">クリーンアップ</span></h3>
<div class="section">
<p><span class="merged" id="all.HBnIV.2" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

<markup
lang="bash"
title="Delete the Kubernetes resources:"
>kubectl delete -f ./jaeger.yaml
kubectl delete -f ./tracing.yaml
kubectl delete service jaeger-external
docker rm -f jaeger</markup>

</div>

</div>


<h2 id="_summary"><span class="merged" id="all.1nTCR.6"  title="原文:: Summary">サマリー</span></h2>
<div class="section">
<p><span class="merged" id="all.3KjQff.spl1" title="原文 : This guide has demonstrated how to use the Helidon MP tracing feature with Jaeger.">このガイドでは、JaegerでHelidon MPトレース機能を使用する方法をデモンストレーションしています。</span> <span class="merged" id="all.3KjQff.spl2" title="原文 : You have learned to do the following:">次のことを学習しました:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4BVMNe" title="原文 : Enable tracing within a service">サービス内でのトレースの有効化</span></p>

</li>
<li>
<p><span class="merged" id="all.33nS0c" title="原文 : Use tracing with JAX-RS and CDI beans">JAX-RSおよびCDI beanでのトレースの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.4cBxj4" title="原文 : Use the Jaeger UI">Jaeger UIの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.4CqrM5" title="原文 : Use tracing across multiple services">複数のサービスにわたるトレースの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.1csFZR" title="原文 : Integrate tracing with Kubernetes">トレースとKubernetesの統合</span></p>

</li>
</ul>

<p><span class="merged" id="all.UfWha.4" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4cFOIZ" title="原文 : MicroProfile OpenTracing specification"><a href="https://download.eclipse.org/microprofile/microprofile-opentracing-3.0/microprofile-opentracing-spec-3.0.html" target="_blank">MicroProfile OpenTracing仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3LIPX2" title="原文 : MicroProfile OpenTracing Javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-opentracing-3.0/apidocs" target="_blank">MicroProfile OpenTracing Javadoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2mjhzP.2" title="原文 : Helidon Javadoc"><a href="/apidocs/index.html?overview-summary.html" target="_blank">Helidon Javadoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
