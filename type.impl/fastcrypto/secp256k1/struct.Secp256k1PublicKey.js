(function() {var type_impls = {
"sui_bridge":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify_with_hash\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">verify_with_hash</a>&lt;H&gt;(\n    &amp;self,\n    msg: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>],\n    signature: &amp;Secp256k1Signature\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, FastCryptoError&gt;<div class=\"where\">where\n    H: HashFunction&lt;32&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Verify the signature using the given hash function to hash the message.</p>\n</div></details></div></details>",0,"sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SuiPublicKey-for-Secp256k1PublicKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#820\">source</a><a href=\"#impl-SuiPublicKey-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sui_types/crypto/trait.SuiPublicKey.html\" title=\"trait sui_types::crypto::SuiPublicKey\">SuiPublicKey</a> for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.SIGNATURE_SCHEME\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#821\">source</a><a href=\"#associatedconstant.SIGNATURE_SCHEME\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"sui_types/crypto/trait.SuiPublicKey.html#associatedconstant.SIGNATURE_SCHEME\" class=\"constant\">SIGNATURE_SCHEME</a>: <a class=\"enum\" href=\"sui_types/crypto/enum.SignatureScheme.html\" title=\"enum sui_types::crypto::SignatureScheme\">SignatureScheme</a> = SignatureScheme::Secp256k1</h4></section></div></details>","SuiPublicKey","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-Hash-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToFromBytes-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-ToFromBytes-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ToFromBytes for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_bytes\" class=\"method trait-impl\"><a href=\"#method.from_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Secp256k1PublicKey, FastCryptoError&gt;</h4></section></summary><div class='docblock'>Parse an object from its byte representation</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_bytes\" class=\"method trait-impl\"><a href=\"#method.as_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_bytes</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Borrow a byte slice representing the serialized form of this object</div></details></div></details>","ToFromBytes","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-Display-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-PartialOrd-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;Secp256k1PublicKey) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#1127\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#1144\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#1160\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#1177\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VerifyRecoverable-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-VerifyRecoverable-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl VerifyRecoverable for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Sig\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Sig\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Sig</a> = Secp256k1RecoverableSignature</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify_recoverable\" class=\"method trait-impl\"><a href=\"#method.verify_recoverable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">verify_recoverable</a>(\n    &amp;self,\n    msg: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>],\n    signature: &amp;Self::Sig\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, FastCryptoError&gt;</h4></section></summary><div class='docblock'>Verify a recoverable signature by recovering the public key and compare it to self.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify_recoverable_with_hash\" class=\"method trait-impl\"><a href=\"#method.verify_recoverable_with_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">verify_recoverable_with_hash</a>&lt;H&gt;(\n    &amp;self,\n    msg: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>],\n    signature: &amp;Self::Sig\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, FastCryptoError&gt;<div class=\"where\">where\n    H: HashFunction&lt;32&gt;,</div></h4></section></summary><div class='docblock'>Verify a recoverable signature by recovering the public key and compare it to self.\nThe recovery is using the given hash function. <a>Read more</a></div></details></div></details>","VerifyRecoverable","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Secp256k1PublicKey, &lt;D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<section id=\"impl-Eq-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-Eq-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for Secp256k1PublicKey</h3></section>","Eq","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-Ord-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;Secp256k1PublicKey) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#830-832\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#850-852\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#875-878\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26Secp256k1PrivateKey%3E-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-From%3C%26Secp256k1PrivateKey%3E-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a Secp256k1PrivateKey&gt; for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(secret: &amp;'a Secp256k1PrivateKey) -&gt; Secp256k1PublicKey</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&'a Secp256k1PrivateKey>","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-Debug-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-Serialize-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    serializer: S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3C%26BytesRepresentation%3Cfastcrypto::::secp256k1::%7Bimpl%2349%7D::%7Bconstant%230%7D%3E%3E-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-TryFrom%3C%26BytesRepresentation%3Cfastcrypto::::secp256k1::%7Bimpl%2349%7D::%7Bconstant%230%7D%3E%3E-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;BytesRepresentation&lt;fastcrypto::::secp256k1::{impl#49}::{constant#0}&gt;&gt; for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = FastCryptoError</h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(\n    value: &amp;BytesRepresentation&lt;fastcrypto::::secp256k1::{impl#49}::try_from::{constant#0}&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Secp256k1PublicKey, &lt;Secp256k1PublicKey as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;BytesRepresentation&lt;fastcrypto::::secp256k1::{impl#49}::{constant#0}&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<&BytesRepresentation<fastcrypto::::secp256k1::{impl#49}::{constant#0}>>","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3C%5Bu8%5D%3E-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-AsRef%3C%5Bu8%5D%3E-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>]&gt; for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<[u8]>","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VerifyingKey-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-VerifyingKey-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl VerifyingKey for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.PrivKey\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PrivKey\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">PrivKey</a> = Secp256k1PrivateKey</h4></section><section id=\"associatedtype.Sig\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Sig\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Sig</a> = Secp256k1Signature</h4></section><section id=\"associatedconstant.LENGTH\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.LENGTH\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">LENGTH</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a> = 33usize</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify\" class=\"method trait-impl\"><a href=\"#method.verify\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">verify</a>(\n    &amp;self,\n    msg: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>],\n    signature: &amp;Secp256k1Signature\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, FastCryptoError&gt;</h4></section></summary><div class='docblock'>Use Self to verify that the provided signature for a given message bytestring is authentic.\nReturns Error if it is inauthentic, or otherwise returns ().</div></details></div></details>","VerifyingKey","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-PartialEq-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Secp256k1PublicKey) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","sui_bridge::crypto::BridgeAuthorityPublicKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Secp256k1PublicKey\" class=\"impl\"><a href=\"#impl-Clone-for-Secp256k1PublicKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Secp256k1PublicKey</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Secp256k1PublicKey</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sui_bridge::crypto::BridgeAuthorityPublicKey"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()