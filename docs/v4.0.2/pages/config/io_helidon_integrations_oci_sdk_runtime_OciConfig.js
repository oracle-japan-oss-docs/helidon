<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3wyBd2" title="原文 : OciConfig (integrations.oci.sdk.runtime) Configuration">OciConfig (integrations.oci.sdk.runtime)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1Jhiay" title="原文 : Type: io.helidon.integrations.oci.sdk.runtime.OciConfig">タイプ: <a href="/apidocs/io.helidon.integrations.oci.sdk.runtime/io/helidon/integrations/oci/sdk/runtime/OciConfig.html" target="_blank">io.helidon.integrations.oci.sdk.runtime.OciConfig</a></span></p>

<p><span class="merged" id="all.2R8vzM" title="原文 : This is a standalone configuration type, prefix from configuration root: oci">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>oci</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.26"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.26" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.27"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.27"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.27"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.27"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3cCvjj"  title="原文: auth-strategies"><code>auth-strategies</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.13b5d6" title="原文 : string[] (auto, config, config-file, instance-principals, resource-principal)">string[] (auto, config, config-file, instance-principals, resource-principal)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1pFgoz.spl1" title="原文 : The list of authentication strategies that will be attempted by com.oracle.bmc.auth.AbstractAuthenticationDetailsProvider when one is called for.">com.oracle.bmc.auth.AbstractAuthenticationDetailsProviderがコールされたときに試行される認証方針のリスト。</span> <span class="merged" id="all.1pFgoz.spl2" title="原文 : This is only used if #authStrategy() is not present.">これは、#authStrategy()が存在しない場合にのみ使用されます。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1kVQh5" title="原文 : auto - if present in the list, or if no value for this property exists."><code>auto</code> - リストに存在する場合、またはこのプロパティの値が存在しない場合。</span></p>

</li>
<li>
<p><span class="merged" id="all.Gah4l" title="原文 : config - the com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider will be used, customized with other configuration properties described here."><code>config</code> - com.oracle.bmc.auth.SimpleAuthenticationDetailsProviderは、ここで説明する他の構成プロパティでカスタマイズされて使用されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.2xjIMv" title="原文 : config-file - the com.oracle.bmc.auth.ConfigFileAuthenticationDetailsProvider will be used, customized with other configuration properties described here."><code>config-file</code> - com.oracle.bmc.auth.ConfigFileAuthenticationDetailsProviderは、ここで説明する他の構成プロパティでカスタマイズされて使用されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1FQT1l" title="原文 : instance-principals - the com.oracle.bmc.auth.InstancePrincipalsAuthenticationDetailsProvider will be used."><code>instance-principals</code> - com.oracle.bmc.auth.InstancePrincipalsAuthenticationDetailsProviderが使用されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.2fvyGI" title="原文 : resource-principal - the com.oracle.bmc.auth.ResourcePrincipalAuthenticationDetailsProvider will be used."><code>resource-principal</code> - com.oracle.bmc.auth.ResourcePrincipalAuthenticationDetailsProviderが使用されます。</span></p>

</li>
</ul>

<p><span class="merged" id="all.2n7q3a" title="原文 : If there are more than one strategy descriptors defined, the first one that is deemed to be available/suitable will be used and all others will be ignored.">複数の戦略記述子が定義されている場合は、使用可能/適切とみなされる最初の記述子が使用され、他のすべての記述子は無視されます。</span></p>

<markup>@return the list of authentication strategies that will be applied, defaulting to `auto`
@see io.helidon.integrations.oci.sdk.runtime.OciAuthenticationDetailsProvider.AuthStrategy</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2EGO0t"  title="原文: auth-strategy"><code>auth-strategy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1xOqw7" title="原文 : string (auto, config, config-file, instance-principals, resource-principal)">string (auto、config、config-file、instance-principals、resource-principal)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ki48u.spl1" title="原文 : The singular authentication strategy to apply.">適用する単一認証方式。</span> <span class="merged" id="all.2ki48u.spl2" title="原文 : This will be preferred over #authStrategies() if both are present.">両方が存在する場合は、#authStrategies()より優先されます。</span> </p>

<markup>@return the singular authentication strategy to be applied</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1z0jS4"  title="原文: auth.fingerprint"><code>auth.fingerprint</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.34"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3sPYqg" title="原文 : The OCI authentication fingerprint.">OCI認証フィンガープリント。</span></p>

<markup>This configuration property has an effect only when `config` is, explicitly or implicitly,
present in the value for the #authStrategies(). This is also known as #simpleConfigIsPresent().
When it is present, this property must be provided in order to set the &lt;a
href="https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm"&gt;API signing key's fingerprint&lt;/a&gt;.
See {@linkplain com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider#getFingerprint()} for more details.</markup>
<markup>@return the OCI authentication fingerprint</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2BLofG"  title="原文: auth.keyFile"><code>auth.keyFile</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.35"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1d7Ynr"  title="原文: oci_api_key.pem"><code>oci_api_key.pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1g717u" title="原文 : The OCI authentication key file.">OCI認証キー・ファイル。</span></p>

<markup>This configuration property has an effect only when `config` is, explicitly or implicitly,
present in the value for the #authStrategies(). This is also known as #simpleConfigIsPresent().
When it is present, this property must be provided in order to set the
{@linkplain com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider#getPrivateKey()}. This file must exist in the
`user.home` directory. Alternatively, this property can be set using either #authPrivateKey() or
using #authPrivateKeyPath().</markup>
<markup>@return the OCI authentication key file</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.kv3cg"  title="原文: auth.passphrase"><code>auth.passphrase</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.GZzYz.3"  title="原文:: char[]">char[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1DqNEM" title="原文 : The OCI authentication passphrase.">OCI認証パスフレーズ。</span></p>

<markup>This configuration property has an effect only when `config` is, explicitly or implicitly,
present in the value for the #authStrategies(). This is also known as #simpleConfigIsPresent().
When it is present, this property must be provided in order to set the
{@linkplain com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider#getPassphraseCharacters()}.</markup>
<markup>@return the OCI authentication passphrase</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.yKMgz"  title="原文: auth.private-key"><code>auth.private-key</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.GZzYz.4"  title="原文:: char[]">char[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1jyqE" title="原文 : The OCI authentication private key.">OCI認証秘密キー。</span></p>

<markup>This configuration property has an effect only when `config` is, explicitly or implicitly,
present in the value for the #authStrategies(). This is also known as #simpleConfigIsPresent().
When it is present, this property must be provided in order to set the
{@linkplain com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider#getPrivateKey()}. Alternatively, this property
can be set using either #authKeyFile() residing in the `user.home` directory, or using
#authPrivateKeyPath().</markup>
<markup>@return the OCI authentication private key</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4d7njh"  title="原文: auth.private-key-path"><code>auth.private-key-path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.36"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ax2Dq" title="原文 : The OCI authentication key file path.">OCI認証キー・ファイルのパス。</span></p>

<markup>This configuration property has an effect only when `config` is, explicitly or implicitly,
present in the value for the #authStrategies(). This is also known as #simpleConfigIsPresent().
When it is present, this property must be provided in order to set the
{@linkplain com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider#getPrivateKey()}. This file path is
an alternative for using #authKeyFile() where the file must exist in the `user.home` directory.
Alternatively, this property can be set using #authPrivateKey().</markup>
<markup>@return the OCI authentication key file path</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.23vT2P"  title="原文: auth.region"><code>auth.region</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.37"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4WOZOy" title="原文 : The OCI region.">OCIリージョン。</span></p>

<markup>This configuration property has an effect only when `config` is, explicitly or implicitly,
present in the value for the #authStrategies(). This is also known as #simpleConfigIsPresent().
When it is present, either this property or com.oracle.bmc.auth.RegionProvider must be provide a value in order
to set the {@linkplain com.oracle.bmc.auth.ConfigFileAuthenticationDetailsProvider#getRegion()}.</markup>
<markup>@return the OCI region</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.QxXCh"  title="原文: auth.tenant-id"><code>auth.tenant-id</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.38"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2vEwi1" title="原文 : The OCI tenant id.">OCIテナントID。</span></p>

<markup>This configuration property has an effect only when `config` is, explicitly or implicitly,
present in the value for the #authStrategies(). This is also known as #simpleConfigIsPresent().
When it is present, this property must be provided in order to set the
{@linkplain com.oracle.bmc.auth.ConfigFileAuthenticationDetailsProvider#getTenantId()}.</markup>
<markup>@return the OCI tenant id</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Qn5lV"  title="原文: auth.user-id"><code>auth.user-id</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.39"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4RyNps" title="原文 : The OCI user id.">OCIユーザーID。</span></p>

<markup>This configuration property has an effect only when `config` is, explicitly or implicitly,
present in the value for the #authStrategies().
When it is present, this property must be provided in order to set the
{@linkplain com.oracle.bmc.auth.ConfigFileAuthenticationDetailsProvider#getUserId()}.</markup>
<markup>@return the OCI user id</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZwUj2"  title="原文: config.path"><code>config.path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.40"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2kdn8u" title="原文 : The OCI configuration profile path.">OCI構成プロファイル・パス。</span></p>

<markup>This configuration property has an effect only when `config-file` is, explicitly or implicitly,
present in the value for the #authStrategies(). This is also known as #fileConfigIsPresent().
When it is present, this property must also be present and then the
{@linkplain com.oracle.bmc.ConfigFileReader#parse(String)}
method will be passed this value. It is expected to be passed with a
valid OCI configuration file path.</markup>
<markup>@return the OCI configuration profile path</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Pme1w"  title="原文: config.profile"><code>config.profile</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.41"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.36XosJ"  title="原文: DEFAULT"><code>DEFAULT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.253ADd" title="原文 : The OCI configuration/auth profile name.">OCI構成/認証プロファイル名。</span></p>

<markup>This configuration property has an effect only when `config-file` is, explicitly or implicitly,
present in the value for the #authStrategies(). This is also known as #fileConfigIsPresent().
When it is present, this property may also be optionally provided in order to override the default
`DEFAULT_PROFILE_NAME`.</markup>
<markup>@return the optional OCI configuration/auth profile name</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1fHYjx"  title="原文: imds.hostname"><code>imds.hostname</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.42"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3aBJye"  title="原文: 169.254.169.254"><code>169.254.169.254</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3WlG3B" title="原文 : The OCI IMDS hostname.">OCI IMDSホスト名。</span></p>

<markup>This configuration property is used to identify the metadata service url.</markup>
<markup>@return the OCI IMDS hostname</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.40C6e4"  title="原文: imds.timeout.milliseconds"><code>imds.timeout.milliseconds</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.13"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Y3D74"  title="原文: PT0.1S"><code>PT0.1S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2X5Zi3.spl1" title="原文 : The OCI IMDS connection timeout.">OCI IMDS接続タイムアウト。</span> <span class="merged" id="all.2X5Zi3.spl2" title="原文 : This is used to auto-detect availability.">これは可用性の自動検出に使用されます。</span> </p>

<markup>This configuration property is used when attempting to connect to the metadata service.</markup>
<markup>@return the OCI IMDS connection timeout
@see OciAvailability</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
