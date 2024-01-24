<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1ue6IU" title="原文 : Configuration Secrets">構成シークレット</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3iTs1P" title="原文 : When security requires a configuration with repeating complex elements, use Helidon Config.">セキュリティで複雑な要素を繰り返す構成が必要な場合は、Helidon構成を使用します。</span></p>

<p><span class="merged" id="all.TQbDk.spl1" title="原文 : This example configures a basic authentication provider and protects static content on the web server.">この例では、基本認証プロバイダを構成し、webサーバー上の静的コンテンツを保護します。</span> <span class="merged" id="all.TQbDk.spl2" title="原文 : It also includes annotations in Jersey.">また、Jerseyの注釈も含まれます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_protecting_configuration_secrets"><span class="merged" id="all.1iY0Nh" title="原文 : Protecting Configuration Secrets">構成シークレットの保護</span></h2>
<div class="section">
<p><span class="merged" id="all.46jxy2.spl1" title="原文 : In Helidon MP, the config encryption filter is enabled by default.">Helidon MPでは、構成暗号化フィルタは<strong>「デフォルトで有効」</strong>です。</span> <span class="merged" id="all.46jxy2.spl2" title="原文 : However, if you don’t configure it, the filter only supports a template for aliasing that checks that no clear text passwords are present (template ${CLEAR=…​}.">ただし、これを構成しない場合、フィルタでは、クリア・テキスト・パスワードが存在しないことをチェックする別名のテンプレートのみがサポートされます(テンプレート${CLEAR=…​}。</span> </p>

<p><span class="merged" id="all.4ZNcqu" title="原文 : In Helidon SE, you may add support for this filter with dependency (loaded through a java service mechanism):">Helidon SEでは、依存関係のあるこのフィルタのサポートを追加できます(javaサービス・メカニズムを介してロードされます):</span></p>

<markup
lang="xml"
title="Maven Dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-config-encryption&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3aErXL.spl1" title="原文 : Put encrypted values into your configuration file so that it can be stored in a public repository with no danger of exposing the secret values.">暗号化された値を構成ファイルに格納して、シークレット値を公開せずにパブリック・リポジトリに格納できるようにします。</span> <span class="merged" id="all.3aErXL.spl2" title="原文 : Be sure to use a strong and secret password.">強力な秘密パスワードを使用してください。</span> </p>

<p><span class="merged" id="all.1fi9bH" title="原文 : The supported templates are:">サポートされているテンプレートは次のとおりです:</span></p>

<div class="block-title"><span class="merged" id="all.2117ll"  title="原文:: Templates"><span>テンプレート</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 11.111%;">
<col style="width: 33.333%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.20zggf"  title="原文:: Template">テンプレート</span></th>
<th><span class="merged" id="all.4JM9z7.24"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.2xA7W7.1"  title="原文:: Example">例</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3nzUBF" title="原文 : ${CLEAR=…​}">${CLEAR=…​}</span></td>
<td class=""><span class="merged" id="all.40JanL" title="原文 : Secret in clear text (for testing) - requiresEncryption must be disabled">クリア・テキストのシークレット(テスト用) - <code>requiresEncryption</code>を無効にする必要があります</span></td>
<td class=""><span class="merged" id="all.4BlV2h"  title="原文: ${CLEAR=knownSecret}">${CLEAR=knownSecret}</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ClZc8" title="原文 : ${RSA-P=…​}">${RSA-P=…​}</span></td>
<td class=""><span class="merged" id="all.3BbfJI" title="原文 : Public/private key encryption, base64 value">公開キー/秘密キーの暗号化、base64値</span></td>
<td class=""><span class="merged" id="all.2fz5SI"  title="原文: ${RSA-P=aGr3sFCMQznixrgbIk9qNfoLnO1cdi3H86qweCNjxFvH4dYg5IQM1EuoyTjJaXcSCG5MBskpeA3bjnWYrzeAFFlZHuYSPsb+wJVzGLrfUColTn+BPJjpJ3rmEd3AVkJl1ASfBBMh3q3deC+rvUdhfoTGBO8sC0teUATklCQSxfHOnIxswxqrplnoGXToGiTIfehiN2IZNulRKeoDQ0AeoKREmq5au4L8OOmS+D9BqnlKMc0F1tULZ7+h3Cxla4lXC5WRPoPfHBU4vzRZOGzeDvLkRgrD60caw/wKn5M0Wy1A1cKR8E46ceBXCjJ2eWIcLyhZSAZWDe3ceNrawHZtCg==}">${RSA-P=aGr3sFCMQznixrgbIk9qNfoLnO1cdi3H86qweCNjxFvH4dYg5IQM1EuoyTjJaXcSCG5MBskpeA3bjnWYrzeAFFlZHuYSPsb+wJVzGLrfUColTn+BPJjpJ3rmEd3AVkJl1ASfBBMh3q3deC+rvUdhfoTGBO8sC0teUATklCQSxfHOnIxswxqrplnoGXToGiTIfehiN2IZNulRKeoDQ0AeoKREmq5au4L8OOmS+D9BqnlKMc0F1tULZ7+h3Cxla4lXC5WRPoPfHBU4vzRZOGzeDvLkRgrD60caw/wKn5M0Wy1A1cKR8E46ceBXCjJ2eWIcLyhZSAZWDe3ceNrawHZtCg==}</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.fqcZi" title="原文 : ${GCM=…​}">${GCM=…​}</span></td>
<td class=""><span class="merged" id="all.1Yxf9S" title="原文 : Shared secret ecryption, base64 value">共有シークレットの暗号化、base64値</span></td>
<td class=""><span class="merged" id="all.jyrOu"  title="原文: ${GCM=D/UgMzsNb265HU1NDvdzm7tACHdsW6u1PjYEcRkV/OLiWcI+ET6Q4MKCz0zHyEh9}">${GCM=D/UgMzsNb265HU1NDvdzm7tACHdsW6u1PjYEcRkV/OLiWcI+ET6Q4MKCz0zHyEh9}</span></td>
</tr>
</tbody>
</table>
</div>


<h3 id="_requiring_encryption"><span class="merged" id="all.EsqZY" title="原文 : Requiring encryption">暗号化が必要</span></h3>
<div class="section">
<p><span class="merged" id="all.4X467A.spl1" title="原文 : The config encryption filter has an option that defines whether encryption is required or not.">構成暗号化フィルタには、暗号化が必要かどうかを定義するオプションがあります。</span> <span class="merged" id="all.4X467A.spl2" title="原文 : If it’s set to true, which is the default, then:">true(デフォルト)に設定すると、次のようになります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2NDsBO" title="原文 : Configuration values with ${CLEAR=…​} template will cause an exception when requested.">${CLEAR=…​} テンプレートを使用した構成値は、リクエスト時に例外を引き起こします。</span></p>

</li>
<li>
<p><span class="merged" id="all.2bmoT7" title="原文 : The filter fails during bootstrap if security.config.aes.insecure-passphrase is configured."><code>security.config.aes.insecure-passphrase</code>が構成されている場合、ブートストラップ中にフィルタが失敗します。</span></p>

</li>
</ul>

</div>


<h3 id="_using_symmetric_encryption_aes"><span class="merged" id="all.3U2MYq" title="原文 : Using symmetric encryption (AES)">対称暗号化(AES)の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3Yldn0" title="原文 : Symmetric encryption is based on a shared secret that is known by the person encrypting the value and is also provided to the application.">対称型暗号化は、値を暗号化するユーザーが知っている共有シークレットに基づいており、アプリケーションにも提供されます。</span></p>


<h4 id="_encrypting_values_aes"><span class="merged" id="all.HyKfn" title="原文 : Encrypting values (AES)">値の暗号化(AES)</span></h4>
<div class="section">
<p><span class="merged" id="all.1XOQSF" title="原文 : The config encryption filter provides a Main class io.helidon.config.encryption.Main that can be used to encrypt values.">構成暗号化フィルタには、値の暗号化に使用できるメイン・クラス<code>io.helidon.config.encryption.Main</code>が用意されています。</span></p>

<markup
lang="bash"
title="Encrypt secret <code>secretToEncrypt</code> using shared secret <code>masterPassword</code>"
>java -jar &lt;path-to-app-libs-dir&gt;/helidon-config-encryption-{helidon-version}.jar aes masterPassword secretToEncrypt</markup>

<p><span class="merged" id="all.1wE2Xx" title="原文 : The tool returns the string to be entered into configuration as the value of a property.">このツールは、構成に入力される文字列をプロパティの値として返します。</span></p>

</div>


<h4 id="_shared_secret_aes"><span class="merged" id="all.1VtVpi" title="原文 : Shared Secret (AES)">共有シークレット(AES)</span></h4>
<div class="section">
<p><span class="merged" id="all.12G4Hj" title="原文 : You can provide a shared secret in a couple of ways:">いくつかの方法で共有シークレットを指定できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.37GDQC" title="原文 : in configuration - for testing/demo purposes only - key is security.config.aes.insecure-passphrase">構成内 - テスト/デモ専用 - キーは<code>security.config.aes.insecure-passphrase</code>です</span></p>

</li>
<li>
<p><span class="merged" id="all.4NHewK" title="原文 : as an environment variable - SECURE_CONFIG_AES_MASTER_PWD">環境変数として - <code>SECURE_CONFIG_AES_MASTER_PWD</code></span></p>

</li>
</ul>

</div>

</div>


<h3 id="_using_asymmetric_encryption_rsa"><span class="merged" id="all.shkWH" title="原文 : Using asymmetric encryption (RSA)">非対称暗号化(RSA)の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.2fbVhl.spl1" title="原文 : This approach is based on a pair of keys: a public key which is known to anybody, and a private key which is known to a limited set of parties (usually a single person or process).">このアプローチは、キーのペアに基づきます: 誰でも知っている公開キーと、限定されたパーティ・セット(通常は単一の個人またはプロセス)で知られている秘密キー。</span> <span class="merged" id="all.2fbVhl.spl2" title="原文 : For asymmetric encryption, the following is true:">非対称暗号化の場合、次のことが当てはまります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1JvcaD" title="原文 : a value encrypted by a public key can only be decrypted by the private key">公開キーで暗号化された値は、秘密キーでのみ復号化できます</span></p>

</li>
</ul>

<p><span class="merged" id="all.1x9Qcl" title="原文 : When using the config encryption filter, you should encrypt the configuration values using the public key, and give the application process access to the private key to decrypt the values.">構成暗号化フィルタを使用する場合は、公開キーを使用して構成値を暗号化し、アプリケーション・プロセスに秘密キーへのアクセス権を付与して値を復号化する必要があります。</span></p>


<h4 id="_encrypting_values_rsa"><span class="merged" id="all.pGZyx" title="原文 : Encrypting values (RSA)">値の暗号化(RSA)</span></h4>
<div class="section">
<p><span class="merged" id="all.1XOQSF.1" title="原文 : The config encryption filter provides a Main class io.helidon.config.encryption.Main that can be used to encrypt values.">構成暗号化フィルタには、値の暗号化に使用できるメイン・クラス<code>io.helidon.config.encryption.Main</code>が用意されています。</span></p>

<markup
lang="bash"
title="Encrypt secret <code>secretToEncrypt</code> using public certificate in a keystore"
>java -jar &lt;path-to-app-libs-dir&gt;/helidon-config-encryption-{helidon-version}.jar rsa /path/to/keystore.p12 keystorePassword publicCertAlias secretToEncrypt</markup>

<p><span class="merged" id="all.1wE2Xx.1" title="原文 : The tool returns the string to be entered into configuration as the value of a property.">このツールは、構成に入力される文字列をプロパティの値として返します。</span></p>

</div>


<h4 id="_configure_config_encryption_filter_rsa"><span class="merged" id="all.drF2X" title="原文 : Configure config encryption filter (RSA)">構成暗号化フィルタ(RSA)の構成</span></h4>
<div class="section">
<p><span class="merged" id="all.1rX5H2.spl1" title="原文 : You can configure the properties of a private key in a keystore.">キーストア内の秘密キーのプロパティを構成できます。</span> <span class="merged" id="all.1rX5H2.spl2" title="原文 : These keys are prefixed with security.config.rsa.keystore">これらのキーには、プレフィクスとして<code>security.config.rsa.keystore</code>が付きます</span> </p>

<div class="block-title"><span class="merged" id="all.3pNmqp" title="原文 : RSA Configuration Options: Keystore"><span>RSA構成オプション: Keystore</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 25%;">
<col style="width: 41.667%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.USkNI"  title="原文:: What">作業</span></th>
<th><span class="merged" id="all.1Ov129.1"  title="原文:: Configuration Key">構成キー</span></th>
<th><span class="merged" id="all.4BsGyW"  title="原文:: Environment Variable">環境変数</span></th>
<th><span class="merged" id="all.4JM9z7.25"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.JdNzp" title="原文 : Keystore path">キーストア・パス</span></td>
<td class=""><span class="merged" id="all.4RHrxY"  title="原文: resource.path"><code>resource.path</code></span></td>
<td class=""><span class="merged" id="all.3uFsw1"  title="原文: SECURE_CONFIG_RSA_PRIVATE_KEY"><code>SECURE_CONFIG_RSA_PRIVATE_KEY</code></span></td>
<td class=""><span class="merged" id="all.3xf40n" title="原文 : Keystore is located in file system">キーストアはファイル・システムにあります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42wNql"  title="原文:: Keystore">キーストア</span></td>
<td class=""><span class="merged" id="all.4NXWjO"  title="原文: resource.resource-path"><code>resource.resource-path</code></span></td>
<td class=""><span class="merged" id="all.2kt7dz"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.Cuykk" title="原文 : Keystore is located on classpath">キーストアはクラスパスにあります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2CHOaQ"  title="原文:: Private key alias">秘密キーの別名</span></td>
<td class=""><span class="merged" id="all.44SXIm.1"  title="原文: key.alias"><code>key.alias</code></span></td>
<td class=""><span class="merged" id="all.oPYxX"  title="原文: SECURE_CONFIG_PRIVATE_KEY_ALIAS"><code>SECURE_CONFIG_PRIVATE_KEY_ALIAS</code></span></td>
<td class=""><span class="merged" id="all.35RNPp" title="原文 : Alias of the private key (such as &quot;1&quot;, which is usually the default)">秘密キーの別名(通常はデフォルトの1など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hR32y" title="原文 : Keystore passphrase">キーストア・パスフレーズ</span></td>
<td class=""><span class="merged" id="all.4ECGKw.1"  title="原文: passphrase"><code>passphrase</code></span></td>
<td class=""><span class="merged" id="all.39vPT8"  title="原文: SECURE_CONFIG_PRIVATE_KEYSTORE_PASSPHRASE"><code>SECURE_CONFIG_PRIVATE_KEYSTORE_PASSPHRASE</code></span></td>
<td class=""><span class="merged" id="all.3LblBB" title="原文 : Password for the keystore (and private key).">キーストア(および秘密キー)のパスワード。</span></td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.4KTtfm" title="原文 : RSA Configuration Options: PEM (PKCS#8) private key"><span>RSA構成オプション: PEM (PKCS#8)秘密キー</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 25%;">
<col style="width: 41.667%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.USkNI.1"  title="原文:: What">作業</span></th>
<th><span class="merged" id="all.1Ov129.2"  title="原文:: Configuration Key">構成キー</span></th>
<th><span class="merged" id="all.4BsGyW.1"  title="原文:: Environment Variable">環境変数</span></th>
<th><span class="merged" id="all.4JM9z7.26"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.38biMr.2"  title="原文:: Path">パス</span></td>
<td class=""><span class="merged" id="all.1r132i"  title="原文: pem.key.resource.path"><code>pem.key.resource.path</code></span></td>
<td class=""><span class="merged" id="all.4WqJyp"  title="原文: SECURE_CONFIG_RSA_PEM_KEY"><code>SECURE_CONFIG_RSA_PEM_KEY</code></span></td>
<td class=""><span class="merged" id="all.2i6K0f" title="原文 : Key is located on file system">キーはファイル・システムにあります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3kE6LW"  title="原文:: Resource path">リソース・パス</span></td>
<td class=""><span class="merged" id="all.3VBCex"  title="原文: pem.key.resource.resource-path"><code>pem.key.resource.resource-path</code></span></td>
<td class=""><span class="merged" id="all.2kt7dz.1"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.2U93p" title="原文 : Key is located on classpath">キーはクラスパスにあります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4dc9z9"  title="原文:: Passphrase">パスフレーズ</span></td>
<td class=""><span class="merged" id="all.288gxB"  title="原文: pem.key.passphrase"><code>pem.key.passphrase</code></span></td>
<td class=""><span class="merged" id="all.3OjLIi"  title="原文: SECURE_CONFIG_PRIVATE_KEY_PASSPHRASE"><code>SECURE_CONFIG_PRIVATE_KEY_PASSPHRASE</code></span></td>
<td class=""><span class="merged" id="all.1bgF49" title="原文 : Password protecting the private key">秘密キーを保護するパスワード</span></td>
</tr>
</tbody>
</table>
</div>

<markup
lang="yaml"
title="Example yaml configuration"
>security.config:
  # Set to true for production - if set to true, clear text passwords will cause failure
  require-encryption: false
  # The "master" password for AES decryption. For production, set this via system property or environment variable.
  aes.insecure-passphrase: "myMasterPasswordForEncryption"
  # See documentation of pki-util
  rsa:
    keystore:
      # load from classpath
      resource.resource-path: ".ssh/keystore.p12"
      # If keystore is used, alias to use from the keystore (in this example, it is "1")
      key.alias: "1"
      # Password of keystore
      passphrase: "helidon"</markup>

</div>

</div>

</div>

</doc-view>
