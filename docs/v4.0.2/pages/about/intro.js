<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_whats_new_in_this_release"><span class="merged" id="all.4DygbS"  title="原文: What’s New in This Release">このリリースでの新機能</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3AEy7Z" title="原文 : Introduction of the new Helidon WebServer (Project Níma): a virtual threads-based web server implementation based on JDK Project Loom virtual threads.">新しいHelidon WebServer(プロジェクトNíma)の導入: <a href="https://openjdk.org/jeps/444" target="_blank">「JDKプロジェクト・ルーム」</a>仮想スレッドに基づく仮想スレッド・ベースのwebサーバー実装。</span></p>

</li>
<li>
<p><span class="merged" id="all.2YYVfz.spl1" title="原文 : Removed Helidon’s Reactive WebServer and WebClient that were based on Netty.">Nettyに基づいたHelidonのリアクティブWebServerおよびWebClientを削除しました。</span> <span class="merged" id="all.2YYVfz.spl2" title="原文 : Our new implementations are based on virtual threads that have a blocking style API (Project Níma).">新しい実装は、ブロック・スタイルAPI (ProjectNíma)を持つ仮想スレッドに基づいています。</span> <span class="merged" id="all.2YYVfz.spl3" title="原文 : Learn more: Helidon 4 WebServer.">詳細: <router-link @click.native="this.scrollFix('#_helidon_4_webserver')" to="#_helidon_4_webserver">Helidon 4 WebServer</router-link>。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2bOg4v.spl1" title="原文 : Converted other reactive API modules to blocking style APIs.">他の<em>「リアクティブ」</em> APIモジュールを<em>「ブロッキング」</em>スタイルのAPIに変換しました。</span> <span class="merged" id="all.2bOg4v.spl2" title="原文 : The io.helidon.common.reactive APIs will stay as general purpose reactive utilities and operators."><code>io.helidon.common.reactive</code> APIは、汎用リアクティブ・ユーティリティおよびオペレータとして保持されます。</span> <span class="merged" id="all.2bOg4v.spl3" title="原文 : Learn more: Helidon SE">詳細: <router-link @click.native="this.scrollFix('#_helidon_se')" to="#_helidon_se">Helidon SE</router-link></span> </p>

</li>
<li>
<p><span class="merged" id="all.29LNbh.spl1" title="原文 : Upgraded MicroProfile support to MicroProfile 6 and Jakarta 10 Core Profile running on the Helidon WebServer.">MicroProfileサポートをHelidon WebServerで実行されているMicroProfile 6およびJakarta 10コア・プロファイルにアップグレードしました。</span> <span class="merged" id="all.29LNbh.spl2" title="原文 : Learn more: Helidon MP">詳細: <router-link @click.native="this.scrollFix('#_helidon_mp')" to="#_helidon_mp">Helidon MP</router-link></span> </p>

</li>
<li>
<p><span class="merged" id="all.3Jgt1Z" title="原文 : Java 21 is required to use Helidon 4.">Helidon 4を使用するには、Java 21が必要です。</span></p>

</li>
</ul>

</div>


<h2 id="_helidon_4_webserver"><span class="merged" id="all.3ffa9L" title="原文 : Helidon 4 WebServer">Helidon 4 WebServer</span></h2>
<div class="section">
<p><span class="merged" id="all.3uf1dm.spl1" title="原文 : Before Helidon 4, the Helidon WebServer was built on Netty and had a reactive API.">Helidon 4より前は、Helidon WebServerはNetty上に構築されており、リアクティブAPIがありました。</span> <span class="merged" id="all.3uf1dm.spl2" title="原文 : In Helidon 4 we have replaced this with a new server implementation (Project Níma) that is written from the ground up to take full advantage of Java 21’s virtual threads.">Helidon 4では、これを、Java 21の仮想スレッドを最大限に活用するためにゼロから作成された新しいサーバー実装(ProjectNíma)に置き換えました。</span> <span class="merged" id="all.3uf1dm.spl3" title="原文 : With virtual threads, threads are no longer a scarce resource to be carefully pooled and managed.">仮想スレッドでは、スレッドは慎重にプールおよび管理される希少なリソースではなくなりました。</span> <span class="merged" id="all.3uf1dm.spl4" title="原文 : Instead they are an abundant resource that can be created as needed to handle nearly unlimited concurrent requests.">かわりに、ほぼ無制限の同時リクエストを処理するために必要に応じて作成できる豊富なリソースです。</span> </p>

<p><span class="merged" id="all.emxWG.spl1" title="原文 : Because each request runs in its own dedicated thread, it is free to perform blocking operations - like calling a database, or another service.">各リクエストは独自の専用スレッドで実行されるため、データベースの呼出しや別のサービスなど、ブロック操作を自由に実行できます。</span> <span class="merged" id="all.emxWG.spl2" title="原文 : And it can do so in a simple synchronous way with no fear of blocking a platform thread and starving other requests.">また、プラットフォーム・スレッドをブロックしたり、他のリクエストを飢えさせたりすることを恐れずに、シンプルな同期的な方法で実行できます。</span> <span class="merged" id="all.emxWG.spl3" title="原文 : You no longer need to resort to complicated asynchronous code to implement a low-overhead, highly concurrent service.">オーバーヘッドが少なく同時性の高いサービスを実装するために、複雑な非同期コードに頼る必要がなくなりました。</span> </p>

</div>


<h2 id="_helidon_se"><span class="merged" id="all.XxxYZ.1" title="原文 : Helidon SE">Helidon SE</span></h2>
<div class="section">
<p><span class="merged" id="all.40Lost.spl1" title="原文 : Helidon SE is Helidon’s foundational set of APIs.">Helidon SEは、HelidonのAPIの基本セットです。</span> <span class="merged" id="all.40Lost.spl2" title="原文 : The big change in Helidon 4 is that the use of virtual threads have enabled these APIs to change from asynchronous to blocking.">Helidon 4の大きな変化は、仮想スレッドを使用して、これらのAPIを非同期からブロックに変更できるようにしたことです。</span> <span class="merged" id="all.40Lost.spl3" title="原文 : This results in much simpler code that is easier to write, maintain, debug and understand.">これにより、記述、メンテナンス、デバッグおよび理解が容易なコードが大幅に簡略化されます。</span> <span class="merged" id="all.40Lost.spl4" title="原文 : Existing Helidon 3 SE code will require modification to run on these new APIs, but the effort is well worth the improved performance and simplicity of the resulting code.">既存のHelidon 3 SEコードは、これらの新しいAPIで実行するために変更が必要になりますが、この作業は、結果のコードのパフォーマンスとシンプルさを向上させる価値があります。</span> </p>

<p><span class="merged" id="all.176xap" title="原文 : To give a very simple example of the differences between Helidon 3 SE and Helidon 4 SE, let’s take a look at extracting a JSON body from an HTTP request and doing something with it:">Helidon 3 SEとHelidon 4 SEの違いの非常に簡単な例を示すために、HTTPリクエストからJSON本文を抽出して、それを使用して何かをしてみましょう:</span></p>

<markup
lang="java"
title="Helidon 3"
>request.content().as(JsonObject.class)
        	.thenAccept(jo -&gt; doSomething(jo, response));</markup>

<markup
lang="java"
title="Helidon 4"
>doSomething(request.content().as(JsonObject.class), response);</markup>

</div>


<h2 id="_helidon_mp"><span class="merged" id="all.30jPGx.1" title="原文 : Helidon MP">Helidon MP</span></h2>
<div class="section">
<p><span class="merged" id="all.2TPtii.spl1" title="原文 : Helidon MP is Helidon’s MicroProfile implementation and in Helidon 4 it supports MicroProfile 6 and the Jakarta EE 10 Core Profile.">Helidon MPはHelidonのMicroProfile実装で、Helidon 4ではMicroProfile 6およびJakarta EE 10コア・プロファイルをサポートしています。</span> <span class="merged" id="all.2TPtii.spl2" title="原文 : Your Helidon 3 MicroProfile application should migrate to Helidon 4 fairly easily (the most significant changes are in MicroProfile Metrics 5.0), and since Helidon’s MicroProfile server is based on the new Helidon WebServer (Project Níma), you get all the benefits of running on virtual threads.">Helidon 3 MicroProfileアプリケーションは、Helidon 4にかなり簡単に移行する必要があります(最も重要な変更はMicroProfileメトリクス5.0にあります)。HelidonのMicroProfileサーバーは、新しいHelidon WebServer (プロジェクトNíma)に基づいているため、仮想スレッドで実行されるすべての利点が得られます。</span> </p>

</div>

</doc-view>
