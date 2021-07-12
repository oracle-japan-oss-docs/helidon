<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.1"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.1cpv6s.spl1" title="原文 : The Helidon CLI lets you easily create a Helidon project by picking from a set of archetypes.">Helidon CLIを使用すると、一連の原型から選択することで、Helidonプロジェクトを簡単に作成できます。</span> <span class="merged" id="all.1cpv6s.spl2" title="原文 : It also supports a developer loop that performs continuous compilation and application restart, so you can easily iterate over source code changes.">また、継続的なコンパイルおよびアプリケーションの再起動を実行する開発者ループもサポートしているため、ソース・コードの変更を簡単に繰り返すことができます。</span> </p>

<p><span class="merged" id="all.35CIcb.spl1" title="原文 : The CLI is distributed as a standalone executable (compiled using GraalVM) for ease of installation.">CLIは、インストールを容易にするために、スタンドアロンの実行可能ファイル(GraalVMを使用してコンパイル)として配布されます。</span> <span class="merged" id="all.35CIcb.spl2" title="原文 : It is currently available as a download for Linux, Mac and Windows.">現在、Linux、MacおよびWindows用のダウンロードとして入手できます。</span> <span class="merged" id="all.35CIcb.spl3" title="原文 : Simply download the binary, install it at a location accessible from your PATH and you&rsquo;re ready to go.">バイナリをダウンロードし、PATHからアクセス可能なロケーションにインストールするだけで、準備が整います。</span> </p>

</div>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.2"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.2N2auL" title="原文 : Helidon requires Java 11 (or newer) and Maven.">Helidonには、Java 11 (またはそれ以降)およびMavenが必要です。</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.29scU2.1" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11) or newer"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java SE 11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open JDK 11</a>)以上</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh.1" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
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
>curl -O https://helidon.io/cli/latest/darwin/helidon
chmod +x ./helidon
sudo mv ./helidon /usr/local/bin/</markup>

<markup
lang="bash"
title="Linux"
>curl -O https://helidon.io/cli/latest/linux/helidon
chmod +x ./helidon
sudo mv ./helidon /usr/local/bin/</markup>

<markup
lang="powershell"
title="Windows"
>PowerShell -Command Invoke-WebRequest -Uri "https://helidon.io/cli/latest/windows/helidon.exe" -OutFile "C:\Windows\system32\helidon.exe"</markup>

<p><span class="merged" id="all.2Ox555.spl1" title="原文 : For Windows you will also need the Visual C++ Redistributable Runtime.">Windowsの場合は、Visual C++再配布可能ランタイムも必要です。</span> <span class="merged" id="all.2Ox555.spl2" title="原文 : See Helidon on Windows for more information.">詳細は、<router-link to="/about/04_windows">「Windows上のHelidon」</router-link>を参照してください。</span> </p>

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


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="CLIデモ" src="./images/cli/Helidon_cli.gif" /> </v-card-text> </v-card>

</div>
</doc-view>
