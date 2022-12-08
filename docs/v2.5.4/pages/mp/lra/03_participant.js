<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_participant"><span class="merged" id="all.1Tz6Wc"  title="原文:: Participant">参加者</span></h2>
<div class="section">
<p><span class="merged" id="all.1nBmSW" title="原文 : The Participant, or Compensator, is an LRA resource with at least one of the JAX-RS(or non-JAX-RS) methods annotated with @Compensate or @AfterLRA.">参加者(補償者)は、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Compensate.html" id="" target="_blank" >@Compensate</a>または<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/AfterLRA.html" id="" target="_blank" >@AfterLRA</a>で注釈が付けられたJAX-RS(または非JAX-RS)メソッドの少なくとも1つを含むLRAリソースです。</span></p>


<h3 id="lra-method"><span class="merged" id="all.1McJfB" title="原文 : @LRA">@LRA</span></h3>
<div class="section">
<p><span class="merged" id="all.4Jsa1k"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html" id="" target="_blank" ><sub>javadoc</sub></a></span></p>

<p><span class="merged" id="all.41WAyZ" title="原文 : Marks JAX-RS method which should run in LRA context and needs to be accompanied by at least minimal set of mandatory participant methods(Compensate or AfterLRA).">LRAコンテキストで実行する必要があるJAX-RSメソッドをマークし、少なくとも必須参加者メソッド(<router-link @click.native="this.scrollFix('#compensate-participant-method')" to="#compensate-participant-method">補償</router-link>または<router-link @click.native="this.scrollFix('#after-participant-method')" to="#after-participant-method">AfterLRA</router-link>)のセットを伴う必要があります。</span></p>

<p><span class="merged" id="all.2vPjmD" title="原文 : LRA options:">LRAオプション:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.ybeFY"  title="原文:: value"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#value--" id="" target="_blank" >value</a></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2gdC0E" title="原文 : REQUIRED join incoming LRA or create and join new"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#REQUIRED" id="" target="_blank" >REQUIRED</a> 受信LRAの結合または新規作成と結合</span></p>

</li>
<li>
<p><span class="merged" id="all.4BtG6y" title="原文 : REQUIRES_NEW create and join new LRA"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#REQUIRES_NEW" id="" target="_blank" >REQUIRES_NEW</a> 新規LRAの作成および結合</span></p>

</li>
<li>
<p><span class="merged" id="all.3u7uL0" title="原文 : MANDATORY join incoming LRA or fail"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#MANDATORY" id="" target="_blank" >MANDATORY</a> 受信LRAまたは失敗の結合</span></p>

</li>
<li>
<p><span class="merged" id="all.2bQvO8" title="原文 : SUPPORTS join incoming LRA or continue outside LRA context"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#SUPPORTS" id="" target="_blank" >SUPPORTS</a> 受信LRAを結合するか、LRAコンテキスト外で続行</span></p>

</li>
<li>
<p><span class="merged" id="all.164xME" title="原文 : NOT_SUPPORTED always continue outside LRA context"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#NOT_SUPPORTED" id="" target="_blank" >NOT_SUPPORTED</a> 常にLRAコンテキスト外で続行</span></p>

</li>
<li>
<p><span class="merged" id="all.3zKZAa" title="原文 : NEVER Fail with 412 if executed in LRA context"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#NEVER" id="" target="_blank" >NEVER</a> LRAコンテキストで実行された場合、412で失敗</span></p>

</li>
<li>
<p><span class="merged" id="all.2EXz9i" title="原文 : NESTED create and join new LRA nested in the incoming LRA context"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.Type.html#NESTED" id="" target="_blank" >NESTED</a> 受信LRAコンテキストにネストされた新しいLRAの作成および結合</span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.40pi43" title="原文 : timeLimit max time limit before LRA gets cancelled automatically by coordinator"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#timeLimit--" id="" target="_blank" >timeLimit</a> <router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>によってLRAが自動的に取り消されるまでの最大時間制限</span></p>

</li>
<li>
<p><span class="merged" id="all.F87eW" title="原文 : timeUnit time unit if the timeLimit value"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#timeUnit--" id="" target="_blank" >timeUnit</a> 時間単位(timeLimit値の場合)</span></p>

</li>
<li>
<p><span class="merged" id="all.25PyyC" title="原文 : end when false LRA is not closed after successful method execution"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#end--" id="" target="_blank" >end</a> メソッドの実行が成功した後にfalse LRAがクローズされないとき</span></p>

</li>
<li>
<p><span class="merged" id="all.3tx2b8" title="原文 : cancelOn which HTTP response codes of the method causes LRA to cancel"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#cancelOn--" id="" target="_blank" >cancelOn</a> メソッドのHTTPレスポンス・コードによってLRAが取り消される</span></p>

</li>
<li>
<p><span class="merged" id="all.1YFEu3" title="原文 : cancelOnFamily which family of HTTP response codes causes LRA to cancel"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#cancelOnFamily--" id="" target="_blank" >cancelOnFamily</a> HTTPレスポンス・コードのファミリによってLRAが取り消される</span></p>

</li>
</ul>
<p><span class="merged" id="all.713xJ"  title="原文:: Method parameters:">メソッド・パラメータ:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2pI85J" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - id of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

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
<p><span class="merged" id="all.3kqP6g"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Compensate.html" id="" target="_blank" ><sub>javadoc</sub></a></span></p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.23TQ9h" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>
<p><span class="merged" id="all.136m33.spl1" title="原文 : Compensate method is called by coordinator when LRA is cancelled, usually by error during execution of method body of @LRA annotated method."><router-link to="/mp/lra/01_introduction">LRA</router-link>が取り消されると<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>によって補正メソッドがコールされ、通常は<router-link @click.native="this.scrollFix('#lra-method')" to="#lra-method">「@LRA注釈付きメソッド」</router-link>のメソッド本文の実行中にエラーになります。</span> <span class="merged" id="all.136m33.spl2" title="原文 : If the method responds with 500 or 202, coordinator will eventually try the call again.">メソッドが500または202で応答した場合、コーディネータは最終的にコールを再試行します。</span> <span class="merged" id="all.136m33.spl3" title="原文 : If participant has @Status annotated method, coordinator retrieves the status to find out if retry should be done.">参加者が<router-link @click.native="this.scrollFix('#status-participant-method')" to="#status-participant-method">「@Status注釈付きメソッド」</router-link>の場合、<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>は、再試行を実行する必要があるかどうかを確認するためにステータスを取得します。</span> </p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values"><span class="merged" id="all.uLKtC" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2pI85J.1" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - id of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
<li>
<p><span class="merged" id="all.13Wa2K" title="原文 : Header LRA_HTTP_PARENT_CONTEXT_HEADER - parent LRA id in case of nested LRA">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_PARENT_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_PARENT_CONTEXT_HEADER</a> - ネストされたLRAの場合の親LRA id</span></p>

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
<p><span class="merged" id="all.3iJtHz" title="原文 : URI with LRA id">LRA idを持つURI</span></p>

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
<p><span class="merged" id="all.2mwFzc"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Complete.html" id="" target="_blank" ><sub>javadoc</sub></a></span></p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.23TQ9h.1" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>
<p><span class="merged" id="all.20UPuf.spl1" title="原文 : Complete method is called by coordinator when LRA is successfully closed.">完全なメソッドは、LRAが正常にクローズされたときに<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>によってコールされます。</span> <span class="merged" id="all.20UPuf.spl2" title="原文 : If the method responds with 500 or 202, coordinator will eventually try the call again.">メソッドが500または202で応答した場合、コーディネータは最終的にコールを再試行します。</span> <span class="merged" id="all.20UPuf.spl3" title="原文 : If participant has @Status annotated method, coordinator retrieves the status to find out if retry should be done.">参加者が<router-link @click.native="this.scrollFix('#status-participant-method')" to="#status-participant-method">「@Status注釈付きメソッド」</router-link>の場合、<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>は、再試行を実行する必要があるかどうかを確認するためにステータスを取得します。</span> </p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values_2"><span class="merged" id="all.uLKtC.1" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2pI85J.2" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - id of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
<li>
<p><span class="merged" id="all.13Wa2K.1" title="原文 : Header LRA_HTTP_PARENT_CONTEXT_HEADER - parent LRA id in case of nested LRA">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_PARENT_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_PARENT_CONTEXT_HEADER</a> - ネストされたLRAの場合の親LRA id</span></p>

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
<p><span class="merged" id="all.3iJtHz.1" title="原文 : URI with LRA id">LRA idを持つURI</span></p>

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
<p><span class="merged" id="all.32nh8U"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Forget.html" id="" target="_blank" ><sub>javadoc</sub></a></span></p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.23TQ9h.2" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>
<p><span class="merged" id="all.3rEp8U.spl1" title="原文 : Complete and compensate methods can fail(500) or report that compensation/completion is in progress(202)."><router-link @click.native="this.scrollFix('#complete-participant-method')" to="#complete-participant-method">「完了」</router-link>および<router-link @click.native="this.scrollFix('#complete-participant-method')" to="#complete-participant-method">「補償」</router-link>メソッドは、fail(500)または補償/完了がprogress(202)にあることをレポートできます。</span> <span class="merged" id="all.3rEp8U.spl2" title="原文 : In such case participant needs to be prepared to report its status over @Status annotated method to coordinator.">このような場合、参加者は<router-link @click.native="this.scrollFix('#status-participant-method')" to="#status-participant-method">「@Status注釈付きメソッド」</router-link>を超えるステータスを<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>にレポートする準備をする必要があります。</span> <span class="merged" id="all.3rEp8U.spl3" title="原文 : When coordinator decides all the participants have finished, method annotated with @Forget is called."><router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>によってすべての参加者が終了すると、@Forgetという注釈が付いたメソッドがコールされます。</span> </p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values_3"><span class="merged" id="all.uLKtC.2" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2pI85J.3" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - id of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
<li>
<p><span class="merged" id="all.13Wa2K.2" title="原文 : Header LRA_HTTP_PARENT_CONTEXT_HEADER - parent LRA id in case of nested LRA">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_PARENT_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_PARENT_CONTEXT_HEADER</a> - ネストされたLRAの場合の親LRA id</span></p>

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
<p><span class="merged" id="all.3iJtHz.2" title="原文 : URI with LRA id">LRA idを持つURI</span></p>

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
<p><span class="merged" id="all.2h3hDB"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/Leave.html" id="" target="_blank" ><sub>javadoc</sub></a></span></p>

<p><span class="merged" id="all.4NtmO0.spl1" title="原文 : Method annotated with @Leave called with LRA context(with header LRA_HTTP_CONTEXT_HEADER) informs coordinator that current participant is leaving the LRA.">LRAコンテキスト(ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_CONTEXT_HEADER</a>と一緒に)で呼び出された @Leaveで注釈が付けられたメソッドは、現在の参加者がLRAを離れることを<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>に通知します。</span> <span class="merged" id="all.4NtmO0.spl2" title="原文 : Method body is executed after leave signal is sent.">メソッド本文は、leaveシグナルが送信された後に実行されます。</span> <span class="merged" id="all.4NtmO0.spl3" title="原文 : As a result, participant methods complete and compensate won&rsquo;t be called when the particular LRA ends.">その結果、特定のLRAが終了すると、参加者メソッドが完了し、補正はコールされません。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2pI85J.4" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - id of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

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
<p><span class="merged" id="all.2b9Dev"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/Status.html" id="" target="_blank" ><sub>javadoc</sub></a></span></p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.23TQ9h.3" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>
<p><span class="merged" id="all.15ZV0n.spl1" title="原文 : If the coordinator&rsquo;s call to the particpant&rsquo;s method fails, then it will retry the call.">参加者のメソッドへのコーディネータのコールが失敗した場合は、コールを再試行します。</span> <span class="merged" id="all.15ZV0n.spl2" title="原文 : If the participant is not idempotent, then it may need to report its state to coordinator by declaring method annotated with @Status for reporting if previous call did change participant status.">参加者が冪等でない場合は、以前のコールで参加者ステータスが変更された場合、レポート用に@Statusという注釈が付いたメソッドを宣言して、その状態をコーディネータにレポートする必要がある場合があります。</span> <span class="merged" id="all.15ZV0n.spl3" title="原文 : Coordinator can call it and decide if compensate or complete retry is needed."><router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>はそれをコールして、補正または完了の再試行が必要かどうかを判断できます。</span> </p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values_4"><span class="merged" id="all.uLKtC.3" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2pI85J.5" title="原文 : Header LRA_HTTP_CONTEXT_HEADER - id of the LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_CONTEXT_HEADER</a> - LRAトランザクションのID</span></p>

</li>
<li>
<p><span class="merged" id="all.4X55gw" title="原文 : ParticipantStatus - Status of the participant reported to coordinator"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ParticipantStatus.html" id="" target="_blank" >ParticipantStatus</a> - <router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>にレポートされた参加者のステータス</span></p>

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
<p><span class="merged" id="all.3iJtHz.3" title="原文 : URI with LRA id">LRA idを持つURI</span></p>

</li>
<li>
<p><span class="merged" id="all.4X55gw.1" title="原文 : ParticipantStatus - Status of the participant reported to coordinator"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ParticipantStatus.html" id="" target="_blank" >ParticipantStatus</a> - <router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>にレポートされた参加者のステータス</span></p>

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
<p><span class="merged" id="all.4SIqkp"  title="原文:: javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/AfterLRA.html" id="" target="_blank" ><sub>javadoc</sub></a></span></p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.23TQ9h.4" title="原文 : Expected to be called by LRA coordinator only!">LRA<router-link to="/mp/lra/02_coordinator">「コーディネータ」</router-link>からのみ呼び出されることが期待されます。</span></p>
</div>
<p><span class="merged" id="all.ioy0f" title="原文 : Method annotated with @AfterLRA in the same class as the one with @LRA annotation gets invoked after particular LRA finishes.">@LRA注釈が付いたクラスと同じクラスで<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/AfterLRA.html" id="" target="_blank" >@AfterLRA</a>という注釈が付いたメソッドは、特定のLRAが終了した後に呼び出されます。</span></p>


<h4 id="_jax_rs_variant_with_supported_lra_context_values_5"><span class="merged" id="all.uLKtC.4" title="原文 : JAX-RS variant with supported LRA context values:">サポートされているLRAコンテキスト値を持つJAX-RSバリアント:</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.12Wewk" title="原文 : Header LRA_HTTP_ENDED_CONTEXT_HEADER - id of the finished LRA transaction">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_ENDED_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_ENDED_CONTEXT_HEADER</a> - 終了したLRAトランザクションのid</span></p>

</li>
<li>
<p><span class="merged" id="all.13Wa2K.3" title="原文 : Header LRA_HTTP_PARENT_CONTEXT_HEADER - parent LRA id in case of nested LRA">ヘッダー<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/ws/rs/LRA.html#LRA_HTTP_PARENT_CONTEXT_HEADER" id="" target="_blank" >LRA_HTTP_PARENT_CONTEXT_HEADER</a> - ネストされたLRAの場合の親LRA id</span></p>

</li>
<li>
<p><span class="merged" id="all.3FU1xw" title="原文 : LRAStatus - Final status of the LRA (Cancelled, Closed, FailedToCancel, FailedToClose)"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html" id="" target="_blank" >LRAStatus</a> - LRAの最終ステータス (<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#Cancelled" id="" target="_blank" >Cancelled</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#Closed" id="" target="_blank" >Closed</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#FailedToCancel" id="" target="_blank" >FailedToCancel</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#FailedToClose" id="" target="_blank" >FailedToClose</a>)</span></p>

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
<p><span class="merged" id="all.iQMHn" title="原文 : URI with finished LRA id">LRA idが終了したURI</span></p>

</li>
<li>
<p><span class="merged" id="all.3FU1xw.1" title="原文 : LRAStatus - Final status of the LRA (Cancelled, Closed, FailedToCancel, FailedToClose)"><a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html" id="" target="_blank" >LRAStatus</a> - LRAの最終ステータス (<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#Cancelled" id="" target="_blank" >Cancelled</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#Closed" id="" target="_blank" >Closed</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#FailedToCancel" id="" target="_blank" >FailedToCancel</a>、<a href="https://download.eclipse.org/microprofile/microprofile-lra-1.0-RC3/apidocs/org/eclipse/microprofile/lra/annotation/LRAStatus.html#FailedToClose" id="" target="_blank" >FailedToClose</a>)</span></p>

</li>
</ul>
<markup
lang="java"

>public void whenLRAFinishes(URI lraId, LRAStatus status)</markup>

</div>
</div>
</div>
</doc-view>
