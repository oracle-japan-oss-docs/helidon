<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.50"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.49" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.35" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.17" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.27" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.19" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.65"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.Ww4xF.spl1" title="原文 : Helidon Fault Tolerance support is inspired by MicroProfile Fault Tolerance.">Helidonフォルト・トレランスのサポートは、<a href="https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0.2/microprofile-fault-tolerance-spec-4.0.2.html" target="_blank">「MicroProfileフォルト・トレランス」</a>によってインスパイアされます。</span> <span class="merged" id="all.Ww4xF.spl2" title="原文 : The API defines the notion of a fault handler that can be combined with other handlers to improve application robustness.">APIは、アプリケーションの堅牢性を向上させるために他のハンドラと組み合せることができる<em>「フォルト・ハンドラ」</em>の概念を定義します。</span> <span class="merged" id="all.Ww4xF.spl3" title="原文 : Handlers are created to manage error conditions (faults) that may occur in real-world application environments.">ハンドラは、実際のアプリケーション環境で発生する可能性のあるエラー状態(フォルト)を管理するために作成されます。</span> <span class="merged" id="all.Ww4xF.spl4" title="原文 : Examples include service restarts, network delays, temporal infrastructure instabilities, etc.">たとえば、サービスの再起動、ネットワークの遅延、一時的なインフラストラクチャの不安定性などです。</span> </p>

<p><span class="merged" id="all.2kKcXO.spl1" title="原文 : The interaction of multiple microservices bring some new challenges from distributed systems that require careful planning.">複数のマイクロサービスの相互作用により、慎重な計画を必要とする分散システムからの新しい課題がもたらされます。</span> <span class="merged" id="all.2kKcXO.spl2" title="原文 : Faults in distributed systems should be compartmentalized to avoid unnecessary service interruptions.">分散システムの障害は、不要なサービス中断を回避するためにコンパートメント化する必要があります。</span> <span class="merged" id="all.2kKcXO.spl3" title="原文 : For example, if comparable information can be obtained from multiples sources, a user request should not be denied when a subset of these sources is unreachable or offline.">たとえば、複数のソースから同等の情報を取得できる場合、これらのソースのサブセットにアクセスできないかオフラインになると、ユーザー・リクエスト<em>「しないでください」</em>は拒否されます。</span> <span class="merged" id="all.2kKcXO.spl4" title="原文 : Similarly, if a non-essential source has been flagged as unreachable, an application should avoid continuous access to that source as that would result in much higher response times.">同様に、重要でないソースに到達不能のフラグが付けられている場合、アプリケーションでは、レスポンス時間が大幅に長くなるため、そのソースへの継続的なアクセスを回避する必要があります。</span> </p>

<p><span class="merged" id="all.4cw9cL.spl1" title="原文 : In order to tackle the most common types of application faults, the Helidon Fault Tolerance API provides support for circuit breakers, retries, timeouts, bulkheads and fallbacks.">最も一般的なタイプのアプリケーション・フォルトに対処するために、Helidonフォルト・トレランスAPIでは、回路遮断器、再試行、タイムアウト、バルクヘッドおよびフォールバックがサポートされています。</span> <span class="merged" id="all.4cw9cL.spl2" title="原文 : In addition, the API makes it very easy to create and monitor asynchronous tasks that do not require explicit creation and management of threads or executors.">また、このAPIを使用すると、スレッドやエグゼキュータの明示的な作成および管理を必要としない非同期タスクの作成と監視が非常に簡単になります。</span> </p>

<p><span class="merged" id="all.oV5bR" title="原文 : For more information, see Fault Tolerance API Javadocs.">詳細については、<a href="/apidocs/io.helidon.faulttolerance/module-summary.html" target="_blank">「フォルト・トレランスAPIのJavadoc」</a>を参照してください。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.43"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.17YoOv" title="原文 : To enable Fault Tolerance add the following dependency to your project’s pom.xml (see Managing Dependencies).">フォルト・トレランスを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.fault-tolerance&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-fault-tolerance&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.19"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.1l9zZl.spl1" title="原文 : The Fault Tolerance API is blocking and based on the JDK’s virtual thread model.">フォルト・トレランスAPIは、<em>「ブロッキング」</em>で、JDKの仮想スレッド・モデルに基づいています。</span> <span class="merged" id="all.1l9zZl.spl2" title="原文 : As a result, methods return direct values instead of promises in the form of Single&lt;T&gt; or Multi&lt;T&gt;.">その結果、メソッドは、<code>Single&lt;T></code>または<code>Multi&lt;T></code>の形式でpromiseのかわりに<em>「直接」</em>値を返します。</span> </p>

<p><span class="merged" id="all.34i5Nz" title="原文 : In the sections that follow, we shall briefly explore each of the constructs provided by this API.">後続のセクションでは、このAPIで提供される各構成について簡単に確認します。</span></p>


<h3 id="_retries"><span class="merged" id="all.mnrZK"  title="原文:: Retries">再試行</span></h3>
<div class="section">
<p><span class="merged" id="all.1pE5ix.spl1" title="原文 : Temporal networking problems can sometimes be mitigated by simply retrying a certain task.">一時的なネットワークの問題は、特定のタスクを再試行するだけで軽減できる場合があります。</span> <span class="merged" id="all.1pE5ix.spl2" title="原文 : A Retry handler is created using a RetryPolicy that indicates the number of retries, delay between retries, etc."><code>Retry</code>ハンドラは、再試行回数や再試行間の遅延などを示す<code>RetryPolicy</code>を使用して作成されます。</span> </p>

<markup
lang="java"

>Retry retry = Retry.builder()
                   .retryPolicy(Retry.JitterRetryPolicy.builder()
                                     .calls(3)
                                     .delay(Duration.ofMillis(100))
                                     .build())
                   .build();
T result = retry.invoke(this::retryOnFailure);</markup>

<p><span class="merged" id="all.3JsIf1" title="原文 : The sample code above will retry calls to the supplier this::retryOnFailure for up to 3 times with a 100 millisecond delay between them.">前述のサンプル・コードでは、サプライヤ<code>this::retryOnFailure</code>への呼出しが最大3回再試行され、その間に100ミリ秒の遅延が発生します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2KXHrm" title="原文 : The return type of method retryOnFailure in the example above must be some T and the parameter to the retry handler’s invoke method Supplier&lt;? extends T&gt;.">前述の例のメソッド<code>retryOnFailure</code>の戻り型は、<code>T</code>と、再試行ハンドラの<code>invoke</code>メソッド<code>Supplier&lt;? extends T></code>へのパラメータである必要があります。</span></p>
</div>

<p><span class="merged" id="all.2UumKr" title="原文 : If the call to the supplier provided completes exceptionally, it will be treated as a failure and retried until the maximum number of attempts is reached; finer control is possible by creating a retry policy and using methods such as applyOn(Class&lt;? extends Throwable&gt;…​ classes) and skipOn(Class&lt;? extends Throwable&gt;…​ classes) to control the exceptions that must be retried and those that must be ignored.">指定されたサプライヤへのコールが例外的に完了した場合は、失敗として扱われ、最大試行回数に達するまで再試行されます。再試行ポリシーを作成し、<code>applyOn(Class&lt;? extends Throwable>…​ classes)</code>や<code>skipOn(Class&lt;? extends Throwable>…​ classes)</code>などのメソッドを使用して再試行する必要がある例外と無視する必要がある例外を制御することで、より詳細な制御が可能になります。</span></p>

</div>


<h3 id="_timeouts"><span class="merged" id="all.4dDtFw"  title="原文:: Timeouts">タイムアウト</span></h3>
<div class="section">
<p><span class="merged" id="all.aiuBd.spl1" title="原文 : A request to a service that is inaccessible or simply unavailable should be bounded to ensure a certain quality of service and response time.">特定のサービス品質およびレスポンス時間を確保するには、アクセスできないサービスまたは使用できないサービスへのリクエストをバインドする必要があります。</span> <span class="merged" id="all.aiuBd.spl2" title="原文 : Timeouts can be configured to avoid excessive waiting times.">タイムアウトは、過剰な待機時間を回避するように構成できます。</span> <span class="merged" id="all.aiuBd.spl3" title="原文 : In addition, a fallback action can be defined if a timeout expires as we shall cover in the next section.">また、次の項で説明するように、タイムアウトが経過した場合のフォールバック・アクションを定義できます。</span> </p>

<p><span class="merged" id="all.4IpFoB" title="原文 : The following is an example of using Timeout:"><code>Timeout</code>の使用例を次に示します:</span></p>

<markup
lang="java"

>T result = Timeout.create(Duration.ofMillis(10))
                  .invoke(this::mayTakeVeryLong);</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.JoXaI" title="原文 : Using a handler’s create method is an alternative to using a builder that is more convenient when default settings are acceptable.">ハンドラの<code>create</code>メソッドを使用することは、デフォルト設定が許容可能な場合に便利なビルダーを使用することの代替方法です。</span></p>
</div>

<p><span class="merged" id="all.1oib6v" title="原文 : The example above monitors the call to method mayTakeVeryLong and reports a TimeoutException if the execution takes more than 10 milliseconds to complete.">前述の例では、メソッド<code>mayTakeVeryLong</code>へのコールを監視し、実行が完了するまでに10ミリ秒を超えた場合に<code>TimeoutException</code>をレポートします。</span></p>

</div>


<h3 id="_fallbacks"><span class="merged" id="all.1GDdu" title="原文 : Fallbacks">フォールバック</span></h3>
<div class="section">
<p><span class="merged" id="all.wiJnD.spl1" title="原文 : A fallback to a known result can sometimes be an alternative to reporting an error."><em>「既知」</em>の結果へのフォールバックは、エラーを報告するかわりになる場合があります。</span> <span class="merged" id="all.wiJnD.spl2" title="原文 : For example, if we are unable to access a service we may fall back to the last result obtained from that service at an earlier time.">たとえば、サービスにアクセスできない場合、以前の時点でそのサービスから取得された最後の結果に戻ることがあります。</span> </p>

<p><span class="merged" id="all.z2T5Z" title="原文 : A Fallback instance is created by providing a function that takes a Throwable and produces some T to be used when the intended method failed to return a value:"><code>Fallback</code>インスタンスは、<code>Throwable</code>をとり、目的のメソッドが値を返すことを失敗した場合に使用される<code>T</code>を生成するファンクションを提供することによって作成されます:</span></p>

<markup
lang="java"

>T result = Fallback.create(throwable -&gt; lastKnownValue)
                   .invoke(this::mayFail);</markup>

<p><span class="merged" id="all.4GeQgA" title="原文 : This example calls the method mayFail and if it produces a Throwable, it maps it to the last known value using the fallback handler.">この例では、メソッド<code>mayFail</code>をコールし、<code>Throwable</code>を生成する場合は、フォールバック・ハンドラを使用して、そのメソッドを最後に認識された値にマップします。</span></p>

</div>


<h3 id="_circuit_breakers"><span class="merged" id="all.QOwLk"  title="原文:: Circuit Breakers">ブレーカー</span></h3>
<div class="section">
<p><span class="merged" id="all.1olifH.spl1" title="原文 : Failing to execute a certain task or to call another service repeatedly can have a direct impact on application performance.">特定のタスクの実行または別のサービスの繰り返しコールに失敗すると、アプリケーションのパフォーマンスに直接影響する可能性があります。</span> <span class="merged" id="all.1olifH.spl2" title="原文 : It is often preferred to avoid calls to non-essential services by simply preventing that logic to execute altogether.">通常は、ロジックを完全に実行しないようにすることで、重要でないサービスへのコールを回避することをお薦めします。</span> <span class="merged" id="all.1olifH.spl3" title="原文 : A circuit breaker can be configured to monitor such calls and block attempts that are likely to fail, thus improving overall performance.">サーキット・ブレーカは、このような障害が発生する可能性が高い呼び出しやブロックの試行をモニターするように構成できるため、全体的なパフォーマンスが向上します。</span> </p>

<p><span class="merged" id="all.1v3mn3.spl1" title="原文 : Circuit breakers start in a closed state, letting calls to proceed normally; after detecting a certain number of errors during a pre-defined processing window, they can open to prevent additional failures.">ブレーカは<em>「クローズド」</em>状態で起動し、コールを正常に続行できます。事前定義済の処理ウィンドウ中に特定の数のエラーを検出した後、<em>「オープン」</em>して追加の障害を防止できます。</span> <span class="merged" id="all.1v3mn3.spl2" title="原文 : After a circuit has been opened, it can transition first to a half-open state before finally transitioning back to a closed state.">回路が開かれると、最終的に閉じた状態に戻る前に、まず<em>「半分オープン」</em>状態に遷移できます。</span> <span class="merged" id="all.1v3mn3.spl3" title="原文 : The use of an intermediate state (half-open) makes transitions from open to close more progressive, and prevents a circuit breaker from eagerly transitioning to states without considering sufficient observations.">中間状態(ハーフ・オープン)を使用すると、トランジションがオープンからクローズまでより進行的になり、十分な観測を考慮せずに回路遮断器がステートに熱心に移行するのを防ぎます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1UF1E1" title="原文 : Any failure while a circuit breaker is in half-open state will immediately cause it to transition back to an open state.">サーキット・ブレーカが半オープン状態のときに障害が発生すると、すぐにオープン状態に戻ります。</span></p>
</div>

<p><span class="merged" id="all.Ch2Tc" title="原文 : Consider the following example in which this::mayFail is monitored by a circuit breaker:"><code>this::mayFail</code>がサーキット・ブレーカによってモニターされる次の例を考えてみます:</span></p>

<markup
lang="java"

>CircuitBreaker breaker = CircuitBreaker.builder()
                                       .volume(10)
                                       .errorRatio(30)
                                       .delay(Duration.ofMillis(200))
                                       .successThreshold(2)
                                       .build();
T result = breaker.invoke(this::mayFail);</markup>

<p><span class="merged" id="all.17nyLk.spl1" title="原文 : The circuit breaker in this example defines a processing window of size 10, an error ratio of 30%, a duration to transition to half-open state of 200 milliseconds, and a success threshold to transition from half-open to closed state of 2 observations.">この例のブレーカでは、サイズ10の処理ウィンドウ、エラー率30%、半期オープン状態200ミリ秒に遷移する期間、および2つの監視の半期オープン状態からクローズ状態に遷移するための成功しきい値を定義します。</span> <span class="merged" id="all.17nyLk.spl2" title="原文 : It follows that,">次のようになります。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4dn5td" title="原文 : After completing the processing window, if at least 3 errors are detected, the circuit breaker will transition to the open state, thus blocking the execution of any subsequent calls.">処理ウィンドウの完了後、少なくとも3つのエラーが検出されると、サーキット・ブレーカはオープン状態に遷移するため、後続のコールの実行がブロックされます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1L4MRM" title="原文 : After 200 millis, the circuit breaker will transition back to half-open and allow calls to proceed again.">200ミリ秒後、サーキットブレーカはハーフ・オープンに戻り、通話を再開できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.45NkYS" title="原文 : If the next two calls after transitioning to half-open are successful, the circuit breaker will transition to closed state; otherwise, it will transition back to open state, waiting for another 200 milliseconds before attempting to transition to half-open again.">half-openへの移行後の次の2つのコールが成功すると、サーキット・ブレーカはclosed状態に遷移します。それ以外の場合は、再度open状態に遷移し、再度half-openへの遷移を試みる前に別の200ミリ秒間待機します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.43u3mk" title="原文 : A circuit breaker will throw a io.helidon.faulttolerance.CircuitBreakerOpenException if an attempt to make an invocation takes place while it is in open state.">サーキット・ブレーカは、オープン状態のときに起動しようとすると、<code>io.helidon.faulttolerance.CircuitBreakerOpenException</code>をスローします。</span></p>

</div>


<h3 id="_bulkheads"><span class="merged" id="all.4YTkC4" title="原文 : Bulkheads">バルクヘッド</span></h3>
<div class="section">
<p><span class="merged" id="all.40UlZB.spl1" title="原文 : Concurrent access to certain components may need to be limited to avoid excessive use of resources.">リソースの過剰な使用を避けるために、特定のコンポーネントへの同時アクセスを制限する必要がある場合があります。</span> <span class="merged" id="all.40UlZB.spl2" title="原文 : For example, if an invocation that opens a network connection is allowed to execute concurrently without any restriction, and if the service on the other end is slow responding, it is possible for the rate at which network connections are opened to exceed the maximum number of connections allowed.">たとえば、ネットワーク接続をオープンする呼出しが制限なしで同時に実行でき、他方の側のサービスの応答が遅い場合、ネットワーク接続をオープンする割合が許可されている最大接続数を超える可能性があります。</span> <span class="merged" id="all.40UlZB.spl3" title="原文 : Faults of this type can be prevented by guarding these invocations using a bulkhead.">このタイプのフォルトは、バルクヘッドを使用してこれらの呼出しを保護することで回避できます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1hw6s8.spl1" title="原文 : The origin of the name bulkhead comes from the partitions that comprise a ship’s hull."><em>「バルクヘッド」</em>という名前のオリジンは、船の船体を構成するパーティションから来ました。</span> <span class="merged" id="all.1hw6s8.spl2" title="原文 : If some partition is somehow compromised (e.g., filled with water) it can be isolated in a manner not to affect the rest of the hull.">一部のパーティションが何らかの損なわれた場合(水がいっぱいになった場合など)、船体の残りの部分に影響を与えないように分離できます。</span> </p>
</div>

<p><span class="merged" id="all.2hSpmT" title="原文 : A waiting queue can be associated with a bulkhead to handle tasks that are submitted when the bulkhead is already at full capacity.">待機キューをバルクヘッドに関連付けて、バルクヘッドがすでに一杯になったときに送信されるタスクを処理できます。</span></p>

<markup
lang="java"

>Bulkhead bulkhead = Bulkhead.builder()
                            .limit(3)
                            .queueLength(5)
                            .build();
T result = bulkhead.invoke(this::usesResources);</markup>

<p><span class="merged" id="all.36S4Cm.spl1" title="原文 : This example creates a bulkhead that limits concurrent execution to this:usesResources to at most 3, and with a queue of size 5.">この例では、<code>this:usesResources</code>の同時実行を最大3個のキュー(サイズ5)に制限するバルクヘッドを作成します。</span> <span class="merged" id="all.36S4Cm.spl2" title="原文 : The bulkhead will report a io.helidon.faulttolerance.BulkheadException if unable to proceed with the call: either due to the limit being reached or the queue being at maximum capacity.">コールを続行できない場合、バルクヘッドは<code>io.helidon.faulttolerance.BulkheadException</code>をレポートします: 制限に達しているか、キューが最大容量に達していることが原因です。</span> </p>

</div>


<h3 id="_asynchronous"><span class="merged" id="all.2fP71G"  title="原文:: Asynchronous">非同期</span></h3>
<div class="section">
<p><span class="merged" id="all.3pOA7r.spl1" title="原文 : Asynchronous tasks can be created or forked by using an Async instance.">非同期タスクは、<code>Async</code>インスタンスを使用して作成または分岐できます。</span> <span class="merged" id="all.3pOA7r.spl2" title="原文 : A supplier of type T is provided as the argument when invoking this handler.">このハンドラを呼び出すと、<code>T</code>タイプのサプライヤが引数として指定されます。</span> <span class="merged" id="all.3pOA7r.spl3"  title="原文:: For example:">例えば:</span> </p>

<markup
lang="java"

>CompletableFuture&lt;Thread&gt; cf = Async.create().invoke(Thread::currentThread));
cf.thenAccept(t -&gt; System.out.println("Async task executed in thread " + t));</markup>

<p><span class="merged" id="all.21BYk6" title="原文 : The supplier () → Thread.currentThread() is executed in a new thread and the value it produces printed by the consumer and passed to thenAccept.">サプライヤ<code>() → Thread.currentThread()</code>が新しいスレッドで実行され、生産された値がコンシューマによって出力されて<code>thenAccept</code>に渡されます。</span></p>

<p><span class="merged" id="all.3PrkN2.spl1" title="原文 : By default, asynchronous tasks are executed using a new virtual thread per task based on the ExecutorService defined in io.helidon.faulttolerance.FaultTolerance and configurable by an application.">デフォルトでは、非同期タスクは、<code>io.helidon.faulttolerance.FaultTolerance</code>に定義されている<code>ExecutorService</code>に基づいて<em>「タスクごとの新しい仮想スレッド」</em>を使用して実行され、アプリケーションによって構成可能です。</span> <span class="merged" id="all.3PrkN2.spl2" title="原文 : Alternatively, an ExecutorService can be specified when building a non-standard Async instance.">または、非標準の<code>Async</code>インスタンスを作成するときに、<code>ExecutorService</code>を指定できます。</span> </p>

</div>


<h3 id="_handler_composition"><span class="merged" id="all.1rX5yV" title="原文 : Handler Composition">ハンドラの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1DMURx.spl1" title="原文 : Method invocations can be guarded by any combination of the handlers presented above.">メソッドの呼出しは、前述のハンドラの任意の組合せで保護できます。</span> <span class="merged" id="all.1DMURx.spl2" title="原文 : For example, an invocation that times out can be retried a few times before resorting to a fallback value -assuming it never succeeds.">たとえば、タイムアウトした呼出しは、フォールバック値に再ソートする前に数回再試行でき、成功することはありません。</span> </p>

<p><span class="merged" id="all.2uqdYI" title="原文 : The easiest way to achieve handler composition is by using a builder in the FaultTolerance class as shown in the following example:">ハンドラの構成を実現する最も簡単な方法は、次の例に示すように、<code>FaultTolerance</code>クラスのビルダーを使用することです:</span></p>

<markup
lang="java"

>FaultTolerance.TypedBuilder&lt;T&gt; builder = FaultTolerance.typedBuilder();

Timeout timeout = Timeout.create(Duration.ofMillis(10));
builder.addTimeout(timeout);

Retry retry = Retry.builder()
                   .retryPolicy(Retry.JitterRetryPolicy.builder()
                                     .calls(3)
                                     .delay(Duration.ofMillis(100))
                                     .build())
                   .build();
builder.addRetry(retry);

Fallback&lt;T&gt; fallback = Fallback.create(throwable -&gt;lastKnownValue);
builder.addFallback(fallback);

T result = builder.build().invoke(this::mayTakeVeryLong);</markup>

<p><span class="merged" id="all.3EZzc8.spl1" title="原文 : The exact order in which handlers are added to a builder depends on the use case, but generally the order starting from innermost to outermost should be: bulkhead, timeout, circuit breaker, retry and fallback.">ハンドラがビルダーに追加される正確な順序はユースケースによって異なりますが、通常、最も内側から最も外側の順序は次のようになります: bulkhead、timeout、circuit breaker、retryおよびfallback。</span> <span class="merged" id="all.3EZzc8.spl2" title="原文 : That is, fallback is the first handler in the chain (the last to executed once a value is returned) and bulkhead is the last one (the first to be executed once a value is returned).">つまり、フォールバックはチェーン内の最初のハンドラ(値が戻されると最後に実行されるハンドラ)で、バルクヘッドは最後のハンドラ(値が戻されると最初に実行されるハンドラ)です。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3BzyR5" title="原文 : This is the ordering used by the MicroProfile Fault Tolerance implementation in Helidon when a method is decorated with multiple annotations.">これは、メソッドが複数の注釈で修飾されている場合に、HelidonのMicroProfileフォルト・トレランス実装で使用される順序です。</span></p>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.29"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.2jZvG5" title="原文 : See section for examples.">例については、<router-link @click.native="this.scrollFix('#_api')" to="#_api"></router-link>のセクションを参照してください。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.21"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.3Jrbpp" title="原文 : For additional information, see the Fault Tolerance API Javadocs.">詳細は、<a href="/apidocs/io.helidon.faulttolerance/module-summary.html" target="_blank">「フォルト・トレランスAPIのJavadoc」</a>を参照してください。</span></p>

</div>

</doc-view>
