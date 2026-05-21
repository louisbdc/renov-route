<?php
$nom = isset($_GET['nom']) ? htmlspecialchars($_GET['nom']) : 'Prospect';
$email = isset($_GET['email']) ? htmlspecialchars($_GET['email']) : '';
$tel = isset($_GET['tel']) ? htmlspecialchars($_GET['tel']) : '';

header('Content-Type: text/vcard; charset=utf-8');
header('Content-Disposition: attachment; filename="prospect.vcf"');

echo "BEGIN:VCARD\r\n";
echo "VERSION:3.0\r\n";
echo "FN:" . $nom . "\r\n";
echo "TEL:" . $tel . "\r\n";
echo "EMAIL:" . $email . "\r\n";
echo "END:VCARD\r\n";
?>