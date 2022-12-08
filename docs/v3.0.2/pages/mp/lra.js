<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.16"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.14" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.13" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.10" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.8" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.12" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.12" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.7" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.7" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.14"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1SgW6J.spl1" title="原文 : Distributed transactions for microservices are known as SAGA design patterns and are defined by the {microprofile-lra-spec-url}[MicroProfile Long Running Actions specification].">マイクロサービスの分散トランザクションはSAGA設計パターンと呼ばれ、 {microprofile-lra-spec-url}[MicroProfile Long Running Actions specification]で定義されます。</span> <span class="merged" id="all.1SgW6J.spl2" title="原文 : Unlike well known XA protocol, LRA is asynchronous and therefore much more scalable.">既知のXAプロトコルとは異なり、LRAは非同期であるため、よりスケーラブルです。</span> <span class="merged" id="all.1SgW6J.spl3" title="原文 : Every LRA JAX-RS resource (participant) defines endpoints to be invoked when transaction needs to be completed or compensated.">すべてのLRA JAX-RSリソース(<router-link @click.native="this.scrollFix('#_participant')" to="#_participant">「参加者」</router-link>)は、トランザクションを<em>「完了」</em>または<em>「補償」</em>にする必要がある場合に起動されるエンドポイントを定義します。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.15"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.38PYqq" title="原文 : To enable Long Running Actions add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Long Running Actionを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

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


<h2 id="_usage"><span class="merged" id="all.JUOSC.10"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.2X2xVO.spl1" title="原文 : The LRA transactions need to be coordinated over REST API by the LRA coordinator.">LRAトランザクションは、LRAコーディネータによってREST APIを介して調整する必要があります。</span> <span class="merged" id="all.2X2xVO.spl2" title="原文 : Coordinator keeps track of all transactions and calls the @Compensate or @Complete endpoints for all participants involved in the particular transaction."><router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネート」</router-link>は、すべてのトランザクションを追跡し、特定のトランザクションに関与するすべての参加者に対して<code>@Compensate</code>または<code>@Complete</code>エンドポイントをコールします。</span> <span class="merged" id="all.2X2xVO.spl3" title="原文 : LRA transaction is first started, then joined by participant.">LRAトランザクションが最初に開始され、<router-link @click.native="this.scrollFix('#_participant')" to="#_participant">「参加者」</router-link>によって結合されます。</span> <span class="merged" id="all.2X2xVO.spl4" title="原文 : The participant reports the successful finish of the transaction by calling it complete.">参加者は、トランザクションの完了をコールして、トランザクションの正常終了をレポートします。</span> <span class="merged" id="all.2X2xVO.spl5" title="原文 : The coordinator then calls the JAX-RS complete endpoint that was registered during the join of each participant.">次に、コーディネータは、各<router-link @click.native="this.scrollFix('#_participant')" to="#_participant">「参加者」</router-link>の結合中に登録されたJAX-RS <em>「完了」</em>エンドポイントをコールします。</span> <span class="merged" id="all.2X2xVO.spl6" title="原文 : As the completed or compensated participants don&rsquo;t have to be on same instance, the whole architecture is highly scalable.">完了または報酬支払済の参加者が同じインスタンス上に存在する必要がないため、アーキテクチャ全体が非常にスケーラブルです。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="完了" src="./images/lra/lra-complete-lb.svg" /> </v-card-text> </v-card>


<p><span class="merged" id="all.3hJLfX.spl1" title="原文 : If an error occurs during the LRA transaction, the participant reports a cancellation of LRA to the coordinator.">LRAトランザクション中にエラーが発生した場合、参加者はLRAの取消をコーディネータにレポートします。</span> <span class="merged" id="all.3hJLfX.spl2" title="原文 : Coordinator calls compensate on all the joined participants."><router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>コールは、結合されたすべての参加者に対して補正します。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="取消" src="./images/lra/lra-compensate-lb-error.svg" /> </v-card-text> </v-card>


<p><span class="merged" id="all.1uchIw" title="原文 : When a participant joins the LRA with timeout defined @LRA(value = LRA.Type.REQUIRES_NEW, timeLimit = 5, timeUnit = ChronoUnit.MINUTES), the coordinator compensates if the timeout occurred before the close is reported by the participants.">参加者が<code>@LRA(value = LRA.Type.REQUIRES_NEW, timeLimit = 5, timeUnit = ChronoUnit.MINUTES)</code>というタイムアウトが定義されたLRAに参加すると、クローズ前に発生したタイムアウトが参加者によってレポートされるかどうかがコーディネータによって補正されます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="タイムアウト" src="./images/lra/lra-compensate-lb-timeout.svg" /> </v-card-text> </v-card>


</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.8"  title="原文:: API">API</span></h2>
<div class="section">

<h3 id="_participant"><span class="merged" id="all.1Tz6Wc"  title="原文:: Participant">参加者</span></h3>
<div class="section">
<p><span class="merged" id="all.1pXC1h" title="原文 : The Participant, or Compensator, is an LRA resource with at least one of the JAX-RS(or non-JAX-RS) methods annotated with @Compensate or @AfterLRA.">参加者(補償者)は、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Compensate.html" target="_blank">@Compensate</a>または<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/AfterLRA.html" target="_blank">@AfterLRA</a>で注釈が付けられたJAX-RS(または非JAX-RS)メソッドの少なくとも1つを含むLRAリソースです。</span></p>

</div>


<h3 id="lra-method"><span class="merged" id="all.1McJfB" title="原文 : @LRA">@LRA</span></h3>
<div class="section">
<p><span class="merged" id="all.41r7rF"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html" target="_blank"><sub>javadoc</sub></a></span></p>

<p><span class="merged" id="all.41WAyZ" title="原文 : Marks JAX-RS method which should run in LRA context and needs to be accompanied by at least minimal set of mandatory participant methods(Compensate or AfterLRA).">LRAコンテキストで実行する必要があるJAX-RSメソッドをマークし、少なくとも必須参加者メソッド(<router-link @click.native="this.scrollFix('#compensate-participant-method')" to="#compensate-participant-method">補償</router-link>または<router-link @click.native="this.scrollFix('#after-participant-method')" to="#after-participant-method">AfterLRA</router-link>)のセットを伴う必要があります。</span></p>

<p><span class="merged" id="all.2vPjmD" title="原文 : LRA options:">LRAオプション:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1bqCfQ"  title="原文:: value"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#value--" target="_blank">value</a></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.WAqAJ" title="原文 : REQUIRED join incoming LRA or create and join new"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#REQUIRED" target="_blank">REQUIRED</a> 受信LRAの結合または新規作成と結合</span></p>

</li>
<li>
<p><span class="merged" id="all.3RP3No" title="原文 : REQUIRES_NEW create and join new LRA"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#REQUIRES_NEW" target="_blank">REQUIRES_NEW</a> 新規LRAの作成および結合</span></p>

</li>
<li>
<p><span class="merged" id="all.1k3DpF" title="原文 : MANDATORY join incoming LRA or fail"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#MANDATORY" target="_blank">MANDATORY</a> 受信LRAまたは失敗の結合</span></p>

</li>
<li>
<p><span class="merged" id="all.1iyP3v" title="原文 : SUPPORTS join incoming LRA or continue outside LRA context"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#SUPPORTS" target="_blank">SUPPORTS</a> 受信LRAを結合するか、LRAコンテキスト外で続行</span></p>

</li>
<li>
<p><span class="merged" id="all.3NK6I4" title="原文 : NOT_SUPPORTED always continue outside LRA context"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#NOT_SUPPORTED" target="_blank">NOT_SUPPORTED</a> 常にLRAコンテキスト外で続行</span></p>

</li>
<li>
<p><span class="merged" id="all.2Slbjc" title="原文 : NEVER Fail with 412 if executed in LRA context"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#NEVER" target="_blank">NEVER</a> LRAコンテキストで実行された場合、412で失敗</span></p>

</li>
<li>
<p><span class="merged" id="all.8sPOm" title="原文 : NESTED create and join new LRA nested in the incoming LRA context"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#NESTED" target="_blank">NESTED</a> 受信LRAコンテキストにネストされた新しいLRAの作成および結合</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.1vNFle" title="原文 : timeLimit max time limit before LRA gets cancelled automatically by coordinator"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#timeLimit--" target="_blank">timeLimit</a> <router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>によってLRAが自動的に取り消されるまでの最大時間制限</span></p>

</li>
<li>
<p><span class="merged" id="all.1BxHGB" title="原文 : timeUnit time unit if the timeLimit value"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#timeUnit--" target="_blank">timeUnit</a> 時間単位(timeLimit値の場合)</span></p>

</li>
<li>
<p><span class="merged" id="all.YCyi7" title="原文 : end when false LRA is not closed after successful method execution"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#end--" target="_blank">end</a> メソッドの実行が成功した後にfalse LRAがクローズされないとき</span></p>

</li>
<li>
<p><span class="merged" id="all.3qMx3s" title="原文 : cancelOn which HTTP response codes of the method causes LRA to cancel"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#cancelOn--" target="_blank">cancelOn</a> メソッドのHTTPレスポンス・コードによってLRAが取り消される</span></p>

</li>
<li>
<p><span class="merged" id="all.1qUEMu" title="原文 : cancelOnFamily which family of HTTP response codes causes LRA to cancel"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#cancelOnFamily--" target="_blank">cancelOnFamily</a> HTTPレスポンス・コードのファミリによってLRAが取り消される</span></p>

</li>
</ul>

<p><span class="merged" id="all.713xJ"  title="原文:: Method parameters:">メソッド・パラメータ:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4KSYeU" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - ID of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" target="_blank">LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
</ul>

<markup
lang="java"

>@PUT
@LRA(LRA.Type.REQUIRES_NEW, timeLimit = 500, timeUnit = ChronoUnit.MILLIS)
@Path("start-example")
public Response startLra(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraId, String data)</markup>

</div>


<h3 id="compensate-participant-method"><span class="merged" id="all.3svZcP" title="原文 : @Compensate">@Compensate</span></h3>
<div class="section">
<p><span class="merged" id="all.1STudk"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Compensate.html" target="_blank"><sub>javadoc</sub></a></span></p>

<div class="admonition caution">
<p class="admonition-inline"><span class="merged" id="all.Hovuk" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>

<p><span class="merged" id="all.bThj6.spl1" title="原文 : Compensate method is called by a coordinator when LRA is cancelled, usually by error during execution of method body of @LRA annotated method.">Compensateメソッドは、LRAが取り消されたときに<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>によってコールされます。通常、<router-link @click.native="this.scrollFix('#lra-method')" to="#lra-method">「@LRA注釈付きメソッド」</router-link>のメソッド本文の実行中にエラーによってコールされます。</span> <span class="merged" id="all.bThj6.spl2" title="原文 : If the method responds with 500 or 202, coordinator will eventually try the call again.">メソッドが500または202で応答した場合、コーディネータは最終的にコールを再試行します。</span> <span class="merged" id="all.bThj6.spl3" title="原文 : If participant has @Status annotated method, coordinator retrieves the status to find out if retry should be done.">参加者が<router-link @click.native="this.scrollFix('#status-participant-method')" to="#status-participant-method">「@Status注釈付きメソッド」</router-link>の場合、<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>は、再試行を実行する必要があるかどうかを確認するためにステータスを取得します。</span> </p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values"><span class="merged" id="all.uLKtC" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4KSYeU.1" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - ID of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" target="_blank">LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
<li>
<p><span class="merged" id="all.ze1IQ" title="原文 : Header LRA_HTTP_PARENT_CONTEXT_HEADER - parent LRA ID in case of nested LRA">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_PARENT_CONTEXT_HEADER" target="_blank">LRA_HTTP_PARENT_CONTEXT_HEADER</a> - ネストされたLRAの場合の親LRA ID</span></p>

</li>
</ul>

<markup
lang="java"

>@PUT
@Path("/compensate")
@Compensate
public Response compensateWork(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraId,
                               @HeaderParam(LRA_HTTP_PARENT_CONTEXT_HEADER) URI parent){
    return LRAResponse.compensated();
}</markup>

</div>


<h4 id="_non_jax_rs_variant_with_supported_lra_context_values"><span class="merged" id="all.1ixziT" title="原文 : Non JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つ非JAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1pknbx" title="原文 : URI with LRA ID">LRA IDのあるURI</span></p>

</li>
</ul>

<markup
lang="java"

>@Compensate
public void compensate(URI lraId)</markup>

</div>

</div>


<h3 id="complete-participant-method"><span class="merged" id="all.4DtI3R" title="原文 : @Complete">@Complete</span></h3>
<div class="section">
<p><span class="merged" id="all.2hiWgY"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Complete.html" target="_blank"><sub>javadoc</sub></a></span></p>

<div class="admonition caution">
<p class="admonition-inline"><span class="merged" id="all.Hovuk.1" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>

<p><span class="merged" id="all.3cCvi3.spl1" title="原文 : Complete method is called by coordinator when LRA is successfully closed.">完全なメソッドは、LRAが正常にクローズされたときに<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>によってコールされます。</span> <span class="merged" id="all.3cCvi3.spl2" title="原文 : If the method responds with 500 or 202, coordinator will eventually try the call again.">メソッドが500または202で応答した場合、コーディネータは最終的にコールを再試行します。</span> <span class="merged" id="all.3cCvi3.spl3" title="原文 : If participant has @Status annotated method, coordinator retrieves the status to find out if retry should be done.">参加者が<router-link @click.native="this.scrollFix('#status-participant-method')" to="#status-participant-method">「@Status注釈付きメソッド」</router-link>の場合、<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>は、再試行を実行する必要があるかどうかを確認するためにステータスを取得します。</span> </p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values_2"><span class="merged" id="all.uLKtC.1" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4KSYeU.2" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - ID of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" target="_blank">LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
<li>
<p><span class="merged" id="all.ze1IQ.1" title="原文 : Header LRA_HTTP_PARENT_CONTEXT_HEADER - parent LRA ID in case of nested LRA">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_PARENT_CONTEXT_HEADER" target="_blank">LRA_HTTP_PARENT_CONTEXT_HEADER</a> - ネストされたLRAの場合の親LRA ID</span></p>

</li>
</ul>

<markup
lang="java"

>@PUT
@Path("/complete")
@Complete
public Response complete(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraId,
                         @HeaderParam(LRA_HTTP_PARENT_CONTEXT_HEADER) URI parentLraId)</markup>

</div>


<h4 id="_non_jax_rs_variant_with_supported_lra_context_values_2"><span class="merged" id="all.1ixziT.1" title="原文 : Non JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つ非JAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1pknbx.1" title="原文 : URI with LRA ID">LRA IDのあるURI</span></p>

</li>
</ul>

<markup
lang="java"

>@Complete
public void complete(URI lraId)</markup>

</div>

</div>


<h3 id="_forget"><span class="merged" id="all.3xZHwN" title="原文 : @Forget">@Forget</span></h3>
<div class="section">
<p><span class="merged" id="all.2XvmpS"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Forget.html" target="_blank"><sub>javadoc</sub></a></span></p>

<div class="admonition caution">
<p class="admonition-inline"><span class="merged" id="all.Hovuk.2" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>

<p><span class="merged" id="all.2j3ny6.spl1" title="原文 : Complete and compensate methods can fail(500) or report that compensation/completion is in progress(202)."><router-link @click.native="this.scrollFix('#complete-participant-method')" to="#complete-participant-method">「完了」</router-link>および<router-link @click.native="this.scrollFix('#complete-participant-method')" to="#complete-participant-method">「補償」</router-link>メソッドは、fail(500)または補償/完了がprogress(202)にあることをレポートできます。</span> <span class="merged" id="all.2j3ny6.spl2" title="原文 : In such case participant needs to be prepared to report its status over @Status annotated method to coordinator.">このような場合、参加者は<router-link @click.native="this.scrollFix('#status-participant-method')" to="#status-participant-method">「@Status注釈付きメソッド」</router-link>を超えるステータスを<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>にレポートする準備をする必要があります。</span> <span class="merged" id="all.2j3ny6.spl3" title="原文 : When coordinator decides all the participants have finished, method annotated with @Forget is called."><router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>によってすべての参加者が終了すると、@Forgetという注釈が付いたメソッドがコールされます。</span> </p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values_3"><span class="merged" id="all.uLKtC.2" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4KSYeU.3" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - ID of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" target="_blank">LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
<li>
<p><span class="merged" id="all.ze1IQ.2" title="原文 : Header LRA_HTTP_PARENT_CONTEXT_HEADER - parent LRA ID in case of nested LRA">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_PARENT_CONTEXT_HEADER" target="_blank">LRA_HTTP_PARENT_CONTEXT_HEADER</a> - ネストされたLRAの場合の親LRA ID</span></p>

</li>
</ul>

<markup
lang="java"

>@DELETE
@Path("/forget")
@Forget
public Response forget(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraId,
                       @HeaderParam(LRA_HTTP_PARENT_CONTEXT_HEADER) URI parent)</markup>

</div>


<h4 id="_non_jax_rs_variant_with_supported_lra_context_values_3"><span class="merged" id="all.1ixziT.2" title="原文 : Non JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つ非JAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1pknbx.2" title="原文 : URI with LRA ID">LRA IDのあるURI</span></p>

</li>
</ul>

<markup
lang="java"

>@Forget
public void forget(URI lraId)
}</markup>

</div>

</div>


<h3 id="_leave"><span class="merged" id="all.dUyhi" title="原文 : @Leave">@Leave</span></h3>
<div class="section">
<p><span class="merged" id="all.12x5PM"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/Leave.html" target="_blank"><sub>javadoc</sub></a></span></p>

<p><span class="merged" id="all.2NGItt.spl1" title="原文 : Method annotated with @Leave called with LRA context(with header LRA_HTTP_CONTEXT_HEADER) informs coordinator that current participant is leaving the LRA.">LRAコンテキスト(ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" target="_blank">LRA_HTTP_CONTEXT_HEADER</a>と一緒に)で呼び出された @Leaveで注釈が付けられたメソッドは、現在の参加者がLRAを離れることを<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>に通知します。</span> <span class="merged" id="all.2NGItt.spl2" title="原文 : Method body is executed after leave signal is sent.">メソッド本文は、leaveシグナルが送信された後に実行されます。</span> <span class="merged" id="all.2NGItt.spl3" title="原文 : As a result, participant methods complete and compensate won&rsquo;t be called when the particular LRA ends.">その結果、特定のLRAが終了すると、参加者メソッドが完了し、補正はコールされません。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4KSYeU.4" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - ID of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" target="_blank">LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
</ul>

<markup
lang="java"

>@PUT
@Path("/leave")
@Leave
public Response leaveLRA(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraIdtoLeave)</markup>

</div>


<h3 id="status-participant-method"><span class="merged" id="all.MkV0Y"  title="原文:: @Status">@Status</span></h3>
<div class="section">
<p><span class="merged" id="all.yVjhr"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Status.html" target="_blank"><sub>javadoc</sub></a></span></p>

<div class="admonition caution">
<p class="admonition-inline"><span class="merged" id="all.Hovuk.3" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>

<p><span class="merged" id="all.rxp8x.spl1" title="原文 : If the coordinator&rsquo;s call to the participant&rsquo;s method fails, then it will retry the call.">参加者メソッドへのコーディネータのコールが失敗した場合、コールを再試行します。</span> <span class="merged" id="all.rxp8x.spl2" title="原文 : If the participant is not idempotent, then it may need to report its state to coordinator by declaring method annotated with @Status for reporting if previous call did change participant status.">参加者が冪等でない場合は、以前のコールで参加者ステータスが変更された場合、レポート用に@Statusという注釈が付いたメソッドを宣言して、その状態をコーディネータにレポートする必要がある場合があります。</span> <span class="merged" id="all.rxp8x.spl3" title="原文 : Coordinator can call it and decide if compensate or complete retry is needed."><router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>はそれをコールして、補正または完了の再試行が必要かどうかを判断できます。</span> </p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values_4"><span class="merged" id="all.uLKtC.3" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4KSYeU.5" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - ID of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" target="_blank">LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
<li>
<p><span class="merged" id="all.3CjQw5" title="原文 : ParticipantStatus - Status of the participant reported to coordinator"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ParticipantStatus.html" target="_blank">ParticipantStatus</a> - <router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>にレポートされた参加者のステータス</span></p>

</li>
</ul>

<markup
lang="java"

>@GET
@Path("/status")
@Status
public Response reportStatus(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraId) {
    return Response.status(ParticipantStatus.FailedToCompensate).build();
}</markup>

</div>


<h4 id="_non_jax_rs_variant_with_supported_lra_context_values_4"><span class="merged" id="all.1ixziT.3" title="原文 : Non JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つ非JAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1pknbx.3" title="原文 : URI with LRA ID">LRA IDのあるURI</span></p>

</li>
<li>
<p><span class="merged" id="all.3CjQw5.1" title="原文 : ParticipantStatus - Status of the participant reported to coordinator"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ParticipantStatus.html" target="_blank">ParticipantStatus</a> - <router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>にレポートされた参加者のステータス</span></p>

</li>
</ul>

<markup
lang="java"

>@Status
public Response reportStatus(URI lraId){
    return Response.ok(ParticipantStatus.FailedToCompensate).build();
}</markup>

</div>

</div>


<h3 id="after-participant-method"><span class="merged" id="all.3c0c3w"  title="原文: @AfterLRA">@AfterLRA</span></h3>
<div class="section">
<p><span class="merged" id="all.1krPss"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/AfterLRA.html" target="_blank"><sub>javadoc</sub></a></span></p>

<div class="admonition caution">
<p class="admonition-inline"><span class="merged" id="all.Hovuk.4" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>

<p><span class="merged" id="all.2Ouz6Q" title="原文 : Method annotated with @AfterLRA in the same class as the one with @LRA annotation gets invoked after particular LRA finishes.">@LRA注釈が付いたクラスと同じクラスで<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/AfterLRA.html" target="_blank">@AfterLRA</a>という注釈が付いたメソッドは、特定のLRAが終了した後に呼び出されます。</span></p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values_5"><span class="merged" id="all.uLKtC.4" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4bN1lr" title="原文 : Header LRA_HTTP_ENDED_CONTEXT_HEADER - ID of the finished LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_ENDED_CONTEXT_HEADER" target="_blank">LRA_HTTP_ENDED_CONTEXT_HEADER</a> - 終了したLRAトランザクションのID</span></p>

</li>
<li>
<p><span class="merged" id="all.ze1IQ.3" title="原文 : Header LRA_HTTP_PARENT_CONTEXT_HEADER - parent LRA ID in case of nested LRA">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_PARENT_CONTEXT_HEADER" target="_blank">LRA_HTTP_PARENT_CONTEXT_HEADER</a> - ネストされたLRAの場合の親LRA ID</span></p>

</li>
<li>
<p><span class="merged" id="all.t1IK3" title="原文 : LRAStatus - Final status of the LRA (Cancelled, Closed, FailedToCancel, FailedToClose)"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html" target="_blank">LRAStatus</a> - LRAの最終ステータス (<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#Cancelled" target="_blank">Cancelled</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#Closed" target="_blank">Closed</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#FailedToCancel" target="_blank">FailedToCancel</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#FailedToClose" target="_blank">FailedToClose</a>)</span></p>

</li>
</ul>

<markup
lang="java"

>@PUT
@Path("/finished")
@AfterLRA
public Response whenLRAFinishes(@HeaderParam(LRA_HTTP_ENDED_CONTEXT_HEADER) URI lraId,
                                @HeaderParam(LRA_HTTP_PARENT_CONTEXT_HEADER) URI parentLraId,
                                LRAStatus status)</markup>

</div>


<h4 id="_non_jax_rs_variant_with_supported_lra_context_values_5"><span class="merged" id="all.1ixziT.4" title="原文 : Non JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つ非JAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2WRrLh" title="原文 : URI with finished LRA ID">LRA IDが終了したURI</span></p>

</li>
<li>
<p><span class="merged" id="all.t1IK3.1" title="原文 : LRAStatus - Final status of the LRA (Cancelled, Closed, FailedToCancel, FailedToClose)"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html" target="_blank">LRAStatus</a> - LRAの最終ステータス (<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#Cancelled" target="_blank">Cancelled</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#Closed" target="_blank">Closed</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#FailedToCancel" target="_blank">FailedToCancel</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#FailedToClose" target="_blank">FailedToClose</a>)</span></p>

</li>
</ul>

<markup
lang="java"

>public void whenLRAFinishes(URI lraId, LRAStatus status)</markup>

</div>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.13"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<markup
lang="text"
title="Type"
>io.helidon.microprofile.lra</markup>

<p><span class="merged" id="all.4WZWC7.3" title="原文 : Optional configuration options:">オプションの構成オプション:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3H5QDp.1"  title="原文:: Key">キー</span></th>
<th><span class="merged" id="all.p0YxL.2"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.3T02MF.1"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.4JM9z7.11"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2c311b.1"  title="原文: mp.lra.coordinator.url"><code>mp.lra.coordinator.url</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.220"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.Jt8u2.1"  title="原文: http://localhost:8070/lra-coordinator"><code><a class="bare" href="http://localhost:8070/lra-coordinator" target="_blank">http://localhost:8070/lra-coordinator</a></code></span></td>
<td class=""><span class="merged" id="all.2bJERr.1" title="原文 : Url of coordinator.">コーディネータのURL。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V2AIt.1"  title="原文: mp.lra.coordinator.propagation.active"><code>mp.lra.coordinator.propagation.active</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.116"  title="原文:: boolean">boolean</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2LQ1Mf.1" title="原文 : Propagate LRA headers LRA_HTTP_CONTEXT_HEADER and LRA_HTTP_PARENT_CONTEXT_HEADER through non-LRA endpoints.">LRA以外のエンドポイントを介してLRAヘッダーLRA_HTTP_CONTEXT_HEADERおよびLRA_HTTP_PARENT_CONTEXT_HEADERを伝播します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bvKPk.1"  title="原文: mp.lara.participant.url"><code>mp.lara.participant.url</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.221"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.DCZlm.1" title="原文 : Url of the LRA enabled service overrides standard base uri, so coordinator can call load-balancer instead of the service.">LRA対応サービスのURLは標準ベースURIをオーバーライドするため、コーディネータはサービスではなくロード・バランサをコールできます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22XCBL.1"  title="原文: mp.lra.coordinator.timeout"><code>mp.lra.coordinator.timeout</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.222"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3IBeQU.1" title="原文 : Timeout for synchronous communication with coordinator.">コーディネータとの同期通信のタイムアウト。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3CQbbh.1"  title="原文: mp.lra.coordinator.timeout-unit"><code>mp.lra.coordinator.timeout-unit</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.223"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.U3036.1" title="原文 : Timeout unit for synchronous communication with coordinator.">コーディネータとの同期通信のタイムアウト単位。</span></td>
</tr>
</tbody>
</table>
</div>

<markup
lang="yaml"
title="Example of LRA configuration"
>mp.lra:
  coordinator.url: http://localhost:8070/lra-coordinator <span class="conum" data-value="1" />
  propagation.active: true <span class="conum" data-value="2" />
  participant.url: http://coordinator.visible.host:80/awesomeapp <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.30AMC5" title="原文 : Url of coordinator">コーディネータのURL</span></li>
<li data-value="2"><span class="merged" id="all.2EA6g9" title="原文 : Propagate LRA headers LRA_HTTP_CONTEXT_HEADER and LRA_HTTP_PARENT_CONTEXT_HEADER through non-LRA endpoints">LRA以外のエンドポイントを介したLRAヘッダーLRA_HTTP_CONTEXT_HEADERおよびLRA_HTTP_PARENT_CONTEXT_HEADERの伝播</span></li>
<li data-value="3"><span class="merged" id="all.288Vx1" title="原文 : Url of the LRA enabled service overrides standard base uri, so coordinator can call load-balancer instead of the service">LRA対応サービスのURLは標準ベースURIをオーバーライドするため、コーディネータはサービスではなくロード・バランサをコールできます</span></li>
</ul>

<p><span class="merged" id="all.1aUAWk" title="原文 : For more information continue to {microprofile-lra-spec-url}[MicroProfile Long Running Actions specification].">詳細は、 {microprofile-lra-spec-url}[MicroProfile Long Running Actions specification]に進みます。</span></p>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.12"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.4487kO.spl1" title="原文 : The following example shows how a simple LRA participant starts and joins a transaction after calling the &apos;/start-example&apos; resource.">次の例は、単純なLRA参加者が'/start-example'リソースをコールした後にトランザクションを開始および結合する方法を示しています。</span> <span class="merged" id="all.4487kO.spl2" title="原文 : When startExample method finishes successfully, close is reported to coordinator and /complete-example endpoint is called by coordinator to confirm successful closure of the LRA.">startExampleメソッドが正常に終了すると、クローズが<router-link @click.native="this.scrollFix('#_coordinator')" to="#_coordinator">「コーディネータ」</router-link>にレポートされ、<code>/complete-example</code>エンドポイントがコーディネータによってコールされて、LRAの正常なクローズが確認されます。</span> </p>

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
    LOGGER.log(Level.INFO, "LRA ID: {0} completed &#127881;", lraId);
    return LRAResponse.completed();
}

@PUT
@Compensate <span class="conum" data-value="6" />
@Path("compensate-example")
public Response compensateExample(@HeaderParam(LRA_HTTP_CONTEXT_HEADER) URI lraId) {
    LOGGER.log(Level.SEVERE, "LRA ID: {0} compensated &#129466;", lraId);
    return LRAResponse.compensated();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.AKG4w" title="原文 : This JAX-RS PUT method will start new LRA transactions and join it before method body gets executed">このJAX-RS PUTメソッドは、メソッド本文が実行される前に、新しいLRAトランザクションを開始して結合</span></li>
<li data-value="2"><span class="merged" id="all.26A38v" title="原文 : LRA ID assigned by coordinator to this LRA transaction">このLRAトランザクションにコーディネータによって割り当てられたLRA ID</span></li>
<li data-value="3"><span class="merged" id="all.1mnZyd" title="原文 : When method execution finishes exceptionally, cancel signal for this particular LRA is sent to coordinator">メソッドの実行が例外的に終了すると、この特定のLRAの取消しシグナルがコーディネータに送信されます</span></li>
<li data-value="4"><span class="merged" id="all.2Oij82" title="原文 : When method execution finishes successfully, complete signal for this particular LRA is sent to coordinator">メソッドの実行が正常に終了すると、この特定のLRAの完全なシグナルがコーディネータに送信されます</span></li>
<li data-value="5"><span class="merged" id="all.rBSAc" title="原文 : Method which will be called by coordinator when LRA is completed">LRAの完了時にコーディネータによってコールされるメソッド</span></li>
<li data-value="6"><span class="merged" id="all.3iWu7h" title="原文 : Method which will be called by coordinator when LRA is canceled">LRAが取り消されたときにコーディネータによってコールされるメソッド</span></li>
</ul>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.8"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_coordinator"><span class="merged" id="all.2hLDun.1"  title="原文:: Coordinator">コーディネータ</span></h3>
<div class="section">
<p><span class="merged" id="all.2tf3T5.spl1" title="原文 : Coordinator is a service that tracks all LRA transactions and calls the compensate REST endpoints of the participants when the LRA transaction gets cancelled or completes (in case it gets closed).">コーディネータは、すべてのLRAトランザクションをトラッキングし、LRAトランザクションが取り消されたり完了すると(クローズされると)、参加者の補正RESTエンドポイントをコールするサービスです。</span> <span class="merged" id="all.2tf3T5.spl2" title="原文 : In addition, participant also keeps track of timeouts, retries participant calls, and assigns LRA ids.">また、参加者はタイムアウトを追跡し、参加者コールを再試行して、LRA idを割り当てます。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.58sEL" title="原文 : Helidon LRA coordinator">Helidon LRAコーディネータ</span></p>

</li>
<li>
<p><span class="merged" id="all.1RK2pZ" title="原文 : Narayana coordinator."><a href="https://narayana.io/lra" target="_blank">Narayanaコーディネータ</a>。</span></p>

</li>
</ul>

</div>


<h3 id="_helidon_lra_coordinator"><span class="merged" id="all.58sEL.1" title="原文 : Helidon LRA coordinator">Helidon LRAコーディネータ</span></h3>
<div class="section">
<div class="admonition caution">
<p class="admonition-inline"><span class="merged" id="all.3pKPxy" title="原文 : Experimental tool, usage in production is not advised.">実験的なツールです。本番での使用は推奨されません。</span></p>
</div>

<markup
lang="bash"
title="Build and run Helidon LRA coordinator"
>docker build -t helidon/lra-coordinator https://github.com/oracle/helidon.git#:lra/coordinator/server
docker run -dp 8070:8070 --name lra-coordinator --network="host" helidon/lra-coordinator</markup>

<p><span class="merged" id="all.1wtnHW" title="原文 : Helidon LRA coordinator is compatible with Narayana clients, you need to add an additional dependency for Narayana client:">Helidon LRAコーディネータはNarayanaクライアントと互換性があります。Narayanaクライアントに追加の依存関係を追加する必要があります:</span></p>

<markup
lang="xml"
title="Dependency needed for using Helidon LRA with Narayana compatible coordinator"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.lra&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-lra-coordinator-narayana-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_narayana"><span class="merged" id="all.9omMY" title="原文 : Narayana">Narayana</span></h3>
<div class="section">
<p><span class="merged" id="all.3BaWjW.spl1" title="原文 : Narayana is a transaction manager supporting LRA."><a href="https://narayana.io" target="_blank">Narayana</a>は、LRAをサポートするトランザクション・マネージャです。</span> <span class="merged" id="all.3BaWjW.spl2" title="原文 : To use Narayana LRA coordinator with Helidon LRA client you need to add an additional dependency for Narayana client:">Helidon LRAクライアントでNarayana LRAコーディネータを使用するには、Narayanaクライアントに追加の依存関係を追加する必要があります:</span> </p>

<markup
lang="xml"
title="Dependency needed for using Helidon LRA with Narayana coordinator"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.lra&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-lra-coordinator-narayana-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.29OGl1" title="原文 : The simplest way to run Narayana LRA coordinator locally:">Narayana LRAコーディネータをローカルで実行する最も簡単な方法:</span></p>

<markup
lang="bash"
title="Downloading and running Narayana LRA coordinator"
>wget https://search.maven.org/remotecontent?filepath=org/jboss/narayana/rts/lra-coordinator-quarkus/5.11.1.Final/lra-coordinator-quarkus-5.11.1.Final-runner.jar \
-O narayana-coordinator.jar \
&amp;&amp; java -Dquarkus.http.port=8070 -jar narayana-coordinator.jar</markup>

<p><span class="merged" id="all.34a7em" title="原文 : Narayana LRA coordinator is running by default under lra-coordinator context, with port 8070 defined in the snippet above you need to configure your Helidon LRA app as follows: mp.lra.coordinator.url=http://localhost:8070/lra-coordinator">Narayana LRAコーディネータはデフォルトで<code>lra-coordinator</code>コンテキストで実行されており、前述のスニペットで定義されたポート<code>8070</code>では、Helidon LRAアプリケーションを次のように構成する必要があります : <code>mp.lra.coordinator.url=http://localhost:8070/lra-coordinator</code></span></p>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.7"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1atPrK" title="原文 : MicroProfile LRA GitHub Repository"><a href="https://github.com/eclipse/microprofile-lra" target="_blank">MicroProfile LRA GitHubリポジトリ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.6zkAs" title="原文 : {microprofile-lra-spec-url}[MicroProfile Long Running Actions specification]">{microprofile-lra-spec-url}[MicroProfile Long Running Actions specification]</span></p>

</li>
<li>
<p><span class="merged" id="all.FuKpd" title="原文 : Microprofile LRA JavaDoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/" target="_blank">Microprofile LRA JavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.39JM3l" title="原文 : Helidon LRA Client JavaDoc"><a href="https://helidon.io/docs/v2/apidocs/io.helidon.lra.coordinator.client/module-summary.html" target="_blank">Helidon LRAクライアントJavaDoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
