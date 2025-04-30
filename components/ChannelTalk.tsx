'use client';

import { useEffect } from 'react';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import type { BootOption, Profile } from '@channel.io/channel-web-sdk-loader';

type ChannelTalkProps = {
  pluginKey: string;
  memberId?: string;
  profile?: Profile;
};

export default function ChannelTalk({
  pluginKey,
  memberId,
  profile,
}: ChannelTalkProps) {
  useEffect(() => {
    // 채널톡 스크립트 로드
    ChannelService.loadScript();

    // 채널톡 부트 옵션 설정
    const bootOption: BootOption = {
      pluginKey,
    };

    // memberId가 있는 경우 멤버 유저로 설정
    if (memberId) {
      bootOption.memberId = memberId;

      if (profile) {
        bootOption.profile = profile;
      }
    }

    // 채널톡 부트
    ChannelService.boot(bootOption);

    // 컴포넌트 언마운트 시 채널톡 제거
    return () => {
      ChannelService.shutdown();
    };
  }, [pluginKey, memberId, profile]);

  return null;
}
