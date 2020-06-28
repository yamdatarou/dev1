<?php
/**
 *
 */
class itemEntity
{
    private const JSON_FILE_PATH = __DIR__ . '/../_data/item_list.json';

    pravate $_itemList = '';

    public function init()
    {
        $this->_setItemList();
    }
    public getItemList()
    {
        return $this->_itemList ?? [];
    }
    public function getItemName()
    {
        return $this->_itemList['name'] ?? '';
    }
    public function getItemType()
    {
        return $this->_itemList['type'] ?? '';
    }
    public function getItemParents()
    {
        return $this->_itemList['parents'] ?? '';
    }

    private function _setItemList()
    {
        $this->_itemList = file_get_contents(self::JSON_FILE_PATH) ?? [];
    }
}
