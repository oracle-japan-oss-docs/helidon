<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_error_routing"><span class="merged" id="all.thWvT" title="原文 : Error Routing">エラー・ルーティング</span></h2>
<div class="section">
<p><span class="merged" id="all.4VgbCx" title="原文 : You may register an error handler for a specific Throwable in the Routing.Builder method.">特定の<code>Throwable</code>のエラー・ハンドラを<code>Routing.Builder</code>メソッドに登録できます。</span></p>

<markup
lang="java"

>Routing routing = Routing.builder()
                        .error(MyException.class, (req, res, ex) -&gt; { <span class="conum" data-value="1" />
                            // handle the error, set the HTTP status code
                            res.send(errorDescriptionObject); <span class="conum" data-value="2" />
                        })
                        .build</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1JsyTn" title="原文 : Registers an error handler that handles MyException that are thrown from the upstream handlers">アップストリーム・ハンドラからスローされる<code>MyException</code>を処理するエラー・ハンドラを登録</span></li>
<li data-value="2"><span class="merged" id="all.3aRXWw" title="原文 : Finishes the request handling by sending a response">レスポンスを送信してリクエスト処理を終了</span></li>
</ul>
<p><span class="merged" id="all.3DXiIi" title="原文 : Error handlers are called when">エラー・ハンドラは次の場合にコールされます</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2HZIOQ" title="原文 : an exception is thrown from a handler">ハンドラから例外がスローされました</span></p>

</li>
<li>
<p><span class="merged" id="all.5GY1T" title="原文 : req.next(ex) is called, where ex is an instance of Throwable"><code>req.next(ex)</code>がコールされます。<code>ex</code>は<code>Throwable</code>のインスタンスです</span></p>

</li>
</ul>
<p><span class="merged" id="all.1dtrMz" title="原文 : As with the standard handlers, the error handler must either">標準ハンドラと同様に、エラー・ハンドラは次のいずれかである必要があります</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2AxGtj" title="原文 : send a response">レスポンスの送信</span></p>
<markup
lang="java"

>.error(MyException.class, (req, res, ex) -&gt; {
    res.status(Http.Status.BAD_REQUEST_400);
    res.send("Unable to parse request. Message: " + ex.getMessage());
})</markup>

</li>
<li>
<p><span class="merged" id="all.1mdPto" title="原文 : or, forward the error handling to the downstream error handlers">または、エラー処理をダウンストリーム・エラー・ハンドラに転送</span></p>
<markup
lang="java"

>.error(Throwable.class, (req, res, ex) -&gt; {
    // some logic
    req.next(ex);
})</markup>

</li>
</ul>
<p><span class="merged" id="all.4Ra0nY.spl1" title="原文 : Error handling can&rsquo;t be forwarded to the standard handlers.">エラー処理は標準ハンドラに転送できません。</span> <span class="merged" id="all.4Ra0nY.spl2" title="原文 : In fact, invoking req.next(ex) or req.next() in an error handler are equivalent.">実際、エラー・ハンドラでの<code>req.next(ex)</code>または<code>req.next()</code>の起動は同等です。</span> </p>

<markup
lang="java"

>.error(Throwable.class, (req, res, ex) -&gt; {
    if (condition) {
        req.next(ex); <span class="conum" data-value="1" />
    } else {
        req.next(); <span class="conum" data-value="2" />
    }
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.KJM5" title="原文 : Call a downstream error handler with the Throwable instance."><code>Throwable</code>インスタンスでダウンストリーム・エラー・ハンドラをコールします。</span></li>
<li data-value="2"><span class="merged" id="all.39bDTk.spl1" title="原文 : Here, req.next() is the same as req.next(ex).">ここで、<code>req.next()</code>は<code>req.next(ex)</code>と同じです。</span> <span class="merged" id="all.39bDTk.spl2" title="原文 : In both cases, the downstream error handler is called.">どちらの場合も、ダウンストリーム・エラー・ハンドラがコールされます。</span> </li>
</ul>

<h3 id="_default_error_handling"><span class="merged" id="all.1KBnFZ" title="原文 : Default error handling">デフォルトのエラー処理</span></h3>
<div class="section">
<p><span class="merged" id="all.20glG1" title="原文 : If no user-defined error handler is matched, or if the last error handler of the exception called req.next(), then the exception is translated to an HTTP response as follows:">一致するユーザー定義のエラー・ハンドラがない場合、または<code>req.next()</code>という例外の最後のエラー・ハンドラがある場合、例外は次のようにHTTPレスポンスに変換されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4XqE15" title="原文 : Subtypes of HttpException are translated to their associated HTTP error codes."><code>HttpException</code>のサブタイプは、関連付けられたHTTPエラー・コードに変換されます。</span></p>
<markup
lang="java"
title="例外をスローして<code>406</code> HTTPエラー・コードで応答"
>(req, res) -&gt; throw new HttpException("Amount of money must be greater than 0.", Http.Status.NOT_ACCEPTABLE_406) <span class="conum" data-value="1" /></markup>

</li>
<li>
<p><span class="merged" id="all.2eznVB" title="原文 : Otherwise, the exceptions are translated to an Internal Server Error HTTP error code 500.">それ以外の場合、例外は内部サーバー・エラーHTTPエラー・コード<code>500</code>に変換されます。</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
