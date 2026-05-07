<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://joyjunkremoval.com');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$first_name   = trim($data['first_name'] ?? '');
$email        = trim($data['email'] ?? '');
$phone_number = trim($data['phone_number'] ?? '');
$message      = trim($data['message'] ?? '');

if (!$first_name || !$email || !$phone_number || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'All fields required']);
    exit;
}

$payload = json_encode([
    'companyId' => 'eb151a7b-e674-4153-8b1a-f1a80de8a900',
    'customerDetails' => [
        'first_name'   => $first_name,
        'last_name'    => '',
        'email'        => $email,
        'phone_number' => $phone_number,
        'message'      => $message,
    ],
    'defaultReplyToEmail' => 'ronsamsnyder@gmail.com',
    'submitAs' => 'client',
]);

$ch = curl_init('https://app.autopilotapp.io/api/customer-submit-contact-form');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Accept: */*',
        'Origin: https://app.autopilotapp.io',
    ],
]);

$response = curl_exec($ch);
$status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($status === 200) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Submission failed']);
}
