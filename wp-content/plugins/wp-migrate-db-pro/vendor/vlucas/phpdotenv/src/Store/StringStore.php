<?php

namespace DeliciousBrains\WPMDB\Container\Dotenv\Store;

final class StringStore implements \DeliciousBrains\WPMDB\Container\Dotenv\Store\StoreInterface
{
    /**
     * The file content.
     *
     * @var string
     */
    private $content;
    /**
     * Create a new string store instance.
     *
     * @param string $content
     *
     * @return void
     */
    public function __construct($content)
    {
        $this->content = $content;
    }
    /**
     * Read the content of the environment file(s).
     *
     * @return string
     */
    public function read()
    {
        return $this->content;
    }
}
