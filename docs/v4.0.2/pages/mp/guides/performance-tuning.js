<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.7"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.1iEhQd.spl1" title="原文 : In this guide you fill find basic advice for performance tuning of your Helidon application.">このガイドでは、Helidonアプリケーションのパフォーマンス・チューニングに関する基本的なアドバイスについて説明します。</span> <span class="merged" id="all.1iEhQd.spl2" title="原文 : Most of this concerns tuning Helidon WebServer, but you should also consider configuring/tuning Java heap size as per any Java application.">この問題のほとんどは、Helidon WebServerのチューニングに関するものですが、JavaアプリケーションによるJavaヒープ・サイズの構成/チューニングも検討する必要があります。</span> </p>

</div>


<h2 id="_use_io_helidon_microprofile_bundleshelidon_microprofile_core"><span class="merged" id="all.3npSRa" title="原文 : Use io.helidon.microprofile.bundles:helidon-microprofile-core"><code>io.helidon.microprofile.bundles:helidon-microprofile-core</code>の使用</span></h2>
<div class="section">
<p><span class="merged" id="all.17mK6Q.spl1" title="原文 : Use helidon-microprofile-core dependency (and not the helidon-microprofile dependency) and add only what you use."><code>helidon-microprofile-core</code>依存関係(<code>helidon-microprofile</code>依存関係ではなく)を使用し、使用するもののみを追加します。</span> <span class="merged" id="all.17mK6Q.spl2"  title="原文:: For example:">例えば:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-core&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_webserver_tuning"><span class="merged" id="all.3PBJPv" title="原文 : WebServer Tuning">WebServerチューニング</span></h2>
<div class="section">
<p><span class="merged" id="all.PefVB.spl1" title="原文 : Helidon WebServer is in large part self tuning.">Helidon WebServerは、大部分の自己チューニングに含まれています。</span> <span class="merged" id="all.PefVB.spl2" title="原文 : It uses default values that will satisfy most use cases, and with the adoption of Java virtual threads there is no longer a need to tune pools of platform threads.">ほとんどのユース・ケースを満たすデフォルト値を使用し、Java仮想スレッドを採用することで、プラットフォーム・スレッドのプールをチューニングする必要がなくなりました。</span> <span class="merged" id="all.PefVB.spl3" title="原文 : Still, there might be cases where you wish to change configuration options from their default values.">それでも、構成オプションをデフォルト値から変更する場合があります。</span> </p>

<p><span class="merged" id="all.3EMSXX" title="原文 : For details on the following options please see:">次のオプションの詳細は、次を参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3tmSjP" title="原文 : WebServer Configuration"><router-link :to="{path: '/se/webserver', hash: '#_configuration_options'}">WebServerの構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3Qq8d1" title="原文 : WebServer Connection Configuration"><router-link to="/config/io_helidon_webserver_ConnectionConfig">WebServer接続構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1pwB56" title="原文 : WebServer Socket Configuration"><router-link to="/config/io_helidon_common_socket_SocketOptions">WebServerソケット構成</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_summary_of_tuning_options"><span class="merged" id="all.4VuCkH" title="原文 : Summary of Tuning Options">チューニング・オプションのサマリー</span></h2>
<div class="section">
<p><span class="merged" id="all.1UWX1W.spl1" title="原文 : The following application.yaml snippet shows some configuration options that can be used to tune your application.">次の<code>application.yaml</code>スニペットは、アプリケーションのチューニングに使用できる構成オプションを示しています。</span> <span class="merged" id="all.1UWX1W.spl2" title="原文 : It is intended to show configuration options in context.">これは、コンテキストで構成オプションを表示することを目的としています。</span> <span class="merged" id="all.1UWX1W.spl3" title="原文 : Please make sure you understand these options before using them.">これらのオプションを使用する前に、必ず理解してください。</span> <span class="merged" id="all.1UWX1W.spl4" title="原文 : See the documentation referenced above.">前述のドキュメントを参照してください。</span> </p>

<markup
lang="yaml"
title="application.yaml snippet"
>server:
  # These are used to prevent unbounded resource consumption of the server
  idle-connection-period: PT2M  # Check idle connections every 2 minutes
  idle-connection-timeout: PT5M # Close connections that have been idle for 5 minutes
  max-concurrent-requests: NNNN # Maximum number of concurrent requests. -1 is unlimited.
  max-tcp-connections: NNNN     # Max number of concurrent tcp connections. -1 is unlimited.
  max-in-memory-entity: NNNNNN  # Entities smaller than this are buffered in memory vs streamed (bytes)
  max-payload-size: NNNNNNN     # Reject requests with payload sizes greater than this. -1 is unlimited (bytes)

  # Depends on the workload and kernel version
  backlog: NNNN
  receive-buffer-size: NNNNN
  write-buffer-size: NNNNN
  write-queue-length: NN # 0 means direct write

  connection-options:
    # 0 means indefinite (and less clutter on socket impl)
    read-timeout: PT0S
    connect-timeout: PT0S

    # Default (false: Nagle's algorithm enabled) is best for most cases. But for some OS and
    # workloads enabling TCP_NODELAY (disable Nagle's algorithm) can improve performance.
    tcp-no-delay: true|false

    # The default is TCP autotuning which is best for most cases.
    socket-send-buffer-size: NNNNN
    socket-receive-buffer-size: NNNNN

  # Protocol validation.
  # Careful with this! Can be dangerous if you turn these off.
  protocols:
    "http_1_1":
      validate-request-headers: true|false
      validate-response-headers: true|false
      validate-path: true|false
      recv-log: true|false
      send-log: true|false</markup>

</div>

</doc-view>
