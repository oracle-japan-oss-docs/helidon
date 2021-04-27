<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_request_handling"><span class="merged" id="all.1A8h5x"  title="原文:: Request Handling">リクエスト処理</span></h2>
<div class="section">
<p><span class="merged" id="all.3H3gY8.spl1" title="原文 : Implement the logic to handle requests to WebServer in a Handler, which is a FunctionalInterface."><code>Handler</code> (<code>FunctionalInterface</code>)でWebServerへのリクエストを処理するロジックを実装します。</span> <span class="merged" id="all.3H3gY8.spl2"  title="原文:: Handlers:">ハンドラ:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.iOTF" title="原文 : Process the request and send a response.">リクエストおよび<router-link @click.native="this.scrollFix('#anchor-sending-response')" to="#anchor-sending-response">send</router-link>にレスポンスを処理します。</span></p>

</li>
<li>
<p><span class="merged" id="all.2HkWPH" title="原文 : Act as a filter and forward requests to downstream handlers using the request.next() method.">フィルタとして機能し、<code>request.next()</code>メソッドを使用してリクエストをダウンストリーム・ハンドラに転送します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3f2obK" title="原文 : Throw an exception or call request.next(exception) to begin error handling.">例外をスローするか、<code>request.next(exception)</code>をコールして<router-link @click.native="this.scrollFix('#webserver/05_error-handling.adoc')" to="#webserver/05_error-handling.adoc">「エラー処理」</router-link>を起動します。</span></p>

</li>
</ul>

<h3 id="_process_request_and_produce_response"><span class="merged" id="all.3TwiX1" title="原文 : Process Request and Produce Response">リクエストの処理とレスポンスの生産</span></h3>
<div class="section">
<p><span class="merged" id="all.1uBAgg.spl1" title="原文 : Each Handler has two parameters.">各<code>Handler</code>には2つのパラメータがあります。</span> <span class="merged" id="all.1uBAgg.spl2" title="原文 : ServerRequest and ServerResponse."><code>ServerRequest</code>および<code>ServerResponse</code>。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1Dc9MP" title="原文 : Request provides access to the request method, URI, path, query parameters, headers and entity.">リクエストは、リクエスト・メソッド、URI、パス、問合せパラメータ、ヘッダーおよびエンティティへのアクセスを提供します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3UKh68" title="原文 : Response provides an ability to set response code, headers, and entity.">レスポンスでは、レスポンス・コード、ヘッダーおよびエンティティを設定できます。</span></p>

</li>
</ul>
</div>

<h3 id="anchor-filtering"><span class="merged" id="all.2dfZSo" title="原文 : Handler as a Filter">フィルタとしてのハンドラ</span></h3>
<div class="section">
<p><span class="merged" id="all.1a0n55.spl1" title="原文 : The handler forwards the request to the downstream handlers by nexting.">ハンドラは、<em>nexting</em>によってリクエストをダウンストリーム・ハンドラに転送します。</span> <span class="merged" id="all.1a0n55.spl2"  title="原文: There are two options:">次の2つのオプションがあります。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.211hwN" title="原文 : call req.next()"><code>req.next()</code>のコール</span></p>
<markup
lang="java"

>.any("/hello", (req, res) -&gt; { <span class="conum" data-value="1" />
    // filtering logic  <span class="conum" data-value="2" />
    req.next(); <span class="conum" data-value="3" />
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2raG66" title="原文 : handler for any HTTP method using the /hello path"><code>/hello</code>パスを使用するHTTPメソッドのハンドラ</span></li>
<li data-value="2"><span class="merged" id="all.cekkp" title="原文 : business logic implementation">ビジネス・ロジックの実装</span></li>
<li data-value="3"><span class="merged" id="all.31E7Ju" title="原文 : forward the current request to the downstream handler">現在のリクエストをダウンストリーム・ハンドラに転送</span></li>
</ul>
</li>
<li>
<p><span class="merged" id="all.1fUumB" title="原文 : call req.next(throwable) to forward the handling to the error handlers"><code>req.next(throwable)</code>をコールして、処理を<router-link @click.native="this.scrollFix('#webserver/05_error-handling.adoc')" to="#webserver/05_error-handling.adoc">「エラー・ハンドラ」</router-link>に転送</span></p>
<markup
lang="java"

>.any("/hello", (req, res) -&gt; { <span class="conum" data-value="1" />
    // filtering logic (e.g., validating parameters) <span class="conum" data-value="2" />
    if (userParametersOk()) {
        req.next(); <span class="conum" data-value="3" />
    } else {
        req.next(new IllegalArgumentException("Invalid parameters."); <span class="conum" data-value="4" />
    }
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2raG66.1" title="原文 : handler for any HTTP method using the /hello path"><code>/hello</code>パスを使用するHTTPメソッドのハンドラ</span></li>
<li data-value="2"><span class="merged" id="all.4Lwmjg" title="原文 : custom logic">カスタム・ロジック</span></li>
<li data-value="3"><span class="merged" id="all.31E7Ju.1" title="原文 : forward the current request to the downstream handler">現在のリクエストをダウンストリーム・ハンドラに転送</span></li>
<li data-value="4"><span class="merged" id="all.3xxF0x" title="原文 : forward the request to the error handler">エラー・ハンドラへのリクエストの転送</span></li>
</ul>
</li>
</ul>
<p><span class="merged" id="all.3mogOh.spl1" title="原文 : The handling logic can explicitly forward the execution to a different thread.">処理ロジックは、実行を別のスレッドに明示的に転送できます。</span> <span class="merged" id="all.3mogOh.spl2" title="原文 : This is the reason why returning from the handler can&rsquo;t automatically trigger calling the next handler.">このため、ハンドラから戻ると、次のハンドラの呼出しが自動的にトリガーされません。</span> </p>

</div>

<h3 id="anchor-sending-response"><span class="merged" id="all.30TRJJ" title="原文 : Sending a response">レスポンスの送信</span></h3>
<div class="section">
<p><span class="merged" id="all.4Ho6vP" title="原文 : To complete the request handling, you must send a response by calling the res.send() method.">リクエスト処理を完了するには、<code>res.send()</code>メソッドをコールしてレスポンスを送信する必要があります。</span></p>

<markup
lang="java"

>.get("/hello", (req, res) -&gt; { <span class="conum" data-value="1" />
    // terminating logic
    res.status(Http.Status.ACCEPTED_201);
    res.send("Saved!"); <span class="conum" data-value="2" />
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3CfHmw" title="原文 : handler that terminates the request handling for any HTTP method using the /hello path"><code>/hello</code>パスを使用してHTTPメソッドのリクエスト処理を終了するハンドラ</span></li>
<li data-value="2"><span class="merged" id="all.QqryT" title="原文 : send the response">レスポンスの送信</span></li>
</ul>
</div>
</div>
</doc-view>
