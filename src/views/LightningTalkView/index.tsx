import React from "react";

export const LightningTalkView = (() => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">ライトニングトーク一覧</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">カンファレンス名</h2>
            <p className="text-gray-700 mb-1">開催日時: 2024年4月14日 10:00</p>
            <p className="text-gray-700 mb-1">開催場所: 東京</p>
            <p className="text-gray-700">終了時間: 2024年4月14日 16:00</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">カンファレンス名</h2>
            <p className="text-gray-700 mb-1">開催日時: 2024年4月15日 10:00</p>
            <p className="text-gray-700 mb-1">開催場所: 大阪</p>
            <p className="text-gray-700">終了時間: 2024年4月15日 16:00</p>
          </div>
        </div>
      </div>
    </div>
  );
});
