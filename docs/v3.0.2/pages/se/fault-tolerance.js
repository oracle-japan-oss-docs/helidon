<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.45"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.43" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.31" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.17" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.25" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.27" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.18" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.59"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4aL5bE.spl1" title="原文 : Helidon SE Fault Tolerance support is inspired by MicroProfile Fault Tolerance.">Helidon SEフォルト・トレランスのサポートは、<a href="https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0/microprofile-fault-tolerance-spec-4.0.html" target="_blank">「MicroProfileフォルト・トレランス」</a>によって提供されます。</span> <span class="merged" id="all.4aL5bE.spl2" title="原文 : The API defines the notion of a fault handler that can be combined with other handlers to improve application robustness.">APIは、アプリケーションの堅牢性を向上させるために他のハンドラと組み合せることができる<em>「フォルト・ハンドラ」</em>の概念を定義します。</span> <span class="merged" id="all.4aL5bE.spl3" title="原文 : Handlers are created to manage error conditions (faults) that may occur in real-world application environments.">ハンドラは、実際のアプリケーション環境で発生する可能性のあるエラー状態(フォルト)を管理するために作成されます。</span> <span class="merged" id="all.4aL5bE.spl4" title="原文 : Examples include service restarts, network delays, temporal infrastructure instabilities, etc.">たとえば、サービスの再起動、ネットワークの遅延、一時的なインフラストラクチャの不安定性などです。</span> </p>

<p><span class="merged" id="all.2kKcXO.spl1" title="原文 : The interaction of multiple microservices bring some new challenges from distributed systems that require careful planning.">複数のマイクロサービスの相互作用により、慎重な計画を必要とする分散システムからの新しい課題がもたらされます。</span> <span class="merged" id="all.2kKcXO.spl2" title="原文 : Faults in distributed systems should be compartmentalized to avoid unnecessary service interruptions.">分散システムの障害は、不要なサービス中断を回避するためにコンパートメント化する必要があります。</span> <span class="merged" id="all.2kKcXO.spl3" title="原文 : For example, if comparable information can be obtained from multiples sources, a user request should not be denied when a subset of these sources is unreachable or offline.">たとえば、複数のソースから同等の情報を取得できる場合、これらのソースのサブセットにアクセスできないかオフラインになると、ユーザー・リクエスト<em>「しないでください」</em>は拒否されます。</span> <span class="merged" id="all.2kKcXO.spl4" title="原文 : Similarly, if a non-essential source has been flagged as unreachable, an application should avoid continuous access to that source as that would result in much higher response times.">同様に、重要でないソースに到達不能のフラグが付けられている場合、アプリケーションでは、レスポンス時間が大幅に長くなるため、そのソースへの継続的なアクセスを回避する必要があります。</span> </p>

<p><span class="merged" id="all.3PoTfM.spl1" title="原文 : In order to tackle the most common types of application faults, the Helidon SE Fault Tolerance API provides support for circuit breakers, retries, timeouts, bulkheads and fallbacks.">最も一般的なタイプのアプリケーション・フォルトに対応するために、Helidon SEフォルト・トレランスAPIは、回路遮断器、再試行、タイムアウト、バルクヘッドおよびフォールバックをサポートします。</span> <span class="merged" id="all.3PoTfM.spl2" title="原文 : In addition, the API makes it very easy to create and monitor asynchronous tasks that do not require explicit creation and management of threads or executors.">また、このAPIを使用すると、スレッドやエグゼキュータの明示的な作成および管理を必要としない非同期タスクの作成と監視が非常に簡単になります。</span> </p>

<p><span class="merged" id="all.2fJhar" title="原文 : For more information the reader is referred to the Fault Tolerance SE API Javadocs.">詳細は、<a href="./apidocs/io.helidon.faulttolerance/module-summary.html" target="_blank">「フォルト・トレランスSE API Javadoc」</a>を参照してください。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.41"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.17YoOv" title="原文 : To enable Fault Tolerance add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">フォルト・トレランスを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.fault-tolerance&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-fault-tolerance&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.19"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.2yatNG.spl1" title="原文 : The SE Fault Tolerance API is reactive in order to fit the overall processing model in Helidon SE.">SEフォルト・トレランスAPIは、Helidon SEの処理モデル全体に適合するために<em>「リアクティブ」</em>です。</span> <span class="merged" id="all.2yatNG.spl2" title="原文 : A task returns either a Single&lt;T&gt; or a Multi&lt;T&gt;.">タスクは、<code>Single&lt;T></code>または<code>Multi&lt;T></code>のいずれかを返します。</span> <span class="merged" id="all.2yatNG.spl3" title="原文 : A Single&lt;T&gt; is a promise to produce zero or one value of type T or signal an error; while a Multi&lt;T&gt; is a promise to produce zero or more values of type T or signal an error."><code>Single&lt;T></code>は、<code>T</code>型の0個または1つの値を生成するか、エラーを通知する約束です。一方、<code>Multi&lt;T></code>は、<code>T</code>型の0個以上の値を生成するか、エラーを通知します。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4qQFX" title="原文 : A Single&lt;T&gt;, like CompletableFuture&lt;T&gt;, extends CompletionStage&lt;T&gt; so conversion among these types is straightforward."><code>CompletableFuture&lt;T></code>のように<code>Single&lt;T></code>は<code>CompletionStage&lt;T></code>を拡張するため、これらのタイプ間の変換は簡単です。</span></p>
</div>

<p><span class="merged" id="all.34i5Nz" title="原文 : In the sections that follow, we shall briefly explore each of the constructs provided by this API.">後続のセクションでは、このAPIで提供される各構成について簡単に確認します。</span></p>


<h3 id="_asynchronous"><span class="merged" id="all.2fP71G"  title="原文:: Asynchronous">非同期</span></h3>
<div class="section">
<p><span class="merged" id="all.3pOA7r.spl1" title="原文 : Asynchronous tasks can be created or forked by using an Async instance.">非同期タスクは、<code>Async</code>インスタンスを使用して作成または分岐できます。</span> <span class="merged" id="all.3pOA7r.spl2" title="原文 : A supplier of type T is provided as the argument when invoking this handler.">このハンドラを呼び出すと、<code>T</code>タイプのサプライヤが引数として指定されます。</span> <span class="merged" id="all.3pOA7r.spl3"  title="原文:: For example:">次に例を示します。</span> </p>

<markup
lang="java"

>Single&lt;Thread&gt; s = Async.create().invoke(() -&gt; Thread.currentThread()));
s.thenAccept(t -&gt; System.out.println("Async task executed in thread " + t));</markup>

<p><span class="merged" id="all.21BYk6" title="原文 : The supplier () → Thread.currentThread() is executed in a new thread and the value it produces printed by the consumer and passed to thenAccept.">サプライヤ<code>() → Thread.currentThread()</code>が新しいスレッドで実行され、生産された値がコンシューマによって出力されて<code>thenAccept</code>に渡されます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3n9Zn8" title="原文 : The method reference Thread::currentThread is a simplified way of providing a supplier in the example above.">メソッド参照<code>Thread::currentThread</code>は、前述の例でサプライヤを提供する簡単な方法です。</span></p>
</div>

<p><span class="merged" id="all.3G2jM1.spl1" title="原文 : Asynchronous tasks are executed in a thread pool managed by the Helidon SE Fault Tolerance module.">非同期タスクは、Helidon SEフォルト・トレランス・モジュールによって管理されるスレッド・プールで実行されます。</span> <span class="merged" id="all.3G2jM1.spl2" title="原文 : Thread pools are created during the initialization phase of class io.helidon.faulttolerance.FaultTolerance and can be configured for your application.">スレッド・プールは、<code>io.helidon.faulttolerance.FaultTolerance</code>クラスの初期化フェーズで作成され、アプリケーション用に構成できます。</span> </p>

</div>


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
retry.invoke(this::retryOnFailure);</markup>

<p><span class="merged" id="all.3JsIf1" title="原文 : The sample code above will retry calls to the supplier this::retryOnFailure for up to 3 times with a 100 millisecond delay between them.">前述のサンプル・コードでは、サプライヤ<code>this::retryOnFailure</code>への呼出しが最大3回再試行され、その間に100ミリ秒の遅延が発生します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2uMwuj" title="原文 : The return type of method retryOnFailure in the example above must be CompletionStage&lt;T&gt; and the parameter to the retry handler&rsquo;s invoke method Supplier&lt;? extends CompletionStage&lt;T&gt;&gt;.">前述の例のメソッド<code>retryOnFailure</code>の戻り型は、<code>CompletionStage&lt;T></code>であり、再試行ハンドラの<code>invoke</code>メソッド<code>Supplier&lt;? extends CompletionStage&lt;T>></code>へのパラメータである必要があります。</span></p>
</div>

<p><span class="merged" id="all.2nVKBm" title="原文 : If the CompletionStage&lt;T&gt; returned by the method completes exceptionally, the call will be treated as a failure and retried until the maximum number of attempts is reached; finer control is possible by creating a retry policy and using methods such as applyOn(Class&lt;? extends Throwable&gt;…​ classes) and skipOn(Class&lt;? extends Throwable&gt;…​ classes) to control those exceptions on which to act and those that can be ignored.">メソッドによって返された<code>CompletionStage&lt;T></code>が例外的に完了した場合、呼出しは失敗として扱われ、最大試行回数に達するまで再試行されます。再試行ポリシーを作成し、<code>applyOn(Class&lt;? extends Throwable>…​ classes)</code>や<code>skipOn(Class&lt;? extends Throwable>…​ classes)</code>などのメソッドを使用して、処理対象の例外および無視できる例外を制御することで、より細かく制御できます。</span></p>

</div>


<h3 id="_timeouts"><span class="merged" id="all.4dDtFw"  title="原文:: Timeouts">タイムアウト</span></h3>
<div class="section">
<p><span class="merged" id="all.aiuBd.spl1" title="原文 : A request to a service that is inaccessible or simply unavailable should be bounded to ensure a certain quality of service and response time.">特定のサービス品質およびレスポンス時間を確保するには、アクセスできないサービスまたは使用できないサービスへのリクエストをバインドする必要があります。</span> <span class="merged" id="all.aiuBd.spl2" title="原文 : Timeouts can be configured to avoid excessive waiting times.">タイムアウトは、過剰な待機時間を回避するように構成できます。</span> <span class="merged" id="all.aiuBd.spl3" title="原文 : In addition, a fallback action can be defined if a timeout expires as we shall cover in the next section.">また、次の項で説明するように、タイムアウトが経過した場合のフォールバック・アクションを定義できます。</span> </p>

<p><span class="merged" id="all.4IpFoB" title="原文 : The following is an example of using Timeout:"><code>Timeout</code>の使用例を次に示します:</span></p>

<markup
lang="java"

>Single&lt;T&gt; s = Timeout.create(Duration.ofMillis(10)).invoke(this::mayTakeVeryLong);
s.handle((t, e) -&gt; {
    if (e instanceof TimeoutException) {
        // Invocation has timed out!
    }
    //...
});</markup>

<p><span class="merged" id="all.1oib6v" title="原文 : The example above monitors the call to method mayTakeVeryLong and reports a TimeoutException if the execution takes more than 10 milliseconds to complete.">前述の例では、メソッド<code>mayTakeVeryLong</code>へのコールを監視し、実行が完了するまでに10ミリ秒を超えた場合に<code>TimeoutException</code>をレポートします。</span></p>

</div>


<h3 id="_fallbacks"><span class="merged" id="all.1GDdu" title="原文 : Fallbacks">フォールバック</span></h3>
<div class="section">
<p><span class="merged" id="all.2zRfA.spl1" title="原文 : A fallback to a known result can sometimes be an alternative to reporting an error."><em>「既知」</em>の結果へのフォールバックは、エラーを報告するかわりになる場合があります。</span> <span class="merged" id="all.2zRfA.spl2" title="原文 : For example, if we are unable to access a service we may fall back to the last result obtained from that service.">たとえば、サービスにアクセスできない場合、そのサービスから取得した最後の結果に戻ることができます。</span> </p>

<p><span class="merged" id="all.32CYs6" title="原文 : A Fallback instance is created by providing a function that takes a Throwable and produces a CompletionStage&lt;T&gt; as shown next:"><code>Fallback</code>インスタンスを作成するには、次に示すように、<code>Throwable</code>を使用して<code>CompletionStage&lt;T></code>を生産する関数を指定します:</span></p>

<markup
lang="java"

>Single&lt;T&gt; single = Fallback.create(
    throwable -&gt; Single.just(lastKnownValue).invoke(this::mayFail);
single.thenAccept(t -&gt; {
    //...
});</markup>

<p><span class="merged" id="all.2vPkeq" title="原文 : In this example, we register a function that can produce a Single&lt;T&gt; (which implements CompletionStage&lt;T&gt;) if the call to this::mayFail completes exceptionally.">この例では、<code>this::mayFail</code>へのコールが例外的に完了した場合に、(<code>CompletionStage&lt;T></code>を実装する) <code>Single&lt;T></code>を生産できる関数を登録します。</span></p>

</div>


<h3 id="_circuit_breakers"><span class="merged" id="all.QOwLk"  title="原文:: Circuit Breakers">ブレーカー</span></h3>
<div class="section">
<p><span class="merged" id="all.2STbMd.spl1" title="原文 : Failing to execute a certain task or call another service repeatedly can have a direct impact on application performance.">特定のタスクの実行または別のサービスの繰返しコールに失敗すると、アプリケーションのパフォーマンスに直接影響する可能性があります。</span> <span class="merged" id="all.2STbMd.spl2" title="原文 : It is often preferred to avoid calls to non-essential services by simply preventing that logic to execute altogether.">通常は、ロジックを完全に実行しないようにすることで、重要でないサービスへのコールを回避することをお薦めします。</span> <span class="merged" id="all.2STbMd.spl3" title="原文 : A circuit breaker can be configured to monitor such calls and block attempts that are likely to fail, thus improving overall performance.">サーキット・ブレーカは、このような障害が発生する可能性が高い呼び出しやブロックの試行をモニターするように構成できるため、全体的なパフォーマンスが向上します。</span> </p>

<p><span class="merged" id="all.2iaPUL.spl1" title="原文 : Circuit breakers start in a closed state, letting calls to proceed normally; after detecting a certain number of errors during a pre-defined processing window, they can open to prevent additional failures.">ブレーカは<em>「クローズド」</em>状態で起動し、コールを正常に続行できます。事前定義済の処理ウィンドウ中に特定の数のエラーを検出した後、<em>「オープン」</em>して追加の障害を防止できます。</span> <span class="merged" id="all.2iaPUL.spl2" title="原文 : After a circuit has been opened, it can transition first to a half-open state before finally transitioning back to a closed state.">回路が開かれると、最終的に閉じた状態に戻る前に、まず<em>「半分オープン」</em>状態に遷移できます。</span> <span class="merged" id="all.2iaPUL.spl3" title="原文 : The use of an intermediate state (half-open) makes transitions from open to close more progressive, and prevents a circuit breaker from eagerly transitioning to states without considering &quot;sufficient&quot; observations.">中間状態(ハーフ・オープン)を使用すると、遷移がオープンからクローズになり、サーキット・ブレーカが「十分な」観測値を考慮せずに状態に即時遷移するのを防ぎます。</span> </p>

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
Single&lt;T&gt; result = breaker.invoke(this::mayFail);</markup>

<p><span class="merged" id="all.17nyLk.spl1" title="原文 : The circuit breaker in this example defines a processing window of size 10, an error ratio of 30%, a duration to transition to half-open state of 200 milliseconds, and a success threshold to transition from half-open to closed state of 2 observations.">この例のブレーカでは、サイズ10の処理ウィンドウ、エラー率30%、半期オープン状態200ミリ秒に遷移する期間、および2つの監視の半期オープン状態からクローズ状態に遷移するための成功しきい値を定義します。</span> <span class="merged" id="all.17nyLk.spl2" title="原文 : It follows that,">次のようになります。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3VTovU" title="原文 : After completing the processing window, if at least 3 errors were detected, the circuit breaker will transition to the open state, thus blocking the execution of any subsequent calls.">処理ウィンドウの完了後、少なくとも3つのエラーが検出された場合、サーキット・ブレーカはopen状態に遷移し、後続の呼び出しの実行をブロックします。</span></p>

</li>
<li>
<p><span class="merged" id="all.3bz1B7" title="原文 : After 200 millis, the circuit breaker will transition back to half-open and enable calls to proceed again.">200ミリ秒後、サーキット・ブレーカは半開に戻り、呼び出しを再度実行できるようになります。</span></p>

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
<p class="admonition-inline"><span class="merged" id="all.1hw6s8.spl1" title="原文 : The origin of the name bulkhead comes from the partitions that comprise a ship&rsquo;s hull."><em>「バルクヘッド」</em>という名前のオリジンは、船の船体を構成するパーティションから来ました。</span> <span class="merged" id="all.1hw6s8.spl2" title="原文 : If some partition is somehow compromised (e.g., filled with water) it can be isolated in a manner not to affect the rest of the hull.">一部のパーティションが何らかの損なわれた場合(水がいっぱいになった場合など)、船体の残りの部分に影響を与えないように分離できます。</span> </p>
</div>

<p><span class="merged" id="all.2hSpmT" title="原文 : A waiting queue can be associated with a bulkhead to handle tasks that are submitted when the bulkhead is already at full capacity.">待機キューをバルクヘッドに関連付けて、バルクヘッドがすでに一杯になったときに送信されるタスクを処理できます。</span></p>

<markup
lang="java"

>Bulkhead bulkhead = Bulkhead.builder()
                            .limit(3)
                            .queueLength(5)
                            .build();
Single&lt;T&gt; single = bulkhead.invoke(this::usesResources);</markup>

<p><span class="merged" id="all.36S4Cm.spl1" title="原文 : This example creates a bulkhead that limits concurrent execution to this:usesResources to at most 3, and with a queue of size 5.">この例では、<code>this:usesResources</code>の同時実行を最大3個のキュー(サイズ5)に制限するバルクヘッドを作成します。</span> <span class="merged" id="all.36S4Cm.spl2" title="原文 : The bulkhead will report a io.helidon.faulttolerance.BulkheadException if unable to proceed with the call: either due to the limit being reached or the queue being at maximum capacity.">コールを続行できない場合、バルクヘッドは<code>io.helidon.faulttolerance.BulkheadException</code>をレポートします: 制限に達しているか、キューが最大容量に達していることが原因です。</span> </p>

</div>


<h3 id="_handler_composition"><span class="merged" id="all.1rX5yV" title="原文 : Handler Composition">ハンドラの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1DMURx.spl1" title="原文 : Method invocations can be guarded by any combination of the handlers presented above.">メソッドの呼出しは、前述のハンドラの任意の組合せで保護できます。</span> <span class="merged" id="all.1DMURx.spl2" title="原文 : For example, an invocation that times out can be retried a few times before resorting to a fallback value -assuming it never succeeds.">たとえば、タイムアウトした呼出しは、フォールバック値に再ソートする前に数回再試行でき、成功することはありません。</span> </p>

<p><span class="merged" id="all.2uqdYI" title="原文 : The easiest way to achieve handler composition is by using a builder in the FaultTolerance class as shown in the following example:">ハンドラの構成を実現する最も簡単な方法は、次の例に示すように、<code>FaultTolerance</code>クラスのビルダーを使用することです:</span></p>

<markup
lang="java"

>FaultTolerance.TypedBuilder&lt;T&gt; builder = FaultTolerance.typedBuilder();

// Create and add timeout
Timeout timeout = Timeout.create(Duration.ofMillis(10));
builder.addTimeout(timeout);

// Create and add retry
Retry retry = Retry.builder()
                   .retryPolicy(Retry.JitterRetryPolicy.builder()
                                     .calls(3)
                                     .delay(Duration.ofMillis(100))
                                     .build())
                   .build();
builder.addRetry(retry);

// Create and add fallback
Fallback fallback = Fallback.create(throwable -&gt; Single.just(lastKnownValue));
builder.addFallback(fallback);

// Finally call the method
Single&lt;T&gt; single = builder.build().invoke(this::mayTakeVeryLong);</markup>

<p><span class="merged" id="all.3EZzc8.spl1" title="原文 : The exact order in which handlers are added to a builder depends on the use case, but generally the order starting from innermost to outermost should be: bulkhead, timeout, circuit breaker, retry and fallback.">ハンドラがビルダーに追加される正確な順序はユースケースによって異なりますが、通常、最も内側から最も外側の順序は次のようになります: bulkhead、timeout、circuit breaker、retryおよびfallback。</span> <span class="merged" id="all.3EZzc8.spl2" title="原文 : That is, fallback is the first handler in the chain (the last to executed once a value is returned) and bulkhead is the last one (the first to be executed once a value is returned).">つまり、フォールバックはチェーン内の最初のハンドラ(値が戻されると最後に実行されるハンドラ)で、バルクヘッドは最後のハンドラ(値が戻されると最初に実行されるハンドラ)です。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3BzyR5" title="原文 : This is the ordering used by the MicroProfile Fault Tolerance implementation in Helidon when a method is decorated with multiple annotations.">これは、メソッドが複数の注釈で修飾されている場合に、HelidonのMicroProfileフォルト・トレランス実装で使用される順序です。</span></p>
</div>

</div>


<h3 id="_revisiting_multis"><span class="merged" id="all.2X5G6f" title="原文 : Revisiting Multi&rsquo;s">複数の再訪問</span></h3>
<div class="section">
<p><span class="merged" id="all.3xuPW.spl1" title="原文 : All the examples presented so far have focused on invocations returning a single value of type Single&lt;T&gt;.">これまでに説明したすべての例では、<code>Single&lt;T></code>型の単一の値を返す呼出しに焦点を当てています。</span> <span class="merged" id="all.3xuPW.spl2" title="原文 : If the invocation in question can return more than one value (i.e., a Multi&lt;T&gt;) then all that is needed is to use the method invokeMulti instead of invoke.">問題の呼出しで複数の値(<code>Multi&lt;T></code>など)が返される可能性がある場合、必要なのは<code>invoke</code>ではなく<code>invokeMulti</code>メソッドを使用することのみです。</span> <span class="merged" id="all.3xuPW.spl3" title="原文 : The supplier passed to this method must return a Flow.Publisher&lt;T&gt; instead of a CompletionStage&lt;T&gt;.">このメソッドに渡されるサプライヤは、<code>CompletionStage&lt;T></code>ではなく<code>Flow.Publisher&lt;T></code>を返す必要があります。</span> </p>

<p><span class="merged" id="all.4fnp2i.spl1" title="原文 : A Flow.Publisher&lt;T&gt; is a generalization of a Single&lt;T&gt; that can produce zero or more values."><code>Flow.Publisher&lt;T></code>は、ゼロ個以上の値を生産できる<code>Single&lt;T></code>の汎化です。</span> <span class="merged" id="all.4fnp2i.spl2" title="原文 : Note that a Flow.Publisher&lt;T&gt;, unlike a Single&lt;T&gt;, can report an error after producing one or more values, introducing additional challenges if all values must be processed transactionally, that is, in an all or nothing manner."><code>Flow.Publisher&lt;T></code>は、<code>Single&lt;T></code>とは異なり、1つ以上の値を生産した後にエラーを報告し、すべての値をトランザクションで処理する必要がある場合、つまりまったく処理しない場合に追加の課題を引き起こす可能性があります。</span> </p>

<p><span class="merged" id="all.2nS16e" title="原文 : The following example creates an instance of Retry and invokes the invokeMulti method, it then registers a subscriber to process the results:">次の例では、<code>Retry</code>のインスタンスを作成し、<code>invokeMulti</code>メソッドを起動して、結果を処理するサブスクライバをサブスクライブします:</span></p>

<markup
lang="java"

>Retry retry = Retry.builder()
                   .retryPolicy(Retry.JitterRetryPolicy.builder()
                                     .calls(2)
                                     .build())
                   .build();
Multi&lt;Integer&gt; multi = retry.invokeMulti(() -&gt; Multi.just(0, 1, 2));

IntSubscriber ts = new IntSubscriber();
multi.subscribe(ts);
ts.request(Integer.MAX_VALUE);</markup>

<p><span class="merged" id="all.tpGF8.spl1" title="原文 : The call to Multi.just(0, 1, 2) simply returns a multi that produces the integers 0, 1 and 2."><code>Multi.just(0, 1, 2)</code>へのコールでは、整数0、1および2を生産するマルチが戻されます。</span> <span class="merged" id="all.tpGF8.spl2" title="原文 : If an error was generated during this process, the policy will retry the call one more time -for a total of 2 calls.">このプロセス中にエラーが生成された場合は、ポリシーによってコールが再度試行されます(合計2コール)。</span> </p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.30"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3jMnLL.spl1" title="原文 : Each Fault Tolerance handler can be individually configured at build time.">各フォルト・トレランス・ハンドラは、ビルド時に個別に構成できます。</span> <span class="merged" id="all.3jMnLL.spl2" title="原文 : This is supported by calling the config method on the corresponding builder and specifying a config element.">これは、対応するビルダーで<code>config</code>メソッドをコールし、構成要素を指定することでサポートされます。</span> <span class="merged" id="all.3jMnLL.spl3" title="原文 : For example, a Timeout handler can be externally configured as follows:">たとえば、<code>Timeout</code>ハンドラは、次のように外部で構成できます:</span> </p>

<markup
lang="java"

>   Timeout timeout = Timeout.builder()
           .config(config.get("timeout"))
           .build();</markup>

<p><span class="merged" id="all.drEfM" title="原文 : and using the following config entry:">次の構成エントリを使用します:</span></p>

<markup
lang="yaml"

>timeout:
  timeout: "PT20S"
  current-thread: true
  name: "MyTimeout"
  cancel-source: false</markup>

<p><span class="merged" id="all.3j2Sib.spl1" title="原文 : Note that the actual timeout value is of type Duration, hence the use of PT20S that represents a timeout of 20 seconds.">実際のタイムアウト値は<code>Duration</code>タイプであるため、タイムアウト20秒を表す<code>PT20S</code>を使用します。</span> <span class="merged" id="all.3j2Sib.spl2" title="原文 : See the Javadoc for the Duration class for more information.">詳細は、<code>Duration</code>クラスのJavadocを参照してください。</span> </p>

<p><span class="merged" id="all.4LKp8Q" title="原文 : The following tables list all the config elements for each type of handler supported by this API.">次の表に、このAPIでサポートされている各タイプのハンドラのすべての構成要素を示します。</span></p>


<h3 id="_timeout"><span class="merged" id="all.1RgDyI"  title="原文:: Timeout">タイムアウト</span></h3>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.261WC8.2"  title="原文:: Property">プロパティ</span></td>
<td class=""><span class="merged" id="all.p0YxL.8"  title="原文:: Type">タイプ</span></td>
<td class=""><span class="merged" id="all.4JM9z7.29"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1isw0k.1"  title="原文:: name">name</span></td>
<td class=""><span class="merged" id="all.2nneiF.2"  title="原文:: String">文字列</span></td>
<td class=""><span class="merged" id="all.h9mwm.spl1" title="原文 : A name given to the task for debugging purposes.">デバッグのためにタスクに指定された名前。</span> <span class="merged" id="all.h9mwm.spl2" title="原文 : Default is Timeout-N.">デフォルトは<code>Timeout-N</code>です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Ml17q.2"  title="原文:: timeout">timeout</span></td>
<td class=""><span class="merged" id="all.2KNkAg.13"  title="原文:: Duration">期間</span></td>
<td class=""><span class="merged" id="all.3sABmF.spl1" title="原文 : The timeout length as a Duration string.">期間文字列としてのタイムアウト長。</span> <span class="merged" id="all.3sABmF.spl2" title="原文 : Default is PT10S or 10 seconds.">デフォルトは<code>PT10S</code>または10秒です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1PYnNv" title="原文 : current-thread">current-thread</span></td>
<td class=""><span class="merged" id="all.2XHIO8.161"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.48Bkcg.spl1" title="原文 : A flag indicating whether the task should execute in the current thread or not.">タスクを現在のスレッドで実行するかどうかを示すフラグ。</span> <span class="merged" id="all.48Bkcg.spl2"  title="原文:: Default is false.">デフォルトは<code>false</code>です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4DXkZn" title="原文 : cancel-source">cancel-source</span></td>
<td class=""><span class="merged" id="all.2XHIO8.162"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.3rx49k.spl1" title="原文 : A flag indicating if this task&rsquo;s source should be cancelled if the task is cancelled.">タスクが取り消された場合に、このタスクのソースを取り消すかどうかを示すフラグ。</span> <span class="merged" id="all.3rx49k.spl2"  title="原文:: Default is true.">デフォルトは<code>true</code>です。</span> </td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_circuit_breaker"><span class="merged" id="all.4Xncfz"  title="原文:: Circuit Breaker">ブレーカ</span></h3>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.261WC8.3"  title="原文:: Property">プロパティ</span></td>
<td class=""><span class="merged" id="all.p0YxL.9"  title="原文:: Type">タイプ</span></td>
<td class=""><span class="merged" id="all.4JM9z7.30"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1isw0k.2"  title="原文:: name">name</span></td>
<td class=""><span class="merged" id="all.2nneiF.3"  title="原文:: String">文字列</span></td>
<td class=""><span class="merged" id="all.4Pdr12.spl1" title="原文 : A name given to the task for debugging purposes.">デバッグのためにタスクに指定された名前。</span> <span class="merged" id="all.4Pdr12.spl2" title="原文 : Default is CircuitBreaker-N.">デフォルトは<code>CircuitBreaker-N</code>です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Gmshv"  title="原文:: delay">delay</span></td>
<td class=""><span class="merged" id="all.2KNkAg.14"  title="原文:: Duration">期間</span></td>
<td class=""><span class="merged" id="all.2KDVmT.spl1" title="原文 : Delay to transition from half-open state."><em>「半分オープン」</em>状態からの遷移に遅延します。</span> <span class="merged" id="all.2KDVmT.spl2" title="原文 : Default is PT5S or 5 seconds.">デフォルトは<code>PT5S</code>または5秒です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jtEWl" title="原文 : error-ratio">error-ratio</span></td>
<td class=""><span class="merged" id="all.N4Pvl.65"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.aSL6W.spl1" title="原文 : Failure percentage to transition to open state."><em>「オープン」</em>状態に移行する失敗率。</span> <span class="merged" id="all.aSL6W.spl2"  title="原文:: Default is 60.">デフォルトは60です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3OjjUk"  title="原文:: volume">volume</span></td>
<td class=""><span class="merged" id="all.N4Pvl.66"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.1Qd0Gd.spl1" title="原文 : Size of rolling window to calculate ratios.">比率を計算するためのローリング・ウィンドウのサイズ。</span> <span class="merged" id="all.1Qd0Gd.spl2" title="原文 : Size is 10.">サイズは10です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uC434" title="原文 : success-threshold">success-threshold</span></td>
<td class=""><span class="merged" id="all.N4Pvl.67"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.1kUWiE.spl1" title="原文 : Number of successful calls to transition to closed state."><em>「クローズド」</em>状態に移行する成功したコールの数。</span> <span class="merged" id="all.1kUWiE.spl2"  title="原文:: Default is 1.">デフォルトは1です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4DXkZn.1" title="原文 : cancel-source">cancel-source</span></td>
<td class=""><span class="merged" id="all.2XHIO8.163"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.3rx49k.1.spl1" title="原文 : A flag indicating if this task&rsquo;s source should be cancelled if the task is cancelled.">タスクが取り消された場合に、このタスクのソースを取り消すかどうかを示すフラグ。</span> <span class="merged" id="all.3rx49k.1.spl2"  title="原文:: Default is true.">デフォルトは<code>true</code>です。</span> </td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_bulkhead"><span class="merged" id="all.34Mame" title="原文 : Bulkhead">バルクヘッド</span></h3>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.261WC8.4"  title="原文:: Property">プロパティ</span></td>
<td class=""><span class="merged" id="all.p0YxL.10"  title="原文:: Type">タイプ</span></td>
<td class=""><span class="merged" id="all.4JM9z7.31"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Krit6.2"  title="原文:: limit">limit</span></td>
<td class=""><span class="merged" id="all.N4Pvl.68"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.2VXOoO.spl1" title="原文 : Max number of parallel calls.">パラレル・コールの最大数。</span> <span class="merged" id="all.2VXOoO.spl2"  title="原文:: Default is 10.">デフォルトは10です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1isw0k.3"  title="原文:: name">name</span></td>
<td class=""><span class="merged" id="all.2nneiF.4"  title="原文:: String">文字列</span></td>
<td class=""><span class="merged" id="all.1MLyp2.spl1" title="原文 : A name given to the task for debugging purposes.">デバッグのためにタスクに指定された名前。</span> <span class="merged" id="all.1MLyp2.spl2" title="原文 : Default is Bulkhead-N.">デフォルトは<code>Bulkhead-N</code>です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1B8rM1"  title="原文:: queue-length">queue-length</span></td>
<td class=""><span class="merged" id="all.N4Pvl.69"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.1aN7Wm.spl1" title="原文 : Length of queue for tasks waiting to enter.">入力待機中のタスクのキューの長さ。</span> <span class="merged" id="all.1aN7Wm.spl2"  title="原文:: Default is 10.">デフォルトは10です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4DXkZn.2" title="原文 : cancel-source">cancel-source</span></td>
<td class=""><span class="merged" id="all.2XHIO8.164"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.3rx49k.2.spl1" title="原文 : A flag indicating if this task&rsquo;s source should be cancelled if the task is cancelled.">タスクが取り消された場合に、このタスクのソースを取り消すかどうかを示すフラグ。</span> <span class="merged" id="all.3rx49k.2.spl2"  title="原文:: Default is true.">デフォルトは<code>true</code>です。</span> </td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_retry"><span class="merged" id="all.4NVjPj"  title="原文:: Retry">再試行</span></h3>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.261WC8.5"  title="原文:: Property">プロパティ</span></td>
<td class=""><span class="merged" id="all.p0YxL.11"  title="原文:: Type">タイプ</span></td>
<td class=""><span class="merged" id="all.4JM9z7.32"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1isw0k.4"  title="原文:: name">name</span></td>
<td class=""><span class="merged" id="all.2nneiF.5"  title="原文:: String">文字列</span></td>
<td class=""><span class="merged" id="all.111QpH.spl1" title="原文 : A name given to the task for debugging purposes.">デバッグのためにタスクに指定された名前。</span> <span class="merged" id="all.111QpH.spl2" title="原文 : Default is Retry-N.">デフォルトは<code>Retry-N</code>です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2lMVGr" title="原文 : overall-timeout">overall-timeout</span></td>
<td class=""><span class="merged" id="all.2KNkAg.15"  title="原文:: Duration">期間</span></td>
<td class=""><span class="merged" id="all.zg6IL.spl1" title="原文 : Timeout for overall retry execution.">全体の再試行実行のタイムアウト。</span> <span class="merged" id="all.zg6IL.spl2" title="原文 : Default is PT1S or 1 second.">デフォルトは<code>PT1S</code>または1秒です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.23j4Yi" title="原文 : delaying-retry-policy">delaying-retry-policy</span></td>
<td class=""><span class="merged" id="all.3rjwSI.3"  title="原文:: Config">構成</span></td>
<td class=""><span class="merged" id="all.3cRwT3" title="原文 : Config section describing delaying retry policy (see below).">再試行の遅延ポリシーについて説明している構成セクション(次を参照)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3uVxD7" title="原文 : jitter-retry-policy">jitter-retry-policy</span></td>
<td class=""><span class="merged" id="all.3rjwSI.4"  title="原文:: Config">構成</span></td>
<td class=""><span class="merged" id="all.1T2Gv8" title="原文 : Config section describing jitter retry policy (see below)">jitter再試行ポリシーについて説明している構成セクション(次を参照)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4DXkZn.3" title="原文 : cancel-source">cancel-source</span></td>
<td class=""><span class="merged" id="all.2XHIO8.165"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.3rx49k.3.spl1" title="原文 : A flag indicating if this task&rsquo;s source should be cancelled if the task is cancelled.">タスクが取り消された場合に、このタスクのソースを取り消すかどうかを示すフラグ。</span> <span class="merged" id="all.3rx49k.3.spl2"  title="原文:: Default is true.">デフォルトは<code>true</code>です。</span> </td>
</tr>
</tbody>
</table>
</div>


<h4 id="_delaying_retry_policy"><span class="merged" id="all.44z8FE" title="原文 : Delaying Retry Policy">再試行ポリシーの遅延</span></h4>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.261WC8.6"  title="原文:: Property">プロパティ</span></td>
<td class=""><span class="merged" id="all.p0YxL.12"  title="原文:: Type">タイプ</span></td>
<td class=""><span class="merged" id="all.4JM9z7.33"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.40F8Yh"  title="原文:: calls">コール</span></td>
<td class=""><span class="merged" id="all.N4Pvl.70"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.MG28J.spl1"  title="原文:: Number of retry attempts.">試行回数。</span> <span class="merged" id="all.MG28J.spl2"  title="原文:: Default is 3.">デフォルトは3です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Gmshv.1"  title="原文:: delay">delay</span></td>
<td class=""><span class="merged" id="all.2KNkAg.16"  title="原文:: Duration">期間</span></td>
<td class=""><span class="merged" id="all.1u383e.spl1" title="原文 : Delay between retries.">再試行間の遅延。</span> <span class="merged" id="all.1u383e.spl2" title="原文 : Default is PT0.2S or 200 milliseconds.">デフォルトは<code>PT0.2S</code>または200ミリ秒です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EB7zr" title="原文 : delay-factor">delay-factor</span></td>
<td class=""><span class="merged" id="all.40Xztn.1"  title="原文:: double">double</span></td>
<td class=""><span class="merged" id="all.1XYkQD" title="原文 : A delay multiplication factor applied after each retry.">各再試行後に適用される遅延乗算係数。</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_jitter_retry_policy"><span class="merged" id="all.3hs5lF" title="原文 : Jitter Retry Policy">ジッター再試行ポリシー</span></h4>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.261WC8.7"  title="原文:: Property">プロパティ</span></td>
<td class=""><span class="merged" id="all.p0YxL.13"  title="原文:: Type">タイプ</span></td>
<td class=""><span class="merged" id="all.4JM9z7.34"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.40F8Yh.1"  title="原文:: calls">コール</span></td>
<td class=""><span class="merged" id="all.N4Pvl.71"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.MG28J.1.spl1"  title="原文:: Number of retry attempts.">試行回数。</span> <span class="merged" id="all.MG28J.1.spl2"  title="原文:: Default is 3.">デフォルトは3です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Gmshv.2"  title="原文:: delay">delay</span></td>
<td class=""><span class="merged" id="all.2KNkAg.17"  title="原文:: Duration">期間</span></td>
<td class=""><span class="merged" id="all.1u383e.1.spl1" title="原文 : Delay between retries.">再試行間の遅延。</span> <span class="merged" id="all.1u383e.1.spl2" title="原文 : Default is PT0.2S or 200 milliseconds.">デフォルトは<code>PT0.2S</code>または200ミリ秒です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2t1LyI"  title="原文:: jitter">Jitter;ジッター</span></td>
<td class=""><span class="merged" id="all.2KNkAg.18"  title="原文:: Duration">期間</span></td>
<td class=""><span class="merged" id="all.nFizc" title="原文 : A random delay additive factor in the range [-jitter, +jitter] applied after each retry.">再試行のたびに適用された<code>[-jitter, +jitter]</code>範囲のランダムな遅延加算係数。</span></td>
</tr>
</tbody>
</table>
</div>

</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.30"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.2jZvG5" title="原文 : See section for examples.">例については、<router-link @click.native="this.scrollFix('#_api')" to="#_api"></router-link>のセクションを参照してください。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.20"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.1VeSBl" title="原文 : For additional information, see the Fault Tolerance SE API Javadocs.">詳細は、<a href="./apidocs/io.helidon.faulttolerance/module-summary.html" target="_blank">「フォルト・トレランスSE API Javadoc」</a>を参照してください。</span></p>

</div>

</doc-view>
