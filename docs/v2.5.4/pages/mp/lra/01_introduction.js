<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.16"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3cNV74" title="原文 : To enable Long Running Actions add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Long Running Actionを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.microprofile.lra&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-microprofile-lra&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;!-- Support for Narayana coordinator --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.lra&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-lra-coordinator-narayana-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_long_running_actions_lra"><span class="merged" id="all.15Rtgm" title="原文 : Long Running Actions (LRA)">Long Running Actions (LRA)</span></h2>
<div class="section">
<p><span class="merged" id="all.3yBaCV.spl1" title="原文 : Distributed transactions for microservices are known as SAGA design patterns and are defined by the Micro Profile Long Running Actions specification.">マイクロサービスの分散トランザクションはSAGA設計パターンと呼ばれ、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/microprofile-lra-spec-1.0-RC3.html" id="" target="_blank" >「マイクロ長期実行処理仕様」</a>によって定義されます。</span> <span class="merged" id="all.3yBaCV.spl2" title="原文 : Unlike well known XA protocol, LRA is asynchronous and therefore much more scalable.">既知のXAプロトコルとは異なり、LRAは非同期であるため、よりスケーラブルです。</span> <span class="merged" id="all.3yBaCV.spl3" title="原文 : Every LRA JAX-RS resource (participant) defines endpoints to be invoked when transaction needs to be completed or compensated.">すべてのLRA JAX-RSリソース(<router-link to="/mp/lra/03_participant">「参加者」</router-link>)は、トランザクションを<router-link :to="{path: '/mp/lra/03_participant', hash: '#complete-participant-method'}">「完了」</router-link>または<router-link :to="{path: '/mp/lra/03_participant', hash: '#compensate-participant-method'}">「補償」</router-link>にする必要がある場合に起動されるエンドポイントを定義します。</span> </p>

<p><span class="merged" id="all.3EWdKf.spl1" title="原文 : LRA transactions need to be coordinated over REST API by the LRA coordinator.">LRAトランザクションは、LRAコーディネータによってREST APIを介して調整する必要があります。</span> <span class="merged" id="all.3EWdKf.spl2" title="原文 : Coordinator keeps track of all transactions and calls the @Compensate or @Complete endpoints for all participants involved in the particular transaction."><router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>は、すべてのトランザクションを追跡し、特定のトランザクションに関与するすべての参加者に対して@Compensateまたは@Completeエンドポイントをコールします。</span> <span class="merged" id="all.3EWdKf.spl3" title="原文 : LRA transaction is first started, then joined by participant.">LRAトランザクションが最初に開始され、<router-link to="/mp/lra/03_participant">「参加者」</router-link>によって結合されます。</span> <span class="merged" id="all.3EWdKf.spl4" title="原文 : Participant reports the successful finish of transaction by calling complete.">参加者は、完了をコールしてトランザクションの正常終了をレポートします。</span> <span class="merged" id="all.3EWdKf.spl5" title="原文 : Coordinator then calls the JAX-RS complete endpoint that was registered during the join of each participant.">次に、コーディネータは、各<router-link to="/mp/lra/03_participant">「参加者」</router-link>の結合中に登録されたJAX-RS <router-link :to="{path: '/mp/lra/03_participant', hash: '#complete-participant-method'}">「完了」</router-link>エンドポイントをコールします。</span> <span class="merged" id="all.3EWdKf.spl6" title="原文 : As the completed or compensated participants don&rsquo;t have to be on same instance, the whole architecture is highly scalable.">完了または報酬支払済の参加者が同じインスタンス上に存在する必要がないため、アーキテクチャ全体が非常にスケーラブルです。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="完了" src="./images/lra/lra-complete-lb.svg" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2bh9Ge.spl1" title="原文 : In case of error during the LRA transaction, participant reports cancel of LRA to coordinator.">LRAトランザクション中にエラーが発生した場合、参加者はLRAの取消をコーディネータにレポートします。</span> <span class="merged" id="all.2bh9Ge.spl2" title="原文 : Coordinator calls compensate on all the joined participants."><router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>コールは、結合されたすべての参加者に対して補正します。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="取消" src="./images/lra/lra-compensate-lb-error.svg" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2woVsV" title="原文 : When participant joins the LRA with timeout defined @LRA(value = LRA.Type.REQUIRES_NEW, timeLimit = 5, timeUnit = ChronoUnit.MINUTES), coordinator compensate if timeout occurs before close is reported by participants.">参加者がタイムアウト定義の<code>@LRA(value = LRA.Type.REQUIRES_NEW, timeLimit = 5, timeUnit = ChronoUnit.MINUTES)</code>を使用してLRAに参加すると、クローズ前にタイムアウトが発生した場合にコーディネータが参加者にレポートされます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="タイムアウト" src="./images/lra/lra-compensate-lb-timeout.svg" /> </v-card-text> </v-card>


<h3 id="_example"><span class="merged" id="all.2xA7W7"  title="原文:: Example">例</span></h3>
<div class="section">
<p><span class="merged" id="all.2KAcXK.spl1" title="原文 : The following example shows how a simple LRA participant starts and joins a transaction after calling the &apos;/start-example&apos; resource.">次の例は、単純なLRA参加者が'/start-example'リソースをコールした後にトランザクションを開始および結合する方法を示しています。</span> <span class="merged" id="all.2KAcXK.spl2" title="原文 : When startExample method finishes successfully, close is reported to coordinator and /complete-example endpoint is called by coordinator to confirm successful closure of the LRA.">startExampleメソッドが正常に終了すると、クローズが<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>にレポートされ、<code>/complete-example</code>エンドポイントがコーディネータによってコールされて、LRAの正常なクローズが確認されます。</span> </p>

<p><span class="merged" id="all.PEDoX" title="原文 : If an exception occurs during startExample method execution, coordinator receives cancel call and /compensate-example is called by coordinator to compensate for cancelled LRA transaction.">startExampleメソッドの実行中に例外が発生した場合、コーディネータは取消コールを受信し、<code>/compensate-example</code>はコーディネータによってコールされ、取り消されたLRAトランザクションを補正します。</span></p>

<markup
lang="java"
title="Example of simple LRA participant"
>@PUT
@LRA(LRA.Type.REQUIRES_NEW) <span class="conum" data-value="1" />
@Path("start-example")
public Response startExample(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraId, <span class="conum" data-value="2" />
                             String data) {
    if (data.contains("BOOM")) {
        throw new RuntimeException("BOOM &#128165;"); <span class="conum" data-value="3" />
    }

    LOGGER.info("Data " + data + " processed &#127981;");
    return Response.ok().build(); <span class="conum" data-value="4" />
}

@PUT
@Complete <span class="conum" data-value="5" />
@Path("complete-example")
public Response completeExample(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraId) {
    LOGGER.log(Level.INFO, "LRA id: {0} completed &#127881;", lraId);
    return LRAResponse.completed();
}

@PUT
@Compensate <span class="conum" data-value="6" />
@Path("compensate-example")
public Response compensateExample(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraId) {
    LOGGER.log(Level.SEVERE, "LRA id: {0} compensated &#129466;", lraId);
    return LRAResponse.compensated();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.AKG4w" title="原文 : This JAX-RS PUT method will start new LRA transactions and join it before method body gets executed">このJAX-RS PUTメソッドは、メソッド本文が実行される前に、新しいLRAトランザクションを開始して結合</span></li>
<li data-value="2"><span class="merged" id="all.3bciEm" title="原文 : LRA id assigned by coordinator to this LRA transaction">コーディネータがこのLRAトランザクションに割り当てたLRA id</span></li>
<li data-value="3"><span class="merged" id="all.1mnZyd" title="原文 : When method execution finishes exceptionally, cancel signal for this particular LRA is sent to coordinator">メソッドの実行が例外的に終了すると、この特定のLRAの取消しシグナルがコーディネータに送信されます</span></li>
<li data-value="4"><span class="merged" id="all.2Oij82" title="原文 : When method execution finishes successfully, complete signal for this particular LRA is sent to coordinator">メソッドの実行が正常に終了すると、この特定のLRAの完全なシグナルがコーディネータに送信されます</span></li>
<li data-value="5"><span class="merged" id="all.rBSAc" title="原文 : Method which will be called by coordinator when LRA is completed">LRAの完了時にコーディネータによってコールされるメソッド</span></li>
<li data-value="6"><span class="merged" id="all.3iWu7h" title="原文 : Method which will be called by coordinator when LRA is canceled">LRAが取り消されたときにコーディネータによってコールされるメソッド</span></li>
</ul>
</div>

<h3 id="_configuration"><span class="merged" id="all.Pfqvy.2"  title="原文:: Configuration">構成</span></h3>
<div class="section">
<markup
lang="yaml"
title="Example of lra configuration"
>mp.lra:
  coordinator.url: http://localhost:8070/lra-coordinator <span class="conum" data-value="1" />
  propagation.active: true <span class="conum" data-value="2" />
  participant.url: http://coordinator.visibe.host:80/awsomeapp <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.30AMC5" title="原文 : Url of coordinator">コーディネータのURL</span></li>
<li data-value="2"><span class="merged" id="all.2EA6g9" title="原文 : Propagate LRA headers LRA_HTTP_CONTEXT_HEADER and LRA_HTTP_PARENT_CONTEXT_HEADER through non-LRA endpoints">LRA以外のエンドポイントを介したLRAヘッダーLRA_HTTP_CONTEXT_HEADERおよびLRA_HTTP_PARENT_CONTEXT_HEADERの伝播</span></li>
<li data-value="3"><span class="merged" id="all.288Vx1" title="原文 : Url of the LRA enabled service overrides standard base uri, so coordinator can call load-balancer instead of the service">LRA対応サービスのURLは標準ベースURIをオーバーライドするため、コーディネータはサービスではなくロード・バランサをコールできます</span></li>
</ul>
<p><span class="merged" id="all.1vv1v0" title="原文 : For more information continue to Micro Profile Long Running Actions specification.">詳細については、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/microprofile-lra-spec-1.0-RC3.html" id="" target="_blank" >「マイクロ長期実行処理仕様」</a>を参照してください。</span></p>

</div>
</div>
</doc-view>
