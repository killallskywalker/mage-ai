import React from 'react';
import { Meta, Story } from '@storybook/react';

import ThemeBlock from '../../ThemeBlock';
import {
  Action,
  Add,
  AISparkle,
  AlertCircle,
  AlertTriangle,
  Alphabet,
  ArrowDown,
  ArrowDownSplitTwo,
  ArrowLeft,
  ArrowRight,
  ArrowsAdjustingFrameSquare,
  ArrowUp,
  Backfill,
  BackfillV2,
  Batch,
  BatchPipeline,
  Binary,
  BlockBlank,
  BlockCubePolygon,
  BlockGeneric,
  BlocksSeparated,
  BlocksStacked,
  Branch,
  BranchAlt,
  CalendarDate,
  CalendarRounded,
  Callback,
  CaretDown,
  CaretRight,
  Categories,
  Category,
  Chart,
  Charts,
  Chat,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleWithArrowUp,
  Clone,
  Close,
  Code,
  Column,
  Conditional,
  Copy,
  CubeWithArrowDown,
  Cursor,
  DataIntegrationPipeline,
  DBT,
  DiamondDetached,
  DiamondShared,
  DocumentIcon,
  Edit,
  Ellipsis,
  Email,
  Expand,
  File as FileIcon,
  FileFill as FilledFileIcon,
  Filter,
  Folder,
  FrameBoxSelection,
  GitHubIcon,
  Graph,
  GraphWithNodes,
  Group,
  HexagonAll,
  IDLetters,
  Info,
  Input,
  Insights,
  Integration,
  Lightning,
  List,
  Locked,
  Logs,
  MapPin,
  Menu,
  MicrosoftIcon,
  Monitor,
  MultiShare,
  MusicNotes,
  NavDashboard,
  NavData,
  NavGraph,
  NavReport,
  NavTree,
  NewBlock,
  NumberHash,
  NumberWithDecimalHash,
  Open,
  PaginateArrowLeft,
  PaginateArrowRight,
  ParentEmpty,
  ParentLinked,
  Pause,
  Phone,
  PipeIcon,
  Pipeline,
  PipelineV2,
  PipelineV3,
  PlayButton,
  PlayButtonFilled,
  PlugAPI,
  PowerUps,
  PreviewHidden,
  PreviewOpen,
  Refresh,
  RoundedSquare,
  Save,
  Schedule,
  Search,
  Secrets,
  Sensor,
  Settings,
  SettingsWithKnobs,
  Slack,
  Smiley,
  Stack,
  Streaming,
  Subitem,
  Sun,
  Switch,
  Table,
  TemplateShapes,
  Terminal,
  TodoList,
  Trash,
  Tree,
  Union,
  Variables,
  WeekDots,
  WorkspacesIcon,
  WorkspacesUsersIcon,
} from '@oracle/icons';
import EmptyCharts from '@oracle/icons/custom/EmptyCharts';
import Mage8Bit from '@oracle/icons/custom/Mage8Bit';

const ICONS = [
  Action,
  Add,
  AISparkle,
  AlertCircle,
  AlertTriangle,
  Alphabet,
  ArrowDown,
  ArrowDownSplitTwo,
  ArrowLeft,
  ArrowRight,
  ArrowsAdjustingFrameSquare,
  ArrowUp,
  Backfill,
  BackfillV2,
  Batch,
  BatchPipeline,
  Binary,
  BlockBlank,
  BlockCubePolygon,
  BlockGeneric,
  BlocksSeparated,
  BlocksStacked,
  Branch,
  BranchAlt,
  CalendarDate,
  CalendarRounded,
  Callback,
  CaretDown,
  CaretRight,
  Categories,
  Category,
  Chart,
  Charts,
  Chat,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleWithArrowUp,
  Clone,
  Close,
  Code,
  Column,
  Conditional,
  Copy,
  CubeWithArrowDown,
  Cursor,
  DataIntegrationPipeline,
  DBT,
  DiamondDetached,
  DiamondShared,
  DocumentIcon,
  Edit,
  Ellipsis,
  Email,
  EmptyCharts,
  Expand,
  FileIcon,
  FilledFileIcon,
  Filter,
  Folder,
  FrameBoxSelection,
  GitHubIcon,
  Graph,
  GraphWithNodes,
  Group,
  HexagonAll,
  IDLetters,
  Info,
  Input,
  Insights,
  Integration,
  Lightning,
  List,
  Locked,
  Logs,
  Mage8Bit,
  MapPin,
  Menu,
  MicrosoftIcon,
  Monitor,
  MultiShare,
  MusicNotes,
  NavDashboard,
  NavData,
  NavGraph,
  NavReport,
  NavTree,
  NewBlock,
  NumberHash,
  NumberWithDecimalHash,
  Open,
  PaginateArrowLeft,
  PaginateArrowRight,
  ParentEmpty,
  ParentLinked,
  Pause,
  Phone,
  PipeIcon,
  Pipeline,
  PipelineV2,
  PipelineV3,
  PlayButton,
  PlayButtonFilled,
  PlugAPI,
  PowerUps,
  PreviewHidden,
  PreviewOpen,
  Refresh,
  RoundedSquare,
  Save,
  Schedule,
  Search,
  Secrets,
  Sensor,
  Settings,
  SettingsWithKnobs,
  Slack,
  Smiley,
  Stack,
  Streaming,
  Subitem,
  Sun,
  Switch,
  Table,
  TemplateShapes,
  Terminal,
  TodoList,
  Trash,
  Tree,
  Union,
  Variables,
  WeekDots,
  WorkspacesIcon,
  WorkspacesUsersIcon,
];

const Icons = () => (
  <>
    {ICONS.map(Icon => (
      <ThemeBlock
        // @ts-ignore
        key={Icon.displayName}
        reducedPadding
        sideBySide
        // @ts-ignore
        title={Icon.displayName}
      >
        <Icon />
      </ThemeBlock>
    ))}
  </>
);

export default {
  component: Icons,
  title: 'Oracle/Icons',
} as Meta;

const Template: Story = () => <Icons />;

export const Main = Template.bind({});
