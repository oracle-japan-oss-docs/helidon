<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.418wt7.spl1" title="原文 : Most of the Helidon documentation is Linux/Mac/Unix centric.">Helidonのほとんどのドキュメントは、Linux/Mac/Unix中心です。</span> <span class="merged" id="all.418wt7.spl2" title="原文 : This document gives some tips for Windows users.">このドキュメントでは、Windowsユーザーにいくつかのヒントを示します。</span> </p>

</div>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.1"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.2GwgUP" title="原文 : Windows 10 is required.">Windows 10が必要です。</span></p>

<p><span class="merged" id="all.i1SJd.spl1" title="原文 : For general pre-requisites like Java and Maven see Getting Started.">JavaやMavenなどの一般的な前提条件は、<router-link to="/about/03_prerequisites">「開始」</router-link>を参照してください。</span> <span class="merged" id="all.i1SJd.spl2" title="原文 : If you want to use the Helidon CLI you&rsquo;ll also need to install the Visual C++ Redistributable Runtime:"><router-link to="/about/05_cli">Helidon CLI</router-link>を使用する場合は、Visual C++再配布可能ランタイムもインストールする必要があります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3chBBJ"  title="原文: x64"><a href="https://aka.ms/vs/16/release/vc_redist.x64.exe" id="" target="_blank" >x64</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2WoH3x"  title="原文: x86"><a href="https://aka.ms/vs/16/release/vc_redist.x86.exe" id="" target="_blank" >x86</a></span></p>

</li>
</ul>
<p><span class="merged" id="all.4Z5ntK" title="原文 : We also recommend installing the following from the Microsoft Store:">Microsoftストアから次のものをインストールすることもお薦めします:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2yo8NC"  title="原文: PowerShell">PowerShell</span></p>

</li>
<li>
<p><span class="merged" id="all.1qq5UE" title="原文 : Windows Terminal">Windowsターミナル</span></p>

</li>
</ul>
<p><span class="merged" id="all.3zL1Fb" title="原文 : This document assumes you will be using PowerShell.">このドキュメントでは、PowerShellを使用することを前提としています。</span></p>

</div>

<h2 id="_maven_quickstart_archetypes"><span class="merged" id="all.2mJdge" title="原文 : Maven Quickstart Archetypes">MavenクイックスタートArchetype</span></h2>
<div class="section">

<h3 id="_helidon_se"><span class="merged" id="all.XxxYZ" title="原文 : Helidon SE">Helidon SE</span></h3>
<div class="section">
<markup
lang="bash"

>mvn "-U" "archetype:generate" "-DinteractiveMode=false" `
    "-DarchetypeGroupId=io.helidon.archetypes" `
    "-DarchetypeArtifactId=helidon-quickstart-se" `
    "-DarchetypeVersion=2.3.1" `
    "-DgroupId=io.helidon.examples" `
    "-DartifactId=helidon-quickstart-se" `
    "-Dpackage=io.helidon.examples.quickstart.se"</markup>

<p><span class="merged" id="all.k1Cql.spl1" title="原文 : You can then follow the instructions in the Helidon SE Quickstart.">その後、<router-link to="/se/guides/02_quickstart">「Helidon SEクイックスタート」</router-link>の指示に従うことができます。</span> <span class="merged" id="all.k1Cql.spl2" title="原文 : If you do not have curl installed you can use Invoke-WebRequest:"><code>curl</code>がインストールされていない場合は、<code>Invoke-WebRequest</code>を使用できます:</span> </p>

<markup
lang="bash"

>Invoke-WebRequest -Uri "http://localhost:8080/greet"</markup>

</div>

<h3 id="_helidon_mp"><span class="merged" id="all.30jPGx" title="原文 : Helidon MP">Helidon MP</span></h3>
<div class="section">
<markup
lang="bash"

>mvn "-U" "archetype:generate" "-DinteractiveMode=false" `
    "-DarchetypeGroupId=io.helidon.archetypes" `
    "-DarchetypeArtifactId=helidon-quickstart-mp" `
    "-DarchetypeVersion=2.3.1" `
    "-DgroupId=io.helidon.examples" `
    "-DartifactId=helidon-quickstart-mp" `
    "-Dpackage=io.helidon.examples.quickstart.mp"</markup>

<p><span class="merged" id="all.2q3Pwe.spl1" title="原文 : You can then follow the instructions in the Helidon MP Quickstart.">その後、<router-link to="/mp/guides/02_quickstart">「Helidon MPクイックスタート」</router-link>の指示に従うことができます。</span> <span class="merged" id="all.2q3Pwe.spl2" title="原文 : If you do not have curl installed you can use Invoke-WebRequest:"><code>curl</code>がインストールされていない場合は、<code>Invoke-WebRequest</code>を使用できます:</span> </p>

<markup
lang="bash"

>Invoke-WebRequest -Uri "http://localhost:8080/greet"</markup>

</div>
</div>
</doc-view>
