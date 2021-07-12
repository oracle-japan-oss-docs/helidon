<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4LCCiL" title="原文 : Helidon SE Quickstart">Helidon SEクイックスタート</span></dt>
<dd slot="desc"><p><span class="merged" id="all.YQAP" title="原文 : This guide describes a basic example of an Helidon SE application using Docker and Kubernetes.">このガイドでは、DockerおよびKubernetesを使用したHelidon SEアプリケーションの基本的な例について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.mQ2U1.7"  title="原文:: What you need">必要事項</span></h2>
<div class="section">

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
<td class=""><span class="merged" id="all.4dnx1y.1" title="原文 : About 5 minutes">約5分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.14" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_generate_the_project"><span class="merged" id="all.xQmwm.3" title="原文 : Generate The Project">プロジェクトの生成</span></h2>
<div class="section">
<p><span class="merged" id="all.32v3Vo.1.spl1" title="原文 : Generate the project sources using one (or both) of the Helidon Maven archetypes.">Helidon Maven原型のいずれか(または両方)を使用してプロジェクト・ソースを生成します。</span> <span class="merged" id="all.32v3Vo.1.spl2" title="原文 : The result is a simple project that shows the basics of configuring the WebServer and implementing basic routing rules.">その結果、WebServerの構成と基本ルーティング・ルールの実装の基本を示す単純なプロジェクトが作成されます。</span> </p>

<markup
lang="bash"
title="Maven原型の実行"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=2.3.1 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<p><span class="merged" id="all.3PrSWr.spl1" title="原文 : The archetype generates a Maven project in your current directory (for example, helidon-quickstart-se).">archetypeは、現在のディレクトリ(たとえば、<code>helidon-quickstart-se</code>)にMavenプロジェクトを生成します。</span> <span class="merged" id="all.3PrSWr.spl2" title="原文 : Change into this directory.">このディレクトリに移動します。</span> </p>

<markup
lang="bash"

>cd helidon-quickstart-se</markup>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.4cHmpO.1" title="原文 : If you want to use the generated project as a starter for your own application, then you can replace groupId, artifactId and package with values appropriate for your application.">生成されたプロジェクトを独自のアプリケーションのスタータとして使用する場合は、groupId、artifactIdおよびパッケージをアプリケーションに適した値に置き換えることができます。</span></p>
</div>
<markup
lang="bash"
title="アプリケーションのビルド"
>mvn package</markup>

<p><span class="merged" id="all.3MdOSG.1.spl1" title="原文 : The project builds an application jar for the example and saves all runtime dependencies in the target/libs directory.">このプロジェクトでは、例のアプリケーションjarがビルドされ、すべてのランタイム依存関係が<code>target/libs</code>ディレクトリに保存されます。</span> <span class="merged" id="all.3MdOSG.1.spl2" title="原文 : This means you can easily start the application by running the application jar file:">つまり、アプリケーションjarファイルを実行することで、アプリケーションを簡単に起動できます:</span> </p>

<markup
lang="bash"
title="アプリケーションの実行"
>java -jar target/helidon-quickstart-se.jar</markup>

<p><span class="merged" id="all.1BP9lM.1.spl1" title="原文 : The example is a very simple &quot;Hello World&quot; greeting service.">この例は、非常に単純な「Hello World」サービスです。</span> <span class="merged" id="all.1BP9lM.1.spl2" title="原文 : It supports GET requests for generating a greeting message, and a PUT request for changing the greeting itself.">応答メッセージを生成するためのGETリクエストと、応答メッセージ自体を変更するためのPUTリクエストをサポートしています。</span> <span class="merged" id="all.1BP9lM.1.spl3" title="原文 : The response is encoded using JSON.">レスポンスはJSONを使用してエンコードされます。</span> <span class="merged" id="all.1BP9lM.1.spl4"  title="原文:: For example:">次に例を示します。</span> </p>

<markup
lang="bash"
title="アプリケーションを試す"
>curl -X GET http://localhost:8080/greet
{"message":"Hello World!"}

curl -X GET http://localhost:8080/greet/Joe
{"message":"Hello Joe!"}

curl -X PUT -H "Content-Type: application/json" -d '{"greeting" : "Hola"}' http://localhost:8080/greet/greeting

curl -X GET http://localhost:8080/greet/Jose
{"message":"Hola Jose!"}</markup>

</div>

<h2 id="_health_and_metrics"><span class="merged" id="all.3JCOTH.1" title="原文 : Health and Metrics">ヘルスおよびメトリクス</span></h2>
<div class="section">
<p><span class="merged" id="all.46ez5Q.1" title="原文 : Helidon provides built-in support for health and metrics endpoints.">Helidonには、ヘルス・エンドポイントおよびメトリクス・エンドポイントの組込みサポートが用意されています。</span></p>

<markup
lang="bash"
title="Health"
>curl -s -X GET http://localhost:8080/health</markup>

<markup
lang="bash"
title="Prometheus形式のメトリクス"
>curl -s -X GET http://localhost:8080/metrics</markup>

<markup
lang="bash"
title="JSON形式のメトリクス"
>curl -H 'Accept: application/json' -X GET http://localhost:8080/metrics</markup>

</div>

<h2 id="_build_a_docker_image"><span class="merged" id="all.3PwUaB.2" title="原文 : Build a Docker Image">Dockerイメージのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.29qTJe.1.spl1" title="原文 : The project also contains a Dockerfile so that you can easily build and run a Docker image.">プロジェクトには、Dockerイメージを簡単にビルドおよび実行できるように、Dockerfileも含まれています。</span> <span class="merged" id="all.29qTJe.1.spl2" title="原文 : To build the Docker image, you need to have Docker installed and running on your system.">Dockerイメージをビルドするには、システムにDockerがインストールされ、稼働している必要があります。</span> </p>

<markup
lang="bash"
title="Dockerビルド"
>docker build -t helidon-quickstart-se .</markup>

<markup
lang="bash"
title="Dockerイメージの実行"
>docker run --rm -p 8080:8080 helidon-quickstart-se:latest</markup>

<p><span class="merged" id="all.4ALzjx.1" title="原文 : Then you can try the application as you did before.">その後、以前と同様にアプリケーションを試行できます。</span></p>

</div>

<h2 id="_deploy_the_application_to_kubernetes"><span class="merged" id="all.4NTG6I.2" title="原文 : Deploy the application to Kubernetes">Kubernetesへのアプリケーションのデプロイ</span></h2>
<div class="section">
<p><span class="merged" id="all.3i1Fnd.2.spl1" title="原文 : If you don&rsquo;t have access to a Kubernetes cluster, you can install one on your desktop.">Kubernetesクラスタにアクセスできない場合は、<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>を使用できます。</span> <span class="merged" id="all.3i1Fnd.2.spl2" title="原文 : Then deploy the example:">次に、例をデプロイします:</span> </p>

<markup
lang="bash"
title="クラスタへの接続の検証"
>kubectl cluster-info
kubectl get nodes</markup>

<markup
lang="bash"
title="Kubernetesへのアプリケーションのデプロイ"
>kubectl create -f app.yaml
kubectl get pods                    # Wait for quickstart pod to be RUNNING</markup>

<p><span class="merged" id="all.3QlJc9.1.spl1" title="原文 : The step above created a service that is exposed into any node port.">前述のステップでは、任意のノード・ポートに公開されるサービスを作成しました。</span> <span class="merged" id="all.3QlJc9.1.spl2" title="原文 : Lookup the service to find the port.">サービスを検索してポートを見つけます。</span> </p>

<markup
lang="bash"
title="サービスのルックアップ"
>kubectl get service helidon-quickstart-se</markup>

<p><span class="merged" id="all.1C6LBc.1.spl1" title="原文 : Note the PORTs.">ポートを書き留めます。</span> <span class="merged" id="all.1C6LBc.1.spl2" title="原文 : You can now exercise the application as you did before but use the second port number (the NodePort) instead of 8080.">これで、以前と同様にアプリケーションを実行できますが、8080のかわりに2番目のポート番号(NodePort)を使用します。</span> <span class="merged" id="all.1C6LBc.1.spl3"  title="原文:: For example:">次に例を示します。</span> </p>

<markup
lang="bash"

>curl -X GET http://localhost:31431/greet</markup>

<p><span class="merged" id="all.MVSYM.1" title="原文 : After you&rsquo;re done, cleanup.">完了したら、クリーンアップします。</span></p>

<markup
lang="bash"
title="Kubernetesからのアプリケーションの削除"
>kubectl delete -f app.yaml</markup>

</div>

<h2 id="_building_native_and_custom_runtime_images"><span class="merged" id="all.2aTnMw.1" title="原文 : Building Native and Custom Runtime Images">ネイティブ・ランタイム・イメージおよびカスタム・ランタイム・イメージのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.1qMiHO.1.spl1" title="原文 : Helidon also includes support for GraalVM Native Images and Java Custom Runtime Images.">Helidonでは、GraalVMネイティブ・イメージおよびJavaカスタム・ランタイム・イメージもサポートされています。</span> <span class="merged" id="all.1qMiHO.1.spl2"  title="原文: For more information see:">詳細は、次のドキュメントを参照してください。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3vhGQr" title="原文 : GraalVM Native Images"><router-link to="/se/guides/36_graalnative">GraalVMネイティブ・イメージ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.P3x7b" title="原文 : Custom Runtime Images using jlink"><router-link to="/se/guides/37_jlink_image"><code>jlink</code>を使用したカスタム・ランタイム・イメージ</router-link></span></p>

</li>
</ul>
</div>

<h2 id="_the_helidon_cli"><span class="merged" id="all.1ujJoD.1" title="原文 : The Helidon CLI">Helidon CLI</span></h2>
<div class="section">
<p><span class="merged" id="all.3NB2x1.1.spl1" title="原文 : With the Helidon CLI you can create additional types of Helidon applications and use the &quot;dev loop&quot; to do fast, iterative development.">Helidon CLIを使用すると、追加のタイプのHelidonアプリケーションを作成し、devループを使用して迅速かつ反復的に開発できます。</span> <span class="merged" id="all.3NB2x1.1.spl2" title="原文 : Try it now."><router-link to="/about/05_cli">「今すぐ試してみる」</router-link>。</span> </p>

</div>
</doc-view>
