<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.1"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.1cpv6s.spl1" title="原文 : The Helidon CLI lets you easily create a Helidon project by picking from a set of archetypes.">Helidon CLIを使用すると、一連の原型から選択することで、Helidonプロジェクトを簡単に作成できます。</span> <span class="merged" id="all.1cpv6s.spl2" title="原文 : It also supports a developer loop that performs continuous compilation and application restart, so you can easily iterate over source code changes.">また、継続的なコンパイルおよびアプリケーションの再起動を実行する開発者ループもサポートしているため、ソース・コードの変更を簡単に繰り返すことができます。</span> </p>

<p><span class="merged" id="all.35CIcb.spl1" title="原文 : The CLI is distributed as a standalone executable (compiled using GraalVM) for ease of installation.">CLIは、インストールを容易にするために、スタンドアロンの実行可能ファイル(GraalVMを使用してコンパイル)として配布されます。</span> <span class="merged" id="all.35CIcb.spl2" title="原文 : It is currently available as a download for Linux, Mac and Windows.">現在、Linux、MacおよびWindows用のダウンロードとして入手できます。</span> <span class="merged" id="all.35CIcb.spl3" title="原文 : Simply download the binary, install it at a location accessible from your PATH and you’re ready to go.">バイナリをダウンロードし、PATHからアクセス可能なロケーションにインストールするだけで、準備が整います。</span> </p>

</div>


<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.Spi7a.spl1" title="原文 : Helidon requires Java and Maven.">Helidonには、JavaおよびMavenが必要です。</span> <span class="merged" id="all.Spi7a.spl2" title="原文 : You might also need Docker and Kubernetes depending on how you plan to deploy your services.">サービスのデプロイ方法によっては、DockerおよびKubernetesも必要になる場合があります。</span> </p>

<div class="block-title"><span class="merged" id="all.eoZJz" title="原文 : Prerequisite product versions for Helidon 4.0.2"><span>Helidon 4.0.2の前提条件製品バージョン</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.17vEm3" title="原文 : Java&#160;SE&#160;21 (Open&#160;JDK&#160;21)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java SE 21</a> (<a href="http://jdk.java.net" target="_blank">JDK 21を開く</a>)</span></td>
<td class=""><span class="merged" id="all.3uVV7D" title="原文 : Helidon requires Java 21+.">HelidonにはJava 21+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UWTyd" title="原文 : Maven 3.8+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.8+</a></span></td>
<td class=""><span class="merged" id="all.47RJEf" title="原文 : Helidon requires Maven 3.8+.">HelidonにはMaven 3.8+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.3ck9Rg" title="原文 : You should make sure java and mvn are in your path."><code>java</code>および<code>mvn</code>がパスに含まれていることを確認してください。</span></p>

<markup
lang="bash"

>java -version
mvn --version</markup>

</div>


<h2 id="_installation"><span class="merged" id="all.59zgX"  title="原文:: Installation">インストール</span></h2>
<div class="section">
<markup
lang="bash"
title="MacOS"
>curl -L -O https://helidon.io/cli/latest/darwin/helidon
chmod +x ./helidon
sudo mv ./helidon /usr/local/bin/</markup>

<p><span class="merged" id="all.tenml.spl1" title="原文 : If you get a warning that &quot;the developer cannot be verified&quot; when running the CLI this is due to the Helidon CLI not being signed and notarized yet.">CLIの実行時に"the developer cannot be verified"という警告が表示された場合は、Helidon CLIが署名されておらず、まだ通知されていないことが原因です。</span> <span class="merged" id="all.tenml.spl2" title="原文 : You can disable this check by running: xattr -d com.apple.quarantine helidon">このチェックは、実行することで無効にできます: <code>xattr -d com.apple.quarantine helidon</code></span> </p>

<markup
lang="bash"
title="Linux"
>curl -L -O https://helidon.io/cli/latest/linux/helidon
chmod +x ./helidon
sudo mv ./helidon /usr/local/bin/</markup>

<markup
lang="powershell"
title="Windows"
>PowerShell -Command Invoke-WebRequest -Uri "https://helidon.io/cli/latest/windows/helidon.exe" -OutFile "C:\Windows\system32\helidon.exe"</markup>

<p><span class="merged" id="all.3MBISe.spl1" title="原文 : For Windows you will also need the Visual C++ Redistributable Runtime.">Windowsの場合は、Visual C++再配布可能ランタイムも必要です。</span> <span class="merged" id="all.3MBISe.spl2" title="原文 : See Helidon on Windows for more information.">詳細は、<router-link to="/about/windows">「Windows上のHelidon」</router-link>を参照してください。</span> </p>

</div>


<h2 id="_create_a_new_project"><span class="merged" id="all.3FTyYc"  title="原文: Create a New Project">新規プロジェクトの作成</span></h2>
<div class="section">
<markup
lang="bash"

>helidon init</markup>

<p><span class="merged" id="all.2FKtgC" title="原文 : Then answer the questions.">次に、質問に答えます。</span></p>

</div>


<h2 id="_developer_loop"><span class="merged" id="all.4I5m0T" title="原文 : Developer Loop">開発者ループ</span></h2>
<div class="section">
<markup
lang="bash"

>cd myproject
helidon dev</markup>

<p><span class="merged" id="all.1OxNtH" title="原文 : As you make source code changes the project will automatically recompile and restart your application.">ソース・コードを変更すると、プロジェクトは自動的にアプリケーションを再コンパイルして再起動します。</span></p>

</div>


<h2 id="_demo"><span class="merged" id="all.2ATaN4"  title="原文:: Demo">デモ</span></h2>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="CLIデモ" src="images/cli/Helidon_cli.gif" /> </v-card-text> </v-card>


</div>

</doc-view>
