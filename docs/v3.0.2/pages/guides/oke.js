<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.rUMhY" title="原文 : Deploying to OKE">OKEへのデプロイ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.33dnZb" title="原文 : Push a Docker image of your Helidon application to Oracle Cloud Infrastructure Registry (OCIR), and deploy the image from the registry to Oracle Cloud Infrastructure Container Engine for Kubernetes (OKE).">HelidonアプリケーションのDockerイメージをOracle Cloud Infrastructure Registry (OCIR)にプッシュし、レジストリからOracle Cloud Infrastructure Container Engine for Kubernetes (OKE)にデプロイします。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.1"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.10cPjD.1"  title="原文:: About 10 minutes">約10分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3zDZx7" title="原文 : Helidon prerequisites"><router-link to="/about/prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2J4k5X.spl1" title="原文 : An OKE cluster.">OKEクラスタ。</span> <span class="merged" id="all.2J4k5X.spl2" title="原文 : See the OKE documentation."><a href="http://www.oracle.com/webfolder/technetwork/tutorials/obe/oci/oke-full/index.html" target="_blank">「OKEドキュメント」</a>を参照してください。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.39Twd0.spl1" title="原文 : A Helidon project created from the quickstart Maven archetype.">クイックスタートMaven原型から作成されたHelidonプロジェクト。</span> <span class="merged" id="all.39Twd0.spl2" title="原文 : See quickstart Maven archetype."><router-link to="/se/guides/quickstart">「クイックスタートMaven原型」</router-link>を参照してください。</span> </td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_push_your_image_to_ocir"><span class="merged" id="all.4aikRM" title="原文 : Push Your Image to OCIR">OCIRへのイメージのプッシュ</span></h2>
<div class="section">
<p><span class="merged" id="all.3pzCtU" title="原文 : Your account must be in the Administrators group or another group that has the REPOSITORY_CREATE permission.">アカウントは、<code>Administrators</code>グループまたは<code>REPOSITORY_CREATE</code>権限を持つ別のグループに属している必要があります。</span></p>

<p><span class="merged" id="all.3HWj51.spl1" title="原文 : Sign in to the Oracle Cloud Infrastructure (OCI) web console and generate an authentication token.">Oracle Cloud Infrastructure (OCI) webコンソールにサインインし、認証トークンを生成します。</span> <span class="merged" id="all.3HWj51.spl2" title="原文 : See Getting an Auth Token."><a href="https://docs.cloud.oracle.com/iaas/Content/Registry/Tasks/registrygettingauthtoken.htm" target="_blank">「認証トークンの取得」</a>を参照してください。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2KaeU1.spl1" title="原文 : Remember to copy the generated token.">生成されたトークンを必ずコピーしてください。</span> <span class="merged" id="all.2KaeU1.spl2" title="原文 : You won&rsquo;t be able to access it again.">再度アクセスすることはできません。</span> </p>
</div>

<markup
lang="bash"
title="Log in to the OCIR Docker registry:"
>docker login \
       -u &lt;username&gt; \ <span class="conum" data-value="1" />
       -p &lt;password&gt; \ <span class="conum" data-value="2" />
       &lt;region-code&gt;.ocir.io <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.XxAib" title="原文 : The user name in the format &lt;tenancy_name&gt;/&lt;username&gt;."><code>&lt;tenancy_name>/&lt;username></code>形式のユーザー名。</span></li>
<li data-value="2"><span class="merged" id="all.1NK7fe" title="原文 : The password is the generated token.">passwordは生成されたトークンです。</span></li>
<li data-value="3"><span class="merged" id="all.2fvu82.spl1" title="原文 : &lt;region-code&gt; is the code for the OCI region that you&rsquo;re using."><code>&lt;region-code></code>は、使用しているOCIリージョンのコードです。</span> <span class="merged" id="all.2fvu82.spl2" title="原文 : For example, the region code for Phoenix is phx.">たとえば、Phoenixのリージョン・コードは<code>phx</code>です。</span> <span class="merged" id="all.2fvu82.spl3" title="原文 : See Regions and Availability Domains."><a href="https://docs.cloud.oracle.com/iaas/Content/General/Concepts/regions.htm" target="_blank">「リージョンおよび可用性ドメイン」</a>を参照してください。</span> </li>
</ul>

<markup
lang="bash"
title="Tag the image that you want to push to the registry:"
>docker tag \
       helidon-quickstart-se:latest \ <span class="conum" data-value="1" />
       &lt;region-code&gt;.ocir.io/&lt;tenancy-name&gt;/&lt;repo-name&gt;/&lt;image-name&gt;:&lt;tag&gt; <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1och5E" title="原文 : the local image to tag">タグ付けするローカル・イメージ</span></li>
<li data-value="2"><span class="merged" id="all.4S2klv.spl1" title="原文 : &lt;repo-name&gt; is optional."><code>&lt;repo-name></code>はオプションです。</span> <span class="merged" id="all.4S2klv.spl2" title="原文 : It is the name of a repository to which you want to push the image (for example, project01).">イメージをプッシュするリポジトリの名前です(例: <code>project01</code>)。</span> </li>
</ul>

<markup
lang="bash"
title="Push the image to the Registry:"
>docker push \
    &lt;region-code&gt;.ocir.io/&lt;tenancy-name&gt;/&lt;repo-name&gt;/&lt;image-name&gt;:&lt;tag&gt;</markup>

<p><span class="merged" id="all.4HCl26" title="原文 : You can pull your image with the image path used above, for example: phx.ocir.io/helidon/example/helidon-quickstart-se:latest">上で使用したイメージ・パスを使用してイメージをプルできます。例: : <code>phx.ocir.io/helidon/example/helidon-quickstart-se:latest</code></span></p>

</div>


<h2 id="_setup_your_k8s_cluster"><span class="merged" id="all.2avlMy" title="原文 : Setup your K8s Cluster">K8sクラスタの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.1vSBHO" title="原文 : Create a namespace (for example, helidon) for the project:">プロジェクトのネームスペース(<code>helidon</code>など)を作成します:</span></p>

<markup
lang="bash"

>kubectl create namespace helidon</markup>

<p><span class="merged" id="all.BykM3.spl1" title="原文 : The repository that you created is private.">作成したリポジトリはプライベートです。</span> <span class="merged" id="all.BykM3.spl2" title="原文 : To allow Kubernetes to authenticate with the container registry and pull the private image, you must create and use an image-pull secret.">Kubernetesがコンテナ・レジストリを使用して認証し、プライベート・イメージをプルできるようにするには、イメージ・プル・シークレットを作成して使用する必要があります。</span> </p>

<markup
lang="bash"
title="Create an image-pull secret:"
>kubectl create secret docker-registry \
    ocirsecret \ <span class="conum" data-value="1" />
    --docker-server=&lt;region-code&gt;.ocir.io \ <span class="conum" data-value="2" />
    --docker-username='&lt;tenancy-name&gt;/&lt;oci-username&gt;' \ <span class="conum" data-value="3" />
    --docker-password='&lt;oci-auth-token&gt;' \ <span class="conum" data-value="4" />
    --docker-email='&lt;email-address&gt;' \
    --namespace helidon <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Z5XTy" title="原文 : The name of the config secret">構成シークレットの名前</span></li>
<li data-value="2"><span class="merged" id="all.29kOZG" title="原文 : The docker registry (see docker tag step above)">dockerレジストリ(前述のdockerタグのステップを参照)</span></li>
<li data-value="3"><span class="merged" id="all.1MZLKC" title="原文 : The user name (see docker login step above)">ユーザー名(前述のdockerログイン・ステップを参照)</span></li>
<li data-value="4"><span class="merged" id="all.1N7aUN" title="原文 : The password (see docker login step above)">パスワード(前述のdockerログイン・ステップを参照)</span></li>
<li data-value="5"><span class="merged" id="all.YDMXd" title="原文 : The namespace created in the previous step">前のステップで作成したネームスペース</span></li>
</ul>


<h3 id="_deploy_the_image_to_kubernetes"><span class="merged" id="all.3VvmfK" title="原文 : Deploy the Image to Kubernetes">Kubernetesへのイメージのデプロイ</span></h3>
<div class="section">
<p><span class="merged" id="all.2wFSbJ" title="原文 : First, change to the helidon-quickstart-se directory.">まず、<code>helidon-quickstart-se</code>ディレクトリに移動します。</span></p>

<p><span class="merged" id="all.1aw1Mt" title="原文 : Then edit app.yaml and add the following under spec in the deployment section:">次に、<code>app.yaml</code>を編集し、<code>deployment</code>セクションの<code>spec</code>の下に次を追加します:</span></p>

<markup
lang="yaml"

>spec:
  imagePullSecrets:
  - name: ocirsecret <span class="conum" data-value="1" />
  containers:
  - name: helidon-quickstart-se
    image: phx.ocir.io/helidon/example/helidon-quickstart-se:latest <span class="conum" data-value="2" />
    imagePullPolicy: Always
    ports:
    - containerPort: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1bt7XR" title="原文 : The config secret name">構成シークレット名</span></li>
<li data-value="2"><span class="merged" id="all.4Kz5t6" title="原文 : The image path">イメージ・パス</span></li>
</ul>

<markup
lang="bash"
title="Deploy the application:"
>kubectl create -f app.yaml -n helidon</markup>

<markup
lang="bash"
title="Get the <code>NodePort</code> number for your new pod:"
>kubectl get svc -n helidon</markup>

<markup
lang="bash"
title="Get the IP address for your cluster nodes:"
>kubectl get nodes</markup>

<p><span class="merged" id="all.2yKYIk" title="原文 : You can now access the application at http://&lt;NodeIpAddress&gt;:&lt;NodePort&gt;/greet.">これで、<code>http://&lt;NodeIpAddress>:&lt;NodePort>/greet</code>でアプリケーションにアクセスできます。</span></p>

</div>

</div>

</doc-view>
