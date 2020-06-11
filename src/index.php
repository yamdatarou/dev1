<?php
class test
{
  public function init()
  {
    echo 'test class' . PHP_EOL;

    $this->testIsSet();
  }
  private function testIsSet()
  {
    $null = NULL;
    $zero = 0;
    $list = [
      'a' => '',
      'b' => '',
      'c' => '',
      'null' => NULL
    ];

    echo 'NULL is ';
    var_dump(isset($null)).PHP_EOL;
    echo '0 is ';
    var_dump(isset($zero)).PHP_EOL;

    echo 'array key none is ';
    var_dump(isset($list['none'])).PHP_EOL;
    echo 'array set is ';
    var_dump(isset($list['a'])).PHP_EOL;
    echo 'array value null is ';
    var_dump(isset($list['null'])).PHP_EOL;

    return true;
  }
}

$obj = new test();
$obj->init();
