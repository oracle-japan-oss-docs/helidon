<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4MmRUd" title="原文 : Helidon with JBatch Guide">JBatchガイド付きHelidon</span></dt>
<dd slot="desc"><p><span class="merged" id="all.46r36b" title="原文 : This guide describes how Helidon and Jakarta Batch (JBatch) can be used together to execute batch jobs in environments that do not fully support EE environments.">このガイドでは、HelidonとJakarta Batch (JBatch)を一緒に使用して、EE環境を完全にサポートしていない環境でバッチ・ジョブを実行する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.5"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.3yeiO0.1" title="原文 : For this 20 minute tutorial, you will need the following:">この20分間のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3J4a7U.3" title="原文 : A Helidon MP Application">Helidon MPアプリケーション</span></td>
<td class=""><span class="merged" id="all.13muNj.3" title="原文 : You can use your own application or use the Helidon MP Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/mp/guides/quickstart">「Helidon MPクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2sRt9f.5" title="原文 : Java&#160;SE&#160;17 (Open&#160;JDK&#160;17)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java&#160;SE&#160;17</a> (<a href="http://jdk.java.net" target="_blank">Open&#160;JDK&#160;17</a>)</span></td>
<td class=""><span class="merged" id="all.3aBChT.5" title="原文 : Helidon requires Java 17+.">HelidonにはJava 17以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DYqqk.6" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.5" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.5"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.5" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.5"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.5" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
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
export JAVA_HOME=`/usr/libexec/java_home -v 17`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-17</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2ckaj5" title="原文 : This guide assumes you are familiar with the Jakarta Batch project specification from the Eclipse Foundation project site.">このガイドでは、Eclipse Foundationプロジェクト・サイトの<a href="https://projects.eclipse.org/projects/ee4j.batch" target="_blank">「Jakartaバッチ・プロジェクト仕様」</a>について理解していることを前提としています。</span></p>
</div>

</div>


<h2 id="_dependencies"><span class="merged" id="all.4R2wMP"  title="原文:: Dependencies">依存関係</span></h2>
<div class="section">
<p><span class="merged" id="all.2Mw1dw" title="原文 : For this example, add the IBM JBatch implementation and the derby embedded DB (since JPA and JPA are not available by default) dependencies to the testing module:">この例では、IBM JBatch実装および<code>derby</code>埋込みDB (JPAおよびJPAがデフォルトで使用できないため)依存関係をテスト・モジュールに追加します:</span></p>

<markup
lang="xml"
title="Maven dependencies"
>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.imb.jbatch&lt;/groupId&gt;
        &lt;artifactId&gt;com.ibm.jbatch.container&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.apache.derby&lt;/groupId&gt;
        &lt;artifactId&gt;derby&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>

</div>


<h2 id="_add_sample_jobs"><span class="merged" id="all.3cd8Wx" title="原文 : Add Sample Jobs">サンプル・ジョブの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.2p8fFJ" title="原文 : In this demonstration you will first create sample input and output records and then the following jobs:">このデモンストレーションでは、最初にサンプル入力レコードと出力レコードを作成してから、次のジョブを作成します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3xvWxq"  title="原文: MyItemReader"><code>MyItemReader</code></span></p>

</li>
<li>
<p><span class="merged" id="all.20KmMi"  title="原文: MyItemProcessor"><code>MyItemProcessor</code></span></p>

</li>
<li>
<p><span class="merged" id="all.ajtRD"  title="原文: MyItemWriter"><code>MyItemWriter</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.js4Lf" title="原文 : Finally you will create MyBatchlet to demonstrate all possible usages of JBatch.">最後に、<code>MyBatchlet</code>を作成して、JBatchの使用可能なすべての内容を示します。</span></p>


<h3 id="_1_create_a_unit_of_input_information"><span class="merged" id="all.2mViVA" title="原文 : 1. Create a unit of input information">1. 入力情報の単位の作成</span></h3>
<div class="section">
<markup
lang="java"
title="MyInputRecord"
>public class MyInputRecord {
    private int id;


    public MyInputRecord(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "MyInputRecord: " + id;
    }
}</markup>


<h4 id="_2_create_a_unit_of_output_information"><span class="merged" id="all.q3rs" title="原文 : 2. Create a unit of output information">2.出力情報の単位の作成</span></h4>
<div class="section">
<markup
lang="java"
title="MyOutputRecord"
>public class MyOutputRecord {

    private int id;

    public MyOutputRecord(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "MyOutputRecord: " + id;
    }
}</markup>

</div>


<h4 id="_3_create_myitemreader_to_extend_abstractitemreader"><span class="merged" id="all.1yCrhm" title="原文 : 3. Create MyItemReader to extend AbstractItemReader">3. <code>MyItemReader</code>を作成して<code>AbstractItemReader</code>を拡張</span></h4>
<div class="section">
<p><span class="merged" id="all.1es5wW" title="原文 : MyItemReader should look like this:"><code>MyItemReader</code>は次のようになります:</span></p>

<markup
lang="java"
title="MyItemReader"
>public class MyItemReader extends AbstractItemReader {

    private final StringTokenizer tokens;

    public MyItemReader() {
        tokens = new StringTokenizer("1,2,3,4,5,6,7,8,9,10", ",");
    }

    /**
     * Perform read Item.
     * @return Stage result.
     */
    @Override
    public MyInputRecord readItem() {
        if (tokens.hasMoreTokens()) {
            return new MyInputRecord(Integer.valueOf(tokens.nextToken()));
        }
        return null;
    }
}</markup>

</div>


<h4 id="_4_create_myitemprocessor_to_implement_itemprocessor"><span class="merged" id="all.1atdyD" title="原文 : 4. Create MyItemProcessor to implement ItemProcessor">4. <code>ItemProcessor</code>を実装するための<code>MyItemProcessor</code>の作成</span></h4>
<div class="section">
<p><span class="merged" id="all.EuRaS" title="原文 : The MyItemProcessor will perform some simple operations:"><code>MyItemProcessor</code>は、いくつかの単純な操作を実行します:</span></p>

<markup
lang="java"
title="MyItemProcessor"
>public class MyItemProcessor implements ItemProcessor {

    @Override
    public MyOutputRecord processItem(Object t) {
        System.out.println("processItem: " + t);

        return (((MyInputRecord) t).getId() % 2 == 0) ? null : new MyOutputRecord(((MyInputRecord) t).getId() * 2);
    }
}</markup>

</div>


<h4 id="_5_create_myitemwriter_to_extend_abstractitemwriter"><span class="merged" id="all.31DGsr" title="原文 : 5. Create MyItemWriter to extend AbstractItemWriter">5. <code>MyItemWriter</code>を作成して<code>AbstractItemWriter</code>を拡張</span></h4>
<div class="section">
<p><span class="merged" id="all.1BUs57" title="原文 : MyItemWriter prints the result:"><code>MyItemWriter</code>は結果を出力します:</span></p>

<markup
lang="java"
title="MyItemWriter"
>public class MyItemWriter extends AbstractItemWriter {

    @Override
    public void writeItems(List list) {
        System.out.println("writeItems: " + list);
    }
}</markup>

</div>


<h4 id="_6_create_mybatchlet_to_extend_abstractbatchlet"><span class="merged" id="all.48u0Xy" title="原文 : 6. Create MyBatchlet to extend AbstractBatchlet">6. <code>MyBatchlet</code>を作成して<code>AbstractBatchlet</code>を拡張</span></h4>
<div class="section">
<p><span class="merged" id="all.17IlhN" title="原文 : MyBatchlet simply completes the process:"><code>MyBatchlet</code>は、プロセスを完了します:</span></p>

<markup
lang="java"
title="MyBatchlet"
>public class MyBatchlet extends AbstractBatchlet {

    @Override
    public String process() {
        System.out.println("Running inside a batchlet");

        return "COMPLETED";
    }

}</markup>

</div>

</div>

</div>


<h2 id="_update_the_descriptor_file"><span class="merged" id="all.28QddV" title="原文 : Update the Descriptor File">記述子ファイルの更新</span></h2>
<div class="section">
<p><span class="merged" id="all.3DUws1" title="原文 : Add this code to your job descriptor.xml file:">このコードをジョブdescriptor.xmlファイルに追加します:</span></p>

<markup
lang="xml"
title="Updated descriptor file"
>&lt;job id="myJob" xmlns="https://jakarta.ee/xml/ns/jakartaee"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/jobXML_2_0.xsd"
                version="2.0"&gt;
    &lt;step id="step1" next="step2"&gt;
        &lt;chunk item-count="3"&gt; <span class="conum" data-value="1" />
            &lt;reader ref="io.helidon.jbatch.example.jobs.MyItemReader"/&gt;
            &lt;processor ref="io.helidon.jbatch.example.jobs.MyItemProcessor"/&gt;
            &lt;writer ref="io.helidon.jbatch.example.jobs.MyItemWriter"/&gt;
        &lt;/chunk&gt;
    &lt;/step&gt;
    &lt;step id="step2"&gt; <span class="conum" data-value="2" />
        &lt;batchlet ref="io.helidon.jbatch.example.jobs.MyBatchlet"/&gt;
    &lt;/step&gt;
&lt;/job&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1WINZH" title="原文 : The first step of the job includes MyItemReader, MyItemProcessor and MyItemWriter.">ジョブの最初のステップには、<code>MyItemReader</code>、<code>MyItemProcessor</code>および<code>MyItemWriter</code>が含まれます。</span></li>
<li data-value="2"><span class="merged" id="all.3aLU9K" title="原文 : The second step of the job includes MyBatchlet.">ジョブの2番目のステップには、<code>MyBatchlet</code>が含まれます。</span></li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1eDmzn" title="原文 : You must specify the fully qualified names in the ref properties, like &ldquo;io.helidon.jbatch.example.jobs.MyItemReader&rdquo;, otherwise it will not work."><code>ref</code>プロパティ(io.helidon.jbatch.example.jobs.MyItemReaderなど)に完全修飾名を指定する必要があります。指定しないと機能しません。</span></p>
</div>

</div>


<h2 id="_create_an_endpoint"><span class="merged" id="all.1FAkH0" title="原文 : Create an Endpoint">エンドポイントの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.1WI1Qx" title="原文 : Create a small endpoint to activate the job:">ジョブをアクティブ化するための小さなエンドポイントを作成します:</span></p>

<markup
lang="java"
title="new endpoint"
>@Path("/batch")
@ApplicationScoped
public class BatchResource {
    private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

    private JobOperator jobOperator;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonObject executeBatch() {

        BatchSPIManager batchSPIManager = BatchSPIManager.getInstance();
        batchSPIManager.registerPlatformMode(BatchSPIManager.PlatformMode.SE);
        batchSPIManager.registerExecutorServiceProvider(new HelidonExecutorServiceProvider());

        jobOperator = getJobOperator();
        Long executionId = jobOperator.start("myJob", new Properties());

        return JSON.createObjectBuilder()
                .add("Started a job with Execution ID: ", executionId)
                .build();
    }


    @GET
    @Path("/status/{execution-id}")
    public JsonObject status(@PathParam("execution-id") Long executionId){
        JobExecution jobExecution = jobOperator.getJobExecution(executionId);

        List&lt;StepExecution&gt; stepExecutions = jobOperator.getStepExecutions(executionId);
        List&lt;String&gt; executedSteps = new ArrayList&lt;&gt;();
        for (StepExecution stepExecution : stepExecutions) {
            executedSteps.add(stepExecution.getStepName());
        }

        return JSON.createObjectBuilder()
                .add("Steps executed", Arrays.toString(executedSteps.toArray()))
                .add("Status", jobExecution.getBatchStatus().toString())
                .build();
    }
}</markup>

<p><span class="merged" id="all.4SmKRX.spl1" title="原文 : Helidon specifies to JBatch that it should run in Standalone (SE) mode.">Helidonは、スタンドアロン(SE)モードで実行する必要があるJBatchを指定します。</span> <span class="merged" id="all.4SmKRX.spl2" title="原文 : It will also register the HelidonExecutorServiceProvider which is actually relatively small.">また、実際には比較的小さい<code>HelidonExecutorServiceProvider</code>も登録されます。</span> <span class="merged" id="all.4SmKRX.spl3" title="原文 : For our example we need something really small, like a FixedTheadPool with 2 threads.">この例では、2つのスレッドを持つ<code>FixedTheadPool</code>など、非常に小さいものが必要です。</span> <span class="merged" id="all.4SmKRX.spl4" title="原文 : This provider is used to tell our JBatch engine exactly which ExecutorService to use.">このプロバイダは、使用するExecutorServiceを正確にJBatchエンジンに通知するために使用されます。</span> </p>

<markup
lang="java"
title="HelidonExecutorServiceProvider"
>public class HelidonExecutorServiceProvider implements ExecutorServiceProvider {
    @Override
    public ExecutorService getExecutorService() {
        return ThreadPoolSupplier.builder().corePoolSize(2).build().get();
    }
}</markup>

</div>


<h2 id="_run_the_code"><span class="merged" id="all.2lKsuQ" title="原文 : Run the Code">コードの実行</span></h2>
<div class="section">
<markup
lang="bash"

>mvn package
java -jar target/helidon-jbatch-example.jar</markup>

</div>


<h2 id="_call_the_endpoint"><span class="merged" id="all.1oMDpg" title="原文 : Call the Endpoint">エンドポイントのコール</span></h2>
<div class="section">
<markup
lang="bash"

>curl -X GET http://localhost:8080/batch</markup>

<p><span class="merged" id="all.4aTPSL" title="原文 : You should receive the following log:">次のログを受け取ります:</span></p>

<markup
lang="bash"

>processItem: MyInputRecord: 1
processItem: MyInputRecord: 2
processItem: MyInputRecord: 3
writeItems: [MyOutputRecord: 2, MyOutputRecord: 6]
processItem: MyInputRecord: 4
processItem: MyInputRecord: 5
processItem: MyInputRecord: 6
writeItems: [MyOutputRecord: 10]
processItem: MyInputRecord: 7
processItem: MyInputRecord: 8
processItem: MyInputRecord: 9
writeItems: [MyOutputRecord: 14, MyOutputRecord: 18]
processItem: MyInputRecord: 10
Running inside a batchlet</markup>

<p><span class="merged" id="all.1nGPeb" title="原文 : and the following result:">次の結果:</span></p>

<markup
lang="bash"

>{"Started a job with Execution ID: ":1}</markup>

<p><span class="merged" id="all.1ICDmS" title="原文 : This indicates that the batch job was called and executed successfully.">これは、バッチ・ジョブがコールされて正常に実行されたことを示します。</span></p>


<h3 id="_check_the_status"><span class="merged" id="all.2LlE7c" title="原文 : Check the Status">ステータスのチェック</span></h3>
<div class="section">
<markup
lang="bash"

>curl -X GET http://localhost:8080/batch/status/1</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2RDe7B" title="原文 : In this example the job ID is 1, but make sure that you enter your specific job ID in the string.">この例では、ジョブIDは1ですが、文字列に特定のジョブIDを入力してください。</span></p>
</div>

<p><span class="merged" id="all.2yWagj" title="原文 : The results should look something like this:">結果は次のようになります:</span></p>

<markup
lang="bash"

>{"Steps executed":"[step1, step2]","Status":"COMPLETED"}</markup>

</div>

</div>


<h2 id="_summary"><span class="merged" id="all.1nTCR.2"  title="原文:: Summary">サマリー</span></h2>
<div class="section">
<p><span class="merged" id="all.3K7xM9" title="原文 : This guide demonstrated how to use Helidon with JBatch even though Helidon is not a full EE container.">このガイドでは、Helidonが完全なEEコンテナではない場合でも、JBatchでHelidonを使用する方法を示します。</span></p>

</div>

</doc-view>
