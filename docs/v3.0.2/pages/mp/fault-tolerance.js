<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.5"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.3" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.3" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.2" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.3" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.2" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.2" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.2" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.3"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3mA0UI.spl1" title="原文 : Fault Tolerance is part of the MicroProfile set of specifications.">フォルト・トレランスは、MicroProfile仕様セットの一部です。</span> <span class="merged" id="all.3mA0UI.spl2" title="原文 : This API defines mostly annotations that improve application robustness by providing support to conveniently handle error conditions (faults) that may occur in real-world applications.">このAPIは、ほとんどの場合、実際のアプリケーションで発生する可能性のあるエラー条件(フォルト)を簡単に処理するためのサポートを提供することで、アプリケーションの堅牢性を向上させる注釈を定義します。</span> <span class="merged" id="all.3mA0UI.spl3" title="原文 : Examples include service restarts, network delays, temporal infrastructure instabilities, etc.">たとえば、サービスの再起動、ネットワークの遅延、一時的なインフラストラクチャの不安定性などです。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.3"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3p9NnG" title="原文 : To enable MicroProfile Fault Tolerance either add a dependency on the helidon-microprofile bundle or add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfileフォルト・トレランスを有効にするには、<router-link to="/mp/introduction/microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

> &lt;dependency&gt;
     &lt;groupId&gt;io.helidon.microprofile&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-microprofile-fault-tolerance&lt;/artifactId&gt;
 &lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.2"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.3zmbcu.spl1" title="原文 : The MicroProfile Fault Tolerance specification defines a set of annotations to decorate classes and methods in your application for the purpose of improving its robustness.">MicroProfileフォルト・トレランス仕様では、アプリケーションのクラスおよびメソッドを装飾するための注釈のセットを定義して、堅牢性を向上させます。</span> <span class="merged" id="all.3zmbcu.spl2" title="原文 : Many of these annotations can be applied at the class or method level: if applied at the class level, they will impact all methods in the class; if applied both at the class and method level, the latter will take precedence over the former.">これらの注釈の多くはクラスまたはメソッド・レベルで適用できます: クラス・レベルで適用すると、クラス内のすべてのメソッドに影響します。クラス・レベルとメソッド・レベルの両方で適用した場合、後者は前者より優先されます。</span> </p>

<p><span class="merged" id="all.2Ls60V" title="原文 : The following table provides a brief description of each of these annotations, including its parameters and default values.">次の表に、これらの各注釈とそのパラメータおよびデフォルト値を含む簡単な説明を示します。</span></p>


<div class="table__overflow elevation-1  flex sm10
">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1mFIlG.1"  title="原文:: Annotation">注釈</span></th>
<th><span class="merged" id="all.4JM9z7.6"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><doc-view>
<div class="listing">
<markup>@Retry(
    maxRetries=3,
    delay=0,
    delayUnit=ChronoUnit.MILLIS,
    maxDuration=180000,
    durationUnit=ChronoUnit.MILLIS,
    jitter=200,
    jitterDelayUnit=ChronoUnit.MILLIS,
    retryOn={Exception.class},
    abortOn={}
)</markup>
</div>

</doc-view>
</td>
<td class=""><span class="merged" id="all.et6iN.spl1" title="原文 : Retries the execution of a method if a failure is encountered.">失敗が発生した場合にメソッドの実行を再試行します。</span> <span class="merged" id="all.et6iN.spl2" title="原文 : Annotation attributes can be used to control the number of retries, delay between retries and which exceptions to retry or abort on.">注釈属性を使用すると、再試行回数、再試行間の遅延数、再試行または中止する例外を制御できます。</span> </td>
</tr>
<tr>
<td class=""><doc-view>
<div class="listing">
<markup>@Timeout(
    value=1000,
    unit=ChronoUnit.MILLIS
)</markup>
</div>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1NFsBE.spl1" title="原文 : Defines an upper bound on a method&rsquo;s execution time.">メソッドの実行時間の上限を定義します。</span> <span class="merged" id="all.1NFsBE.spl2" title="原文 : Default value is 1 second.">デフォルト値は1秒です。</span> </td>
</tr>
<tr>
<td class=""><doc-view>
<div class="listing">
<markup>@CircuitBreaker(
    failOn={Throwable.class},
    skipOn={},
    delay=5000,
    delayUnit=ChronoUnit.MILLIS,
    requestVolumeThreshold=20,
    failureRation=.50,
    successThreshold=1
)</markup>
</div>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4VnEPc.spl1" title="原文 : Defines a policy to avoid repeated execution of logic that is likely to fail.">障害が発生する可能性の高いロジックの繰返し実行を回避するポリシーを定義します。</span> <span class="merged" id="all.4VnEPc.spl2" title="原文 : A circuit breaker can be closed, open or half-open.">サーキット・ブレーカは、<em>「クローズド」</em>、<em>「オープン」</em>または<em>「半分オープン」</em>です。</span> <span class="merged" id="all.4VnEPc.spl3" title="原文 : In closed state a circuit breaker will execute logic normally."><em>「クローズド」</em>状態では、サーキット・ブレーカはロジックを通常どおり実行します。</span> <span class="merged" id="all.4VnEPc.spl4" title="原文 : In open state a circuit breaker will prevent execution of logic that has been seen to fail."><em>「オープン」</em>状態では、サーキット・ブレーカにより、失敗したと思われるロジックの実行が防止されます。</span> <span class="merged" id="all.4VnEPc.spl5" title="原文 : Finally, in half-open state a circuit breaker will allow trial executions in an attempt to switch its internal state to closed.">最後に、<em>「半分オープン」</em>状態では、サーキット・ブレーカは内部状態を<em>「クローズド」</em>に切り替えるために、<em>「トライアル」</em>の実行を許可します。</span> <span class="merged" id="all.4VnEPc.spl6" title="原文 : The other annotation parameters are used to control how these state transitions are triggered.">その他の注釈パラメータを使用して、これらの状態遷移のトリガー方法を制御します。</span> </td>
</tr>
<tr>
<td class=""><doc-view>
<div class="listing">
<markup>@Bulkhead(
    value=10,
    waitingTaskQueue=10
)</markup>
</div>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4LT9Zs.spl1" title="原文 : Defines a policy to limit the number of concurrent executions allowed over some application logic.">一部のアプリケーション・ロジックで許可される同時実行数を制限するポリシーを定義します。</span> <span class="merged" id="all.4LT9Zs.spl2" title="原文 : A queue is used to park tasks awaiting execution after the limit has been reached.">キューは、制限に達した後に実行を待機しているタスクをパークするために使用されます。</span> <span class="merged" id="all.4LT9Zs.spl3" title="原文 : A queue is only active when invocations are @Asynchronous.">キューは、呼出しが<code>@Asynchronous</code>の場合にのみアクティブになります。</span> </td>
</tr>
<tr>
<td class=""><doc-view>
<div class="listing">
<markup>@Fallback(
    value=DEFAULT.class,
    fallbackMethod="",
    applyOn={Throwable.class},
    skipOn={}
)</markup>
</div>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3MNZ5U.spl1" title="原文 : Establishes a handler to be executed upon encountering an invocation failure.">起動の失敗が発生したときに実行されるハンドラを確立します。</span> <span class="merged" id="all.3MNZ5U.spl2" title="原文 : A handler is either a class that implements FallbackHandler&lt;T&gt; or just a simple method in the same class.">ハンドラは、<code>FallbackHandler&lt;T></code>を実装するクラス、または同じクラスの単純なメソッドのいずれかです。</span> <span class="merged" id="all.3MNZ5U.spl3" title="原文 : Additional properties are used to control the conditions under which these handlers are called.">追加のプロパティは、これらのハンドラが呼び出される条件を制御するために使用されます。</span> </td>
</tr>
<tr>
<td class=""><doc-view>
<div class="listing">
<markup>@Asynchronous</markup>
</div>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4ek2ur.spl1" title="原文 : Executes an invocation asynchronously without blocking the calling thread.">呼び出し元スレッドをブロックせずに非同期で呼び出しを実行します。</span> <span class="merged" id="all.4ek2ur.spl2" title="原文 : Annotated method must return Future or CompletionStage.">注釈付きメソッドは、<code>Future</code>または<code>CompletionStage</code>を返す必要があります。</span> <span class="merged" id="all.4ek2ur.spl3" title="原文 : Typically used to avoid blocking the calling thread on I/O or on a long-running computation.">通常は、I/Oまたは長時間実行の計算でのコール・スレッドのブロックを回避するために使用されます。</span> </td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.3"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1pitOr.spl1" title="原文 : Helidon&rsquo;s implementation uses two types of thread pools: normal and scheduled.">Helidon実装では、次のタイプのスレッド・プールを使用: 通常およびスケジュール済。</span> <span class="merged" id="all.1pitOr.spl2" title="原文 : The default core size of these executors is 20; however, that can be configured using an application.yaml file as follows:">これらのエグゼキュータのデフォルトのコア・サイズは20ですが、次のように<code>application.yaml</code>ファイルを使用して構成できます:</span> </p>

<markup
lang="yaml"

>executor:
  core-pool-size: 32

scheduled-executor:
  core-pool-size: 32</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3ycTie" title="原文 : There is currently no support to configure these executor properties via a microprofile-config.properties file."><code>microprofile-config.properties</code>ファイルを介したこれらのエグゼキュータ・プロパティの構成は、現在<em>「サポートがありません」</em>。</span></p>
</div>

<p><span class="merged" id="all.3pwOpA" title="原文 : For a complete set of properties available to configure these executors, see ServerThreadPoolSupplier and ScheduledThreadPoolSupplier.">これらのエグゼキュータの構成に使用可能なプロパティの完全なセットは、<a href="./apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ThreadPoolSupplier.Builder.html#config(io.helidon.config.Config)" target="_blank">ServerThreadPoolSupplier</a>および<a href="./apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ScheduledThreadPoolSupplier.Builder.html#config(io.helidon.config.Config)" target="_blank">ScheduledThreadPoolSupplier</a>を参照してください。</span></p>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.2"  title="原文:: Examples">例</span></h2>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3Z7sQt.spl1" title="原文 : The method retryWithFallback shall be called at most 3 times, first call plus 2 retries, with a delay of 400 milliseconds between calls.">メソッド<code>retryWithFallback</code>は、コール間の遅延が400ミリ秒で、最初のコールと2回の再試行の3回でコールされます。</span> <span class="merged" id="all.3Z7sQt.spl2" title="原文 : If none of the calls is successful, the onFailure method shall be called as a fallback mechanism.">どのコールも成功しなかった場合、<code>onFailure</code>メソッドはフォールバック・メカニズムとしてコールされます。</span> 
<markup
lang="java"

>@Retry(maxRetries = 2, delay = 400L)
@Fallback(fallbackMethod = "onFailure")
String retryWithFallback() {
    //...
}</markup>

</li>
<li>
<span class="merged" id="all.3j0tnK.spl1" title="原文 : The method timedCircuitBreaker defines a rolling window of size 10 and a policy to open the circuit breaker after 4 or more failures occur in that window, and to transition back to half-open state after 3 consecutive and successful runs.">メソッド<code>timedCircuitBreaker</code>は、サイズ10の<em>「ローリング・ウィンドウ」</em>と、そのウィンドウで4つ以上の障害が発生した後に回路遮断器をオープンするポリシーを定義し、3回連続して成功した実行後に半オープン状態に戻します。</span> <span class="merged" id="all.3j0tnK.spl2" title="原文 : Additionally, it sets an overall timeout for the invocation of 1.5 seconds.">また、1.5秒の呼出しの全体的なタイムアウトを設定します。</span> 
<markup
lang="java"

>@Timeout(1500)
@CircuitBreaker(requestVolumeThreshold = 10,
                failureRatio = .4
                successThreshold = 3)
void timedCircuitBreaker() throws InterruptedException {
    //...
}</markup>

</li>
<li>
<span class="merged" id="all.2XajS2.spl1" title="原文 : The method executeWithQueueAndFallback defines a bulkhead that will limit the number of concurrent calls to a maximum of 2; any additional tasks shall be queued up to a maximum of 10.">メソッド<code>executeWithQueueAndFallback</code>は、同時コール数を最大2に制限するバルクヘッドを定義します。追加のタスクは最大10までキューに入れられます。</span> <span class="merged" id="all.2XajS2.spl2" title="原文 : Finally, if an error occurs the onFailure method shall be called as a fallback mechanism.">最後に、エラーが発生した場合、<code>onFailure</code>メソッドはフォールバック・メカニズムとしてコールされます。</span> <span class="merged" id="all.2XajS2.spl3" title="原文 : The @Asynchronous annotation is needed to enable queueing of bulkhead tasks.">バルクヘッド・タスクのキューイングを有効にするには、<code>@Asynchronous</code>注釈が必要です。</span> 
<markup
lang="java"

>@Asynchronous
@Fallback(fallbackMethod = "onFailure")
@Bulkhead(value = 2, waitingTaskQueue = 10)
CompletableFuture&lt;String&gt; executeWithQueueAndFallback() {
    //...
}</markup>

</li>
</ol>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.3"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.MCQ9D" title="原文 : For additional information about this API, see the MicroProfile Fault Tolerance Javadocs.">このAPIの詳細は、<a href="https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0/apidocs" target="_blank">「MicroProfileフォルト・トレランスJavadoc」</a>を参照してください。</span></p>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.2"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2JCfbE" title="原文 : MicroProfile Fault Tolerance"><a href="https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0/microprofile-fault-tolerance-spec-4.0.html}" target="_blank">MicroProfileフォルト・トレランス</a></span></p>

</li>
</ul>

</div>

</doc-view>
